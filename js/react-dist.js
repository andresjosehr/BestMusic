"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var k = 0;
var g = 0;
var Top10 = function Top10(props) {
	console.log(props);
	var Imagenes = props.imagen;
	var Artista = props.artista;
	var Lanzamiento = props.lanzamiento;
	var Categoria = props.categoria;
	var numbers = props.nombre;
	var listItems = numbers.map(function (Nombre) {
		return React.createElement(
			"div",
			{ className: "col-md-6" },
			React.createElement(
				"a",
				{ href: "#", className: "list-group-item list-group-item-action" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-4", align: "center" },
						React.createElement("img", { src: Imagenes[k] })
					),
					React.createElement(
						"div",
						{ className: "col-md-8" },
						React.createElement(
							"span",
							{ className: "titulo" },
							"#",
							g + 1,
							": ",
							Nombre
						),
						React.createElement("hr", { className: "acheere" }),
						React.createElement(
							"span",
							{ className: "ContenidoAlbum" },
							React.createElement(
								"b",
								null,
								"Artista: "
							),
							Artista[k],
							" ",
							React.createElement("br", null),
							React.createElement(
								"b",
								null,
								"Lanzamiento: "
							),
							Lanzamiento[k],
							React.createElement("br", null),
							React.createElement(
								"b",
								null,
								"Categoria: "
							),
							" ",
							Categoria[k],
							React.createElement("br", null),
							React.createElement(
								"b",
								{ id: g++ },
								"Calificaciones :"
							),
							" 5 Estrellas"
						)
					)
				)
			),
			React.createElement("hr", { id: k++ })
		);
	});
	return React.createElement(
		"div",
		{ "class": "row" },
		listItems
	);
};

ReactDOM.render(React.createElement(Top10, { numero: g = 0, nombre: Nombre, imagen: Imagen, artista: Artista, lanzamiento: Lanzamiento, categoria: Categoria }), document.getElementById('Top10'));

function Topcito2() {
	var _React$createElement;

	ReactDOM.render(React.createElement(Top10, (_React$createElement = { numero: g = Uno }, _defineProperty(_React$createElement, "numero", k = 0), _defineProperty(_React$createElement, "nombre", Nombre), _defineProperty(_React$createElement, "imagen", Imagen), _defineProperty(_React$createElement, "artista", Artista), _defineProperty(_React$createElement, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement, "categoria", Categoria), _React$createElement)), document.getElementById('Top20'));
}
function Topcito3() {
	var _React$createElement2;

	ReactDOM.render(React.createElement(Top10, (_React$createElement2 = { numero: g = Uno }, _defineProperty(_React$createElement2, "numero", k = 0), _defineProperty(_React$createElement2, "nombre", Nombre), _defineProperty(_React$createElement2, "imagen", Imagen), _defineProperty(_React$createElement2, "artista", Artista), _defineProperty(_React$createElement2, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement2, "categoria", Categoria), _React$createElement2)), document.getElementById('Top30'));
}
function Topcito4() {
	var _React$createElement3;

	ReactDOM.render(React.createElement(Top10, (_React$createElement3 = { numero: g = Uno }, _defineProperty(_React$createElement3, "numero", k = 0), _defineProperty(_React$createElement3, "nombre", Nombre), _defineProperty(_React$createElement3, "imagen", Imagen), _defineProperty(_React$createElement3, "artista", Artista), _defineProperty(_React$createElement3, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement3, "categoria", Categoria), _React$createElement3)), document.getElementById('Top40'));
}
function Topcito5() {
	var _React$createElement4;

	ReactDOM.render(React.createElement(Top10, (_React$createElement4 = { numero: g = Uno }, _defineProperty(_React$createElement4, "numero", k = 0), _defineProperty(_React$createElement4, "nombre", Nombre), _defineProperty(_React$createElement4, "imagen", Imagen), _defineProperty(_React$createElement4, "artista", Artista), _defineProperty(_React$createElement4, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement4, "categoria", Categoria), _React$createElement4)), document.getElementById('Top50'));
}
function Topcito6() {
	var _React$createElement5;

	ReactDOM.render(React.createElement(Top10, (_React$createElement5 = { numero: g = Uno }, _defineProperty(_React$createElement5, "numero", k = 0), _defineProperty(_React$createElement5, "nombre", Nombre), _defineProperty(_React$createElement5, "imagen", Imagen), _defineProperty(_React$createElement5, "artista", Artista), _defineProperty(_React$createElement5, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement5, "categoria", Categoria), _React$createElement5)), document.getElementById('Top60'));
}
function Topcito7() {
	var _React$createElement6;

	ReactDOM.render(React.createElement(Top10, (_React$createElement6 = { numero: g = Uno }, _defineProperty(_React$createElement6, "numero", k = 0), _defineProperty(_React$createElement6, "nombre", Nombre), _defineProperty(_React$createElement6, "imagen", Imagen), _defineProperty(_React$createElement6, "artista", Artista), _defineProperty(_React$createElement6, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement6, "categoria", Categoria), _React$createElement6)), document.getElementById('Top70'));
}
function Topcito8() {
	var _React$createElement7;

	ReactDOM.render(React.createElement(Top10, (_React$createElement7 = { numero: g = Uno }, _defineProperty(_React$createElement7, "numero", k = 0), _defineProperty(_React$createElement7, "nombre", Nombre), _defineProperty(_React$createElement7, "imagen", Imagen), _defineProperty(_React$createElement7, "artista", Artista), _defineProperty(_React$createElement7, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement7, "categoria", Categoria), _React$createElement7)), document.getElementById('Top80'));
}
function Topcito9() {
	var _React$createElement8;

	ReactDOM.render(React.createElement(Top10, (_React$createElement8 = { numero: g = Uno }, _defineProperty(_React$createElement8, "numero", k = 0), _defineProperty(_React$createElement8, "nombre", Nombre), _defineProperty(_React$createElement8, "imagen", Imagen), _defineProperty(_React$createElement8, "artista", Artista), _defineProperty(_React$createElement8, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement8, "categoria", Categoria), _React$createElement8)), document.getElementById('Top90'));
}
function Topcito10() {
	var _React$createElement9;

	ReactDOM.render(React.createElement(Top10, (_React$createElement9 = { numero: g = Uno }, _defineProperty(_React$createElement9, "numero", k = 0), _defineProperty(_React$createElement9, "nombre", Nombre), _defineProperty(_React$createElement9, "imagen", Imagen), _defineProperty(_React$createElement9, "artista", Artista), _defineProperty(_React$createElement9, "lanzamiento", Lanzamiento), _defineProperty(_React$createElement9, "categoria", Categoria), _React$createElement9)), document.getElementById('Top100'));
}