var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event){
            alert('Hello ' + this.name + "!")
            //event is the native DOM event
            if(event){
                alert(event.target.tagName)
            }
        }
    }
})

new Vue({
    el: "#example-3",
    methods: {
        say: function(message){
            alert(message);
        },
        warn: function(message, event){
            //now we have access to the native event
            if (event) event.preventDefault();
            alert(message);
        }
    }
})