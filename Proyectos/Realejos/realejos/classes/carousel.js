export class Carousel {
    /**
     * 
     * @param {HTMLElement} container Referencia al contenedor donde se mostrarán los items
     * @param {Array} items Array de items a mostrar
     *  Cada item debe ser un objeto con la siguiente interfaz:
     *  {
     *      title: "Titulo del item",
     *      text: "Texto del item",
     *      imageUrl: "Imágen del item",
     *  } 
     */
    constructor(container, items) {
        this.container = container;
        this.items = items;
        this.index = -1;
        this.playInterval = null;
        this.stepTime = 10000;
    }
    play() {
        if (this.playInterval) {
            //Ya estamos reproduciendo
            return;
        }
        this.next();
        this.playInterval = setInterval(() => this.next(), this.stepTime);
    }
    pause() {
        clearInterval(this.playInterval);
        this.playInterval = null;
    }
    next() {
        //Incrementamos el indice de item a renderizar
        this.index++;
        if (this.index == this.items.length) {
            //Hemos sobrepasado el último item
            //Volvemos a empezar
            this.index = 0;
        }
        const item = this.items[this.index];
        this.render(item);
    }
    render(item) {
        var parser = new DOMParser;

        var description = parser.parseFromString(item.text, 'text/html');

        console.log(description);

        this.container.innerHTML = `
            <div class="item">
                <img class="image" src="${item.imageUrl}">
                <h4 class="title">${item.title}</h4>
                <div class="text">${description.body.innerHTML}</div>
            </div>
        `;
    }
}