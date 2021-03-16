const RSS_URL = 'https://script.echeide.com/losrealejos_rss/'

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
            html += `
        <div class="carousel-item active" data-bs-interval="10000">
            <div class="container-item">
        <article>
          <img src="${el.querySelector("thumbnail").innerHTML}" alt="">
          <div class="carousel-caption position-absolute bottom-0 start-0  mb-3 d-block">
          <h5 class="title text-uppercase ms-5 pt-4">
              ${el.querySelector("title").innerHTML}
          </h5>
          
          <p class="description ms-5">
          ${el.querySelector("description").innerHTML}
         
              </p>
              </div>
              </div>
          </div>
      </div>
        </article>
      `;
        });
        document.body.insertAdjacentHTML("beforeend", html);


    });
let html2 = `</div></div>`
document.body.insertAdjacentHTML("beforeend", html2);



/*loadXMLFeed = () => {
    const url = "rss.xml";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            displayList(xml);
        })

}
document.addEventListener("DOMContentLoaded", loadXMLFeed);

function displayList(a) {
    let list = document.getElementById('item');
    let item = a.getElementsByTagName('item');
    let itemNum = a.getElementsByTagName('item').length;
    console.log(itemNum);




    for (let i = 0; i > itemNum; i++) {
        let li = document.createElement('li');
        li.className = "listItem";

        li.innerHTML =
            `
        <h3>${item[i].getElementsByTagName('title')[0].innerHTML}</h3>
        <p>${item[i].getElementsByTagName('description')[0].innerHTML}</p>
        `;

        list.appendChild(li);
    }
}
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

let urlRSS = 'https://script.echeide.com/losrealejos_rss/';

$http.get(urlRSS).then(function(response) {
    if (response.status == 200) {
        var parser = new DOMParser;
        var doc = parser.parserFromString(response.data, 'text/xml')

        var item = doc.querySelectorAll('item')

    }
});
*/