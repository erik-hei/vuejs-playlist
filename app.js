new Vue({
    el: '#vue-app',
    data: {
        name: 'Erik',
        job: 'TA at General Assembly',
        website: 'https://erik-hei.github.io',
        websiteTag: '<a href="https://erik-hei.github.io">My Portfolio</a>',
        age: 25,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
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
            console.log(parseInt(age))
        }
    },
    computed: {
        addToA: function() {
            return this.a + this.age;
        },
        addToB: function () {
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});