const root = new Vue ({

    el: "#app",

    data: {

        items: [
            {
                url:'img/01.jpg',
                name:'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url:'img/02.jpg',
                name:'Svizzera',
                text:'Lorem ipsum'
            },
            {
                url:'img/03.jpg',
                name:'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                name:'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                url:'img/05.jpg',
                name:'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],

        //Al caricamento della pagina lascio il primo oggetto di items come default da visualizzare
        active: 0,

    },

    methods: {

        previous() {
            if (this.active == 0) { //se active è sul primo elemento
                this.active = this.items.length - 1; //lo riporto all'ultimo elemento dell'array
            } else {
                this.active--; //altrimenti continuo ad aggiungere + 1
            }
        },

        next() {
            if (this.active == this.items.length - 1) { //se active è sull'ultimo elemento dell'array
                this.active = 0; //lo riporto al primo
            } else {
                this.active++; //altrimenti continuo a togliere - 1
            }
        },

        showImage(index) {
            this.active = index;
        },

    },

    mounted() {
        setInterval(this.next, 3000);
    }

});



/* SENZA VUE.JS

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let item = '';
let thumb = '';
let active = 1;

for (let i = 0; i < items.length; i++) {
    item += `
        <div class="item">
            <img src="${items[i].url}" alt="">
            <div class="text">
                <h3>${items[i].name}</h3>
                <p>${items[i].text}</p>
            </div>
        </div>`
    thumb += `
        <div class="thumb">
            <img src="${items[i].url}" alt="">
        </div>
    `
}

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {
        active = items.length - 1; 

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } 
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) { 
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
}); 
*/