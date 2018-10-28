var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello'        
    },
    //computed는 미리 계산된 값을 반환 그래서 message가 변해도 항상 같은 값
    computed: {
        reversedMessage1: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reversedMessage2: function(){
            return this.message.split('').reverse().join('')
        }
    }
});

