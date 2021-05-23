const urlApi = "http://api.mediastack.com/v1/news?access_key=94fd0b2229276a218f59ec41328bb954&sources=cnn,bbc";

fetch(urlApi)
.then(response => response.json())
.then(noticias => {

    let tablaDatos = document.getElementById("tablaDatos");
    tablaDatos.innerHTML = "";
    noticias.data.forEach(element => {
        tablaDatos.innerHTML +=`
            <tr class="row">
                <td>${element.source}</td>
                <td>${element.category}</td>
                <td>${element.title}</td>
                <td>${element.language}</td>
                <td><a href="${element.url}" target="_blank">${element.url}</a></td>
            </tr>
            `;
    });
})
.catch(err => console.log(err));
