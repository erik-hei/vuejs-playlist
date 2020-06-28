var data = {
    name: 'Yoshi'
}

Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button @click="changeName">It\'s a me</button></p>',
    data: function() {
        return data
    },
    methods: {
        changeName: function() {
            this.name = 'Mario';
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'One Vue App'
    },
    methods: {
    },
    computed: {
        greet: function() {
            return 'Hello from one app :)';
        }

    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Two Vue App'
    },
    methods: {
        changeTitle: function() {
            one.title = "Title is diff now :)"
        }
    },
    computed: {
        greet: function() {
            return 'Yo dudes, this is app 2 speakin to ya :)';
        }

    }
});

// two.title = "Changed from outside";