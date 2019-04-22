

    //Se recoge la informacion desde URL externa del top 100 de Itunes
    var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
        'dataType': "json",
        'success': function (data) {
                Top100 = data;
            }
        });
        return Top100;
    })(); 


//Se ordena la informacion en variables
var Nombre=  [];
var Imagen= [];
var Artista= [];
var Lanzamiento = [];
var Categoria = [];
var id = [];

for (var i = 0; i < 10; i++) {
    Nombre[i]=Top100.feed.entry[i]["im:name"]["label"];
    Imagen[i]=Top100.feed.entry[i]["im:image"][2]["label"];
    Artista[i]=Top100.feed.entry[i]["im:artist"]["label"];
    Lanzamiento[i]=Top100.feed.entry[i]["im:releaseDate"]["attributes"]["label"];
    Categoria[i]=Top100.feed.entry[i]["category"]["attributes"]["label"];
    id[i]=Top100.feed.entry[i]["id"]["attributes"]["im:id"];
}

//Se añade la funcion de cada pestaña de top
  Dos=10;
  function Top20() {  
    Uno=10;
    
    Calculo(Uno,Dos);
    Topcito2(Uno);
  }
  function Top30() {  
    Uno=20;
    Calculo(Uno,Dos);
    Topcito3(Uno);
  }
  function Top40() {  
    Uno=30;
    Calculo(Uno,Dos);
    Topcito4(Uno);
  }

function Top50() {  
    Uno=40;
    Calculo(Uno,Dos);;
    Topcito5(Uno);
  }

function Top60() {  
    Uno=50;
    Calculo(Uno,Dos);
    Topcito6(Uno);
  }

function Top70() {  
    Uno=60;
    Calculo(Uno,Dos);
    Topcito7(Uno);
  }

function Top80() {  
    Uno=70;
    Calculo(Uno,Dos);
    Topcito8(Uno);
  }

function Top90() {  
    Uno=80;
    Calculo(Uno,Dos);
    Topcito9(Uno);
  }
  function TopUltimo() {  
    Uno=90;
    Dos=8;
    Calculo(Uno,Dos);
    Topcito10(Uno);
    
  }

  function Calculo(Comienzo, Fin) {
    for (var i = 0; i < Fin; i++) {
      
      Nombre[i]=Top100.feed.entry[i+Comienzo]["im:name"]["label"];
      Imagen[i]=Top100.feed.entry[i+Comienzo]["im:image"][2]["label"];
      Artista[i]=Top100.feed.entry[i+Comienzo]["im:artist"]["label"];
      Lanzamiento[i]=Top100.feed.entry[i+Comienzo]["im:releaseDate"]["attributes"]["label"];
      Categoria[i]=Top100.feed.entry[i+Comienzo]["category"]["attributes"]["label"];
      id[i]=Top100.feed.entry[i+Comienzo]["id"]["attributes"]["im:id"];
  }


}





$(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});




    