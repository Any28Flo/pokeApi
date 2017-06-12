var cargaPagina = function(){
	listaPokemon();
	$(document).on("click", ".pokemon" , detallePokemon);


}

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

	listaPokemones.forEach(function(pokemon){
		var $itemPokemon = $("<li/>");
		$itemPokemon.addClass("pokemon");
		$itemPokemon.text(pokemon.name);
		$itemPokemon.attr("data-url",pokemon.url);
		$lista.append($itemPokemon);

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

