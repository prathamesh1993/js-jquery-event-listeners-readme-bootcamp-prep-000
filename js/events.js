//define functions here

$(document).ready(function(){

// call functions here
});

function getIt(){
  $('p').on("click", function() {
  alert('Hey');
});
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt(){
  $("input").on("keydown",function(e){
    if(e.key === "g"){
      alert("pop")
    }
  }
  )
}

