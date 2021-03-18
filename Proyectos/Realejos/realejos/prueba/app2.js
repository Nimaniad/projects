const RSS_URL = 'https://script.echeide.com/losrealejos_rss/'

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        var parser = new DOMParser;
        console.log(data);
        const items = data.querySelectorAll("item");
        let html = ``;

        items.forEach(el => {
            var thumbnail = el.querySelector('thumbnail');
            thumbnail = parser.parseFromString(thumbnail.textContent, 'text/html');
            var title = el.querySelector('title');
            title = parser.parseFromString(title.textContent, 'text/html');
            var description = el.querySelector('description');
            description = parser.parseFromString(description.textContent, 'text/html');

            document.getElementById("thumbnail").innerHTML = thumbnail.body.innerHTML;
            document.getElementById("title").innerHTML = thumbnail.body.innerHTML;
            document.getElementById("description").innerHTML = thumbnail.body.innerHTML;

        });
        console.log(items);
    });