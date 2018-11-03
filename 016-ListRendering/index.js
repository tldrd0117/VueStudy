var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

new Vue({
    el: '#v-for-object',
    data:{
        object:{
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

//Caveats
//주의사항
var vm = new Vue({
    data: {
        items: ['a', 'b', 'c']
    }
})

vm.items[1] = 'x' // is NOT reactive
vm.items.length = 2 // is NOT reactive

Vue.set(vm.items, 1, 'x') // reactive
vm.items.splice(1, 1, 'x') // reactive

vm.$set(vm.items, 1, 'x') // reactive
vm.items.splice(2) // reactive legnth

//Object Change Detection Caveats
//객체 변화 발견 주의사항

var vm2 = new Vue({
    data: {
        a: 1
    }
})
//'vm.a' is now reactive
// vm.a 는 반응형

vm2.b = 2
// 'vm.b' is NOT reactive
// vm.b 는 비 반응형

//Vue는 새로운 루트 레벨 반응형 프로퍼티들은 
//런타임 변경이 허용되지 않는다 하지만 한번 싸여진 오브젝트는 가능하다
var vm3 = new Vue({
    data: {
        userProfile: {
            name: 'Anika'
        }
    }
})
Vue.set(vm3.userProfile, 'age', 27);

vm3.$set(vm3.userProfile, 'age', 27);
//Object.assign도 가능하다
Object.assign(vm3.userProfile,{
    age: 27,
    favoriteColor: 'Vue Green'
})

var vm4 = new Vue({
    el: "#even",
    data:{
        numbers: [1,2,3,4,5]
    },
    computed:{
        evenNumbers: function(){
            return this.numbers.filter(function (number){
                return number % 2 === 0
            });
        }
    }
})

var vm5 = new Vue({
    el: "#even2",
    data:{
        numbers: [1,2,3,4,5]
    },
    methods:{
        even: function(numbers){
            return numbers.filter(function (number){
                return number % 2 === 0
            });
        }
    }
})

var vm6 = new Vue({el: "#range"})

new Vue({
    el: '#template',
    data: {
        items: [{
            msg: "hello1"
        },{
            msg: "hello2"
        },{
            msg: "hello3"
        },{
            msg: "hello4"
        }]
    }
})

Vue.component('todo-item', {
    template: '\
    <li>\
        {{ title }}\
        <button @click="$emit(\'remove\')">Remove</button>\
    </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes'
            },
            {
                id: 2,
                title: 'Take out the trash'
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function(){
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})