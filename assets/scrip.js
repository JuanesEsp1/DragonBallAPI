$( document ).ready(function() {
    componentsChargers("characters");
});

const componentsChargers = (component) => {
    $.ajax({
        url: "components/"+component+".php"
    }).done(function(res) {
        $("#main").html(res);
    });
}
