/* Descrizione:
Partendo dal markup in allegato, rifare lo slider usando Vuejs.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce */

var app = new Vue({
  el: '#app',
  data: {
    currentElement: 0,
    slides: [
      {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
      },
      {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
      },
      {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
      },
    ],
  },
  methods: {
    // se l'indice dell'elemento corrente è minore della quantità di elementi nell'array,
    // incremento l'indice
    nextElement() {
      if (this.currentElement < this.slides.length - 1) {
        this.currentElement++;
        // altrimento lo faccio ricominciare da capo
      } else {
        this.currentElement = 0;
      }
    },
    // se l'indice dell'elemento corrente è maggiore di zero,
    // decremento l'indice
    previousElement() {
      if (this.currentElement > 0) {
        this.currentElement--;
        // atrimenti lo faccio partire dall'ultimo elemento
      } else {
        this.currentElement = this.slides.length - 1;
      }
    },
    showThisThumbBig(index) {
      this.currentElement = index;
    },
  },
});
