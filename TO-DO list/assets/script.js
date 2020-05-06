$('ul').on('click','li', function(){
    $(this).toggleClass('completed')
})



$('ul').on('click', '.del', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})


$('#text_input').on('keyup', function(event){
    if(event.which === 13){
      let text = $(this).val()
      $(this).val('')
        // $('ul').append("<li> <button class = 'del'>" + "X" + "</button>" + new_text + "</li>")       
        $("ul").append("<li> <button class = 'del'>" + 'X' + '</button>' + text + "</li>")
     }
});

$('#add').on('click', function(){
    $('#text_input').toggleClass('display')
})