//Link de API de la que se obtendrán los datos 
const urlApi = "http://api.mediastack.com/v1/news?access_key=94fd0b2229276a218f59ec41328bb954&sources=cnn,bbc";

fetch(urlApi)
.then(response => response.json())      //convierte los datos JSON
.then(noticias => {                     //Es el resultado obtenido en formato objeto

    let tablaDatos = document.getElementById("tablaDatos"); //Lugar donde se mostrará en el html los datos de la API
    tablaDatos.innerHTML = "";
    noticias.data.forEach(element => {      //Se utiliza foreach para recorrer el array data en el objeto Noticias
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
.catch(err => console.log(err));    //En caso de errores mostrará por consola cuales son
