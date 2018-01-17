$(document).ready(function(){
  $("#fortune-teller-survey").submit(function(event){
    event.preventDefault();
    var luckyCount = 0;
    var unluckyCount = 0;
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      luckyCount += 1;
    });
    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      unluckyCount += 1;
    });

    if (luckyCount > unluckyCount) {
      $("#lucky-results").show();
    } else if (luckyCount < unluckyCount) {
      $("#unlucky-results").show();
    }
      else {
      $("#same-results").show();
      }

  });
});
