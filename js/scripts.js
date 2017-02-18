$(function(){
  $("#stageCommit").submit(function(){
    event.preventDefault();
    var score = 0;
  score += parseInt($("input:radio[name=team]:checked").val());
  score += parseInt($("input:radio[name=probSolve]:checked").val());
  score += parseInt($("input:radio[name=commit]:checked").val());
  score += parseInt($("input:radio[name=why]:checked").val());
  score += parseInt($("input:radio[name=personality]:checked").val());
  console.log(score);


  if (score>=12)
  {$("#answer1").show()
  $("#answer2").hide()
  $("#answer3").hide()}

  else if (score>=9 && score<=11)
  {$("#answer2").show()
  $("#answer1").hide()
  $("#answer3").hide()}

  else if (score<9)
  {$("#answer3").show()
  $("#answer2").hide()
  $("#answer1").hide()}



});

});
