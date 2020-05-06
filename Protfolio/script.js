$('.burger').on('click', function(){
    $('.nav-links').toggleClass('active')
})


$(".smooth_scroll").on('click', function(event){
    event.preventDefault();
    
    var linkHrefs = $(this).attr('href')
    
    $('html, body').animate({
        scrollTop: $(linkHrefs).offset().top
    },1000)
})


$('#me').on('click', function(){
    $('html, body').css({
        
    })
})