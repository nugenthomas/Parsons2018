$(document).ready(function(){
  $(".button1").click(function(){
    $(".img1").toggle('show');
      // $("body").first().css("background", "linear-gradient(296deg,#f7cac9, #89abe3,#a2c5c5,#c5a2c5)");
  });

  $(".button2").click(function(){
      $(".img2").toggle('show');
  });

  $(".button3").click(function(){
      $(".img3").toggle('show');
  });

  $(".button4").click(function(){
      $(".img4").toggle('show');
  });

  $(".button5").click(function(){
      $(".img5").toggle('show');
  });

  $(".button6").click(function(){
      $(".img6").toggle('show');
  });

  $(".button7").click(function(){
      $(".img7").toggle('show');
  });

  $(".button8").click(function(){
      $(".img8").toggle('show');
  });

  $(".button9").click(function(){
      $(".img9").toggle('show');
  });

  $(".button10").click(function(){
      $(".img10").toggle('show');
  });






  $(".button11").click(function(){

    if ($('#h1').is(':checked')) {
          $('.harmony1').trigger("play");}
        else if ($('#h2').is(':checked')) {
              $('.harmony2').trigger("play");}
            else if ($('#h3').is(':checked')){
              $('.harmony3').trigger("play");}
              else if ($('#h4').is(':checked')){
                $('.harmony4').trigger("play");}
                else if ($('#h5').is(':checked')){
                  $('.harmony5').trigger("play");}


    if ($('#r1').is(':checked')) {
          $('.rhythm1').trigger("play");}
          else if  ($('#r2').is(':checked')) {
                $('.rhythm2').trigger("play")}
                else if ($('#r3').is(':checked')) {
                      $('.rhythm3').trigger("play");}
                      else if ($('#r4').is(':checked')) {
                            $('.rhythm4').trigger("play");}
                            else if ($('#r5').is(':checked')) {
                                  $('.rhythm5').trigger("play");}


    if ($('#m1').is(':checked')) {
          $('.melody1').trigger("play");}
          else if ($('#m2').is(':checked')) {
                $('.melody2').trigger("play");}
                else if ($('#m3').is(':checked')) {
                      $('.melody3').trigger("play");}
                      else if ($('#m4').is(':checked')) {
                            $('.melody4').trigger("play");}
                            else if ($('#m5').is(':checked')) {
                                  $('.melody5').trigger("play");}



  });






  $(".button12").click(function(){
      if($("audio").trigger('pause')){
        $('audio').currentTime=0;}
  });

  $(".button13").click(function(){
      $("form").toggle(400);
      $("audio").toggle(400);

  })


});
