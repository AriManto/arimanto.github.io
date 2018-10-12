$("ul").on('click', 'li', function(){
    $(this).toggleClass("checked");
});

$("ul").on('click', 'span', function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").on('keypress', function(e){
    if (e.which===13){
     $("ul").append("<li><span><i class='fas fa-times'></i></span> "+$(this).val()+"</li>");
     $(this).val("");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})