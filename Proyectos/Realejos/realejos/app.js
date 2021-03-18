const RSS_URL = 'https://script.echeide.com/losrealejos_rss/'

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        var parser = new DOMParser;
        var id = 0;
        console.log(data);
        const items = data.querySelectorAll("item");
        let html = ``;

        items.forEach((items, i) => {
            items.id = i + 1;


        });

        for (var i = 0 in items) {
            console.log(items[i]);
            if (i == 1) {
                var description = el.querySelector('description');
                description = parser.parseFromString(description.textContent, 'text/html');
                html += `
            <div class="carousel-item" data-bs-interval="10000">
            <div class="container-item">
        <article>
          <img src="${el.querySelector("thumbnail").innerHTML}" class="image d-block w-100" alt="">
          <div class="carousel-caption position-absolute bottom-0 start-0  mb-3 d-block">
          <div class="carousel-child">
          <h5 class="title text-uppercase ms-5 pt-4">
              ${el.querySelector("title").innerHTML}
          </h5>
          <p class="description ms-5">
          ${description.body.innerHTML}
              </p>
              </div>
              </div>
              </article>
         </div>
      </div>
        
      `;
            } else {
                var description = el.querySelector('description');
                description = parser.parseFromString(description.textContent, 'text/html');
                html += `
            <div class="carousel-item" data-bs-interval="10000">
            <div class="container-item">
        <article>
          <img src="${el.querySelector("thumbnail").innerHTML}" class="image d-block w-100" alt="">
          <div class="carousel-caption position-absolute bottom-0 start-0  mb-3 d-block">
          <div class="carousel-child">
          <h5 class="title text-uppercase ms-5 pt-4">
              ${el.querySelector("title").innerHTML}
          </h5>
          <p class="description ms-5">
          ${description.body.innerHTML}
              </p>
              </div>
              </div>
              </article>
         </div>
      </div>
        
      `;
            }
        }

    });