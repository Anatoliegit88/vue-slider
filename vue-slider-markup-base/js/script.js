const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

console.log(slides);

const { createApp } = Vue;

createApp({
  data() {
    return {
      album: {
        img: [
          "img/01.jpg",
          "img/02.jpg",
          "img/03.jpg",
          "img/04.jpg",
          "img/05.jpg",
        ],
        firstSlide: 0,
      },
    };
  },
  methods: {
    downBtn: function () {
      if (this.firstSlide < album.img.length - 1) {
        this.firstSlide++;
      } else {
        this.firstSlide = 0;
      }
    },
    upBtn: function () {
      if (this.firstSlide > 0) {
        this.firstSlide--;
      } else {
        this.firstSlide = album.img.length - 1;
      }
    },
    showSlide(onClick) {
      this.firstSlide = onClick;
    },
  },
  created: function () {
    console.log(album);
  },
}).mount("#app");
