$( document ).ready(function() {
    componentsChargers("init");
});

const componentsChargers = (component) => {
    $.ajax({
        url: "components/"+component+".php"
    }).done(function(res) {
        $("#main").html(res);
    });
}