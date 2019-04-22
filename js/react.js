
  var k=0;
  var g=0;	
  const Top10 = function(props) {
  console.log(props)
  const Imagenes = props.imagen;
  const Artista = props.artista;
  const Lanzamiento = props.lanzamiento;
  const Categoria = props.categoria;
  const numbers = props.nombre;
  const listItems = numbers.map((Nombre) =>

    			<div className="col-md-6">
				  	<a href="#" className="list-group-item list-group-item-action"> 
				  		<div className="row">
				  			<div className="col-md-4" align="center">
				  				<img  src={Imagenes[k]} />
				  			</div>
				  			<div className="col-md-8">
				  				
				  				<span className="titulo">#{g+1}: {Nombre}</span><hr className="acheere" />
				  				<span className="ContenidoAlbum">
				  				<b>Artista: </b>{Artista[k]} <br />
				  				<b>Lanzamiento: </b>{Lanzamiento[k]}<br />
				  				<b>Categoria: </b> {Categoria[k]}<br />
				  				<b id={g++}>Calificaciones :</b> 5 Estrellas
				  				</span>
				  			</div>
				  		</div>
					</a>
					<hr id={k++}  />
				</div>

  );
  return (
    <div class="row" >{listItems}</div>
  );
}

	ReactDOM.render(
	  <Top10 numero={g=0}  nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top10')
	);




function Topcito2() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top20')
	);
}
function Topcito3() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top30')
	);
}
function Topcito4() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top40')
	);
}
function Topcito5() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top50')
	);
}
function Topcito6() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top60')
	);
}
function Topcito7() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top70')
	);
}
function Topcito8() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top80')
	);
}
function Topcito9() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top90')
	);
}
function Topcito10() {
	
	ReactDOM.render(
	  <Top10 numero={g=Uno} numero={k=0} nombre={Nombre} imagen={Imagen} artista={Artista} lanzamiento={Lanzamiento} categoria={Categoria} />,
	  document.getElementById('Top100')
	);
}


