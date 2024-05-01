let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let imageDiv = document.querySelectorAll('.img');

main.addEventListener('mousemove', function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: 'back.out'
    })
})

imageDiv.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        cursor.innerHTML = 'Details';
        gsap.to(cursor, {
            scale: 5
        })
    })
})

imageDiv.forEach(function(element) {
    element.addEventListener('mouseleave', function() {
        cursor.innerHTML = '';
        gsap.to(cursor, {
            scale: 1
        })
    })
})