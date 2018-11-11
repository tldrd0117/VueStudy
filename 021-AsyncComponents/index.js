Vue.component('async-component', function (resolve, reject){
    setTimeout(function(){
        resolve({
            template: `<div :style="styleObj">I am async!</div>`,
            data: function(){
                return {
                    styleObj:{
                        backgroundColor : '#d9d9d9'
                    }
                }
            }
        })
    },1000)
});

new Vue({
    el: "#async-component-demo"
})

//inject에대하여
//https://jsfiddle.net/chrisvfritz/tdv8dt3s/
