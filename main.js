const player = document.getElementById('player')

window.addEventListener('keydown', (e) => {
    const left = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    switch (e.key) {
        case 'ArrowLeft':
            console.log('left pressed')
            player.style.left = left - 5 + 'px'
            break;
        case 'ArrowRight':
            console.log('right pressed')
            player.style.left = left + 5 + 'px';
            ;
            break;
         case ' ':
    //         // console.log('space pressed')
            break;
    }
});