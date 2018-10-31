

//Cuando el button sea type: submit, se debe eescribir dentro de la funcion del jquery lo siguiente para evitar //
//que el browser se refresque//
//function(event){event.preventDefault();...}//

$("#submit").on("click", function () {
        event.preventDefault();
        var titulo = $("#title").val();
        var descripcion = $("#description").val();
        var casting = $("#cast").val();
        var imagen = $("#image").val();
        var puntaje = $("#score").val();
        var genero = $("#gender").val();

        //console.log(titulo, descripcion, casting, imagen, puntaje, genero)

        sendData({ //Promise = espera respuesta//
                title: titulo,
                description: descripcion,
                cast: casting,
                poster: imagen,
                score: puntaje,
                gender: genero,

        })
                .then(
                        success, onerror
                )
        function success(response) { //Muestra un objeto que tiene msg//
                $("#msg").append("<p>" + response.msg + "</p>");
                $("#msg").show();
        };

        function onerror(err) {
                console.log("Try Again");

        }

});

function sendData(params) { //Objeto que recibe esta función que va a tener todos los datos que yo mando al servidor //
        return $.ajax({
                method: "POST",
                url: "http://192.168.1.170:3000/peliculas",
                data: params,
        });
}

function getAllFilms() {
        $.ajax({
                method: "GET",
                url: "http://192.168.1.170:3000/peliculas",
        }).then(getSuc, getErr);
}

function getSuc(response) {
        listId.setItems(response);
        listId.listAll(response)
};
function getErr(err) {
        console.log("Try Again");
}

function getById(id){
        return $.ajax({
                method: "GET",
                url:"http://192.168.1.115:3000/peliculas" + id
        })
}

var listId = {
        series: [],
        setItems(data){
                listId.series = data;
},

listAll: function () {
        for (var i = 0; i < this.series.length; i++) {
                $("#list").append(this.assamble(listId.series[i]));
        }
        $('#list li').on('click', function(){
                var id = $(this).data('id')
                
                for(var i = 0; i < listId.series.length; i++){
                                if(listId.series[i].id == id){
                                        $(".detalleserie").html(listId.singleAssamble(listId.series[i]));    
                                        clear();   
                                }
                }

        })

},

assamble:function (series) {
        return '<li class=Series data-id="'+ series.id +'">'
                + '<h1>' + series.title + '</h1>'               
                + '<p> <img src="' + series.poster + '" style="width:150px;height:150px;"></li>'
                + '<p>' + series.description + '</p>'
                + '<p>' + series.gender + '</p>'
                + '<p>' + series.score + '</p>'
                + '</li>'
        },

 singleAssamble: function(series) {
        return  '<ul     <div class="detalleserie">'
                + '<h1>' + series.title + '</h1>'
                + '<li> <img src="' + series.poster + '"</li>'
                + '<li>' + series.score + '</li>'
                + '<li>' + series.description + '</li>'
                + '<li>' + series.cast + '</li>'
                + '<li>' + series.gender + '</li>'
                + '</ul>'
                + '</div>'
},

};
 
$(function () {
        listId.series = elements;
        listId.listAll();
})

function clear(){
        $("#list").html("");
};

function clearDetail(){
        $("detalleserie").html("");
        listId.listAll();
}
