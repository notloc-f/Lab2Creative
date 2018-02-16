$(document).ready(function(){

var stackURL= "https://opentdb.com/api.php?amount=11&category=12&difficulty=medium&type=boolean"
$.ajax({
  url: stackURL,
  dataType : "json",
  success:function(json){
    console.log(json);
    for(var i=0; i <10;i++){
    //var Qadd="<p>";

    var Qadd = "<p>" + json.results[i].question + "</p>";
    var toAdd = ".Sec" +i;
	if(json.results[i].correct_answer === json.results[0].correct_answer){
      Qadd+= " <a href=\"true.html\">Check Answer </a>";
    }
	else{
     Qadd+= " <a href=\"false.html\">Check Answer </a>";

}
    $(toAdd).html(Qadd);
    console.log(Qadd);
  };
  }
});
});
