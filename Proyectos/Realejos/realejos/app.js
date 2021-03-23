import { Carousel } from "./classes/carousel.js";


const RSS_URL = 'https://script.echeide.com/losrealejos_rss/'


fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        var parser = new DOMParser;
        var id = 0;




        const items = [...data.querySelectorAll("item")].map(item => {
            return {
                title: item.querySelector("title").innerHTML,
                text: item.querySelector("description").textContent,
                imageUrl: item.querySelector("thumbnail").textContent,
            }
        })
        let html = ``;
        console.log('data', data);

        const carousel = new Carousel(document.body, items);

        carousel.play();

    });