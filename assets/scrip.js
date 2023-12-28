$( document ).ready(function() {
    componentsChargers("characters");
    getCharacter();
});

const componentsChargers = (component) => {
    $.ajax({
        url: "components/"+component+".php"
    }).done(function(res) {
        $("#main").html(res);
    });
}


const getCharacter = () => {
    const apiUrl = "https://dragonball-api.com/api/characters";
    fetch(apiUrl)
    .then(response => response.json()) 
    .then(data => processCharacter(data.items)) 
    .catch(error => console.error("Error en la solicitud:", error));
}

const processCharacter = (characters) => {
    console.log(characters);
    $("#charactersCards").html("");
    characters.forEach(character => {
        $("#charactersCards").append(`<div class="card">
        <div class="back">
            <img src="${character.image}" alt="">
        </div>

        <div class="description">

            <div class="name">
                <h1>${character.name}</h1>
            </div>

            <div class="subtitulo">
                <h3>${character.race} - ${character.gender}</h3>
            </div>

            <div class="titulo">
                <h3>Total KI:</h3>
            </div>

            <div class="subtitulo">
                <h3>${character.maxKi}</h3>
            </div>
            
            <div class="titulo">
                <h3>Group:</h3>
            </div>

            <div class="subtitulo">
                <h3>${character.affiliation}</h3>
            </div>
            
        </div>
    </div>`);
    });
}
