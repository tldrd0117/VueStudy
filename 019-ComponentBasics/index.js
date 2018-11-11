Vue.component('button-counter', {
    // obj로 하면 3개의 버튼이 한 count를 사용
    //function으로 하면 독립적으로 사용
    data: function () {
        return {
            count: 0
        }
    },
    template: "<button @click='count++'>You clicked me {{ count }} times. </button>"

})

new Vue({ el: '#components-demo'})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue'},
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})

Vue.component('blog-post', {
    props: ['post'],
    template:`
        <div class='blog-post'>
            <h3>{{ post.title }}</h3>
            <button @click="$emit('enlarge-text')">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
        `
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content:"content..." },
            { id: 2, title: 'Blogging with Vue', content:"content..." },
            { id: 3, title: 'Why Vue is so fun', content:"content..." }
        ],
        postFontSize: 1
    }
})

Vue.component('custom-input', {
    props:['value'],
    template:`
        <input
            v-bind:value="value"
            @input="$emit('input', $event.target.value)"
            >
    `
})


new Vue({
    el: '#custom-input-demo',
    data: {
        searchText: 'dwde'
    }
});

Vue.component('alert-box', {
    template: `
        <div v-bind:style="alertStyle">
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `,
    data: function() {
        return{
            alertStyle:{
                padding: "10px 20px",
                background: "#f3beb8",
                border: "1px solid #f09898"
            }
        }
    },
    
})

new Vue({
    el: '#alert-demo',
    
})

Vue.component("tab-button", {
    props: ["tabname", "settab"],
    template: "<button @click='settab(tabname)'>{{ tabname }}</button>"
})

Vue.component("tab-content", {
    props: ["currenttab"],
    template: "<component :is='currenttab'></component>"
})

Vue.component("Home", {
    template: "<h3>Home</h3>"
})
Vue.component("Posts", {
    template: "<h3>Posts</h3>"
})
Vue.component("Archive", {
    template: "<h3>Archive</h3>"
})

new Vue({
    el: '#tabs-demo',
    data:{
        tabs:[
            'Home', 'Posts', 'Archive'
        ],
        currentTab: "Home"
    },
    methods:{
        setCurrentTab: function(value){
            this.currentTab = value
        }
    }

})
