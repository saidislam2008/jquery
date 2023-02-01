// hide() // удаляет с экрана (display: none)
// show() // показывает на экран (diplay: block)
// fadeIn() // показывает на экран (display: block)
// fadeOut() // удаляет с экрана (display: none)
// slideDown() // показывает горизонтально c низу вверх (display: block)
// slideUp() // удаляет горизонтально с вверху вниз (display: none)
// slideToggle() // (display == block => display = none) || (display == none => display = block)

// $('.block').hide(5000)
// $('.block').show(5000)
// $('.block').fadeIn(5000)
// $('.block').fadeOut (5000)
// $('.block').slideDown(2000)
// $('.block').slideUp(2000)
// $('.block').slideToggle(2000)
// $('.block').slideToggle(2000)

// task-1
// $('.box1').hide(1000)
// $('.box2').hide(2000)
// $('.box3').hide(3000)
// $('.box4').hide(4000)
// $('.box5').hide(5000)

// $('.box1').show(6000)
// $('.box2').show(7000)
// $('.box3').show(8000)
// $('.box4').show(9000)
// $('.box5').show(10000)

// task-2   
// $('.box1').fadeOut(1000)
// $('.box2').fadeOut(2000)
// $('.box3').fadeOut(3000)
// $('.box4').fadeOut(4000)
// $('.box5').fadeOut(5000)

// $('.box1').fadeIn(6000)
// $('.box2').fadeIn(7000)
// $('.box3').fadeIn(8000)
// $('.box4').fadeIn(9000)
// $('.box5').fadeIn(10000)

// task-3
// $('.box1').slideUp(1000)
// $('.box2').slideUp(2000)
// $('.box3').slideUp(3000)
// $('.box4').slideUp(4000)
// $('.box5').slideUp(5000)

// $('.box1').slideDown(6000)
// $('.box2').slideDown(7000)
// $('.box3').slideDown(8000)
// $('.box4').slideDown(9000)
// $('.box5').slideDown(10000)



$('#btn').click(()=>{
    $('.box1').hide(1000)
    $('.box2').hide(2000)
    $('.box3').hide(3000)
    $('.box4').hide(4000)
    $('.box5').hide(5000)

    $('.box1').show(6000)
    $('.box2').show(7000)
    $('.box3').show(8000)
    $('.box4').show(9000)
    $('.box5').show(10000)
})