var vm = new Vue({
    el: "#app"
});

var vm2 = new Vue({
    el: "#reusable",
    data: {
        loginType: 'username'
    },
    methods: {
        toggle: function(){
            this.loginType = this.loginType === 'username'? 'password' : 'username'
        }
    }
});

var vm3 = new Vue({
    el: "#unique",
    data: {
        loginType: 'username'
    },
    methods: {
        toggle: function(){
            this.loginType = this.loginType === 'username'? 'password' : 'username'
        }
    }
});

var vm4 = new Vue({
    el: "#show",
    data: {
        ok: true
    },
    methods: {
        toggle: function(){
            this.ok = !this.ok
        }
    }
})