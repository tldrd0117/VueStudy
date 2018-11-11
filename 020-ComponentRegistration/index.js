// Global Registration
Vue.component('component-a', {template:"<div>component-a</div>"});
Vue.component('component-b', {template:"<div>component-b</div>"});
Vue.component('component-c', {template:"<div>component-c</div>"});
new Vue({ el: '#global-regist'});

// Local Registration

var ComponentA = {template:"<div>local-component-a</div>"};
var ComponentB = {template:"<div>local-component-b</div>"};
var ComponentC = {template:"<div>local-component-c</div>"};
new Vue({ 
    el: '#local-regist',
    components: {
        ComponentA,
        ComponentB,
        ComponentC
    }
})