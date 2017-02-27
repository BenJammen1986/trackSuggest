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

    if (score>=12) {
    $(".launch").show()
    $(".reevalute").hide()
    $(".reconsider").hide()
    }

    else if ((score<=11) && (score>=9)) {
    $(".reevalute").show()
    $(".launch").hide()
    $(".reconsider").hide()
    }

    else if (score<9) {
    $(".reconsider").show()
    $(".reevaluate").hide()
    $(".launch").hide()
    }

  });

});
