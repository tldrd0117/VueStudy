var vm = new Vue({
    el: '#target',
    data: {
        isActive: true,
        hasError: false
    }
});

var vm2 = new Vue({
    el: '#target2',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
})

var vm3 = new Vue({
    el: '#target3',
    data: {
        isActive: true,
        error: null
    },
    computed:{
        classObject: function(){
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

var vm4 = new Vue({
    el: '#target4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

var vm5 = new Vue({
    el: '#target5',
    data: {
        isActive: true,
        errorClass: 'text-danger'
    }
});

Vue.component('my-component',{
    template: '<p class="foo bar">Hi</p>'
})

var vm6 = new Vue({
    el: '#components-demo'
});

var vm7 = new Vue({
    el: '#style1',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});

var vm8 = new Vue({
    el: '#style2',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});

var vm9 = new Vue({
    el: '#overringStyles',
    data: {
        baseStyles: {
            color: 'blue'
        },
        overringStyles: {
            fontSize: '30px'
        }   
    }
});