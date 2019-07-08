$(window).scroll(function() {
       if ($(document).scrollTop() > 1600 && $("#myModal").attr("displayed") === "false") {
         $('#myModal').modal('show');
         $("#myModal").attr("displayed", "true");
       }
       console.log($(document).scrollTop());
       if ($(document).scrollTop() > 700 && $(".card-anim").attr("displayed") === "false") {
         $('.card-anim').addClass.add('card-anim');
         $(".card-anim").attr("displayed", "true");
       }
     });
     $(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });
});
