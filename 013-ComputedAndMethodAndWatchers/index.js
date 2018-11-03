var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello',       
        determine: false,
        firstName: 'Foo',
        lastName: 'Bar'
    },
    //computed는 app의 data 부분에서 사용한 프로퍼티가 변화 되었을 때 연산한다
    computed: {
        reversedMessage1: function(){
            console.log("compute");
            console.log(this.determine);
            return this.message.split('').reverse().join('')
        },
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName
            },
            //computed는 default로 get만 지원하지만 set도 가능
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    //methods는 호출할 때 연산한다.
    methods: {
        reversedMessage2: function(){
            return this.message.split('').reverse().join('')
        }
    }
});
console.log(app.reversedMessage1)
// app.message = 'koko';
app.determine = true;

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        //whenever question changes, this function will run
        question: function ( newQuestion, oldQuestion ) {
            this.answer = "Waiting for you to stop typing..."
            this.debounedGetAnswer();
        }
    },
    created: function() {
        //setTimeout 같은 역할 lodash사용
        this.debounedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if ( this.question.indexOf('?') === -1 ) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return;
            }
            this.answer = 'Thinking...'
            var vm = this;
            axios.get('http://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function ( error ){
                    vm.answer = 'Error! Could not reach the API' + error
                })
        }
    }
});

