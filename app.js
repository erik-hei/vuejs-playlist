new Vue({
    el: '#vue-app',
    data: {
        name: 'Erik',
        job: 'TA at General Assembly',
        website: 'https://erik-hei.github.io',
        websiteTag: '<a href="https://erik-hei.github.io">My Portfolio</a>',
        age: '25',
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time) {
            return `Good ${time}, ${this.name}!`;
        },
        subtract: function(amt) {
            this.age -= amt;
            return this.age;
        },
        updateXY: function(e) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('You clicked me');
        },
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    }
});