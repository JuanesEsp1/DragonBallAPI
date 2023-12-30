$( document ).ready(function() {
    componentsChargers("characters");
    getCharacter();
});

const componentsChargers = (component) => {
    $.ajax({
        url: "components/"+component+".php"
    }).done(function(res) {
        $("#main").html(res);
        processFrm();
    });
}


const getCharacter = () => {
    apiUrl = "https://dragonball-api.com/api/characters";
    
    fetch(apiUrl)
    .then(response => response.json()) 
    .then(data => processCharacter(data.items)) 
    .catch(error => console.error("Error en la solicitud:", error));
}

const getCharactersearch = (url) => {
    apiUrl = url;
    fetch(apiUrl)
    .then(response => response.json()) 
    .then(data => processCharacter(data)) 
    .catch(error => console.error("Error en la solicitud:", error));
}

const processCharacter = (characters) => {
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







const activeMenu = () =>{
    $("#filters").toggle();
}


const processFrm =() =>{
    $("#frm").submit(function(e) {
        e.preventDefault();

        let name  =  $("#frmName").val();
        let race = $("#frmRace").val();
        let gender = $("#frmGender").val();
        let group = $("#frmGroup").val();

        let endPoint = "https://dragonball-api.com/api/characters?";
        let search ="";

        if (!name=="") {
            search = search+"&name="+name;
        }
        if (!race=="") {
            search = search+"&race="+race;
        }
        if (!gender=="") {
            search = search+"&gender="+gender;
        }
        if (!group=="") {
            search = search+"&affiliation="+group;
        }

        search = search.slice(1);

     
        

        $("#filters").toggle();
        $("#frm")[0].reset();
        getCharactersearch(endPoint+search);
    })
}


