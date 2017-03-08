
//For the Questionnaire Form:
$(function() {
  $("#stageCommit").submit(function(){
    event.preventDefault();

    var score = 0;
    score += parseInt($("input:radio[name=team]:checked").val());
    score += parseInt($("input:radio[name=probSolve]:checked").val());
    score += parseInt($("input:radio[name=commit]:checked").val());
    score += parseInt($("input:radio[name=why]:checked").val());
    score += parseInt($("input:radio[name=personality]:checked").val());
      debugger;
    if (score >= 12) {

      $("#launch").show();
    } else if (score >= 9 && score < 12) {
      console.log(score)
      $("#reevaluate").show();
    } else {
      $("#reconsider").show();
      console.log(score)
    }
  });

//For the dropdown form for programming tracks:
  $("#allTracks").on('change', function(){
    var selection = ($("#tracks").val());
    console.log(selection);

      if (selection === "Design") {
        $(".Design").show();
        $(".Ruby,.cSharp,.Java,.PHP").hide();
      } if (selection === "Ruby/Rails") {
        $(".Ruby").show();
        $(".cSharp,.Java,.PHP,.Design").hide();
      } if (selection === "C#/.Net") {
        $(".cSharp").show();
        $(".Ruby,.Java,.PHP,.Design").hide();
      } if (selection === "Java/Android") {
        $(".Java").show();
        $(".Ruby,.cSharp,.PHP,.Design").hide();
      } if (selection === "PHP/Drupal") {
        $(".PHP").show();
        $(".Ruby,.cSharp,.Java,.Design").hide();
      }
  });
});
