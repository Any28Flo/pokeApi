var cargaPagina = function(){
	listaPokemon();
	$(document).on("click", ".pokemon" , detallePokemon);


}
var arregloImagenes = [
	{"src":"img/1bulbasaur.png"},
	{"src":"img/2ivysaur.png"},
	{"src":"img/3venusaur.png"},
	{"src":"img/4charmander.png"},
	{"src":"img/5charmeleon.png"},
	{"src":"img/6charizard.png"},
	{"src":"img/7squirtle.png"},
	{"src":"img/8Wartortle.png"},
	{"src":"img/9Blastoise.png"},
	{"src":"img/10Caterpie.png"},
	{"src":"img/11Metapod.png"},
	{"src":"img/12Butterfree.png"},
	{"src":"img/13Weedle.png"},
	{"src":"img/14Kakuna.png"},
	{"src":"img/15Beedrill.png"},
	{"src":"img/16Pidgey.png"},
	{"src":"img/17Pidgeotto.png"},
	{"url":"img/18Pitget.png"},
	{"src":"img/19Rattata.png"},
	{"src":"img/20Raticate.png"}
	]
var listaPokemon = function (){
	
	var url = "http://pokeapi.co/api/v2/pokemon-species/"
	
	$.getJSON(url,function(data){
		var numeroPokemon = data.count;
		var listaPokemones= data.results;
		muestraTotal(numeroPokemon);
		muestraPokemones(listaPokemones);

	})
	

}
var muestraTotal = function (numeroPokemon){

	var $contador = $("#contadorPokemon");
	$contador.text(numeroPokemon);
}


var muestraPokemones = function(listaPokemones){
	var $lista = $("#listaPokemon");

	listaPokemones.forEach(function(pokemon,posicion){
		var ruta= arregloImagenes[posicion].src;

		console.log(arregloImagenes[posicion]);
		var $foto = $("<img/>");
		var $boton = $("<a>Ver poquemon </a>");
		var $nombre = $("<p>"+pokemon.name+"</p>");
		$nombre.addClass("card-content");
		$foto.attr("src",ruta);
		var $itemPokemon = $("<li/>");
		$itemPokemon.addClass("pokemon card col s10 l4");
		$boton.addClass("card-action");
		$foto.addClass("card-image responsive-img");
		$itemPokemon.text();
		$itemPokemon.attr("data-url",pokemon.url);

		$lista.append($itemPokemon);
		$itemPokemon.append($foto);
		$itemPokemon.append($nombre);
		$itemPokemon.append($boton);


	})
}
var plantillaPokemon="<p>Habitad:__habitad__</p>"+
		"<p>Color: __color__</p>";

var detallePokemon = function (){

	var url = $(this).data("url");
	var $contenedorPokemon = $("#listaDetalle");
	$.getJSON(url, function(data){
		$contenedorPokemon.html(plantillaPokemon.replace('__habitad__',data.habitat.name)
							.replace('__color__',data.color.name))
	})
	

}

$(document).ready(cargaPagina);

