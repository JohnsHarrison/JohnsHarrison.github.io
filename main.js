const player = document.getElementById('player')
const border = document.getElementById('border')

window.addEventListener('keydown', (e) => {
    const left = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
    switch (e.key) {
        case 'ArrowLeft':
            if(left > 0){
            // console.log('left pressed')
            player.style.left = left - 5 + 'px'
            }
            break;
        case 'ArrowRight':
            if(left < 680){
            // console.log('right pressed')
            player.style.left = left + 5 + 'px';
            }
            break;
         case ' ':
            const arrow = document.createElement('div')
            arrow.classList.add('arrow')
            border.appendChild(arrow)
       
        const moveArrows = setInterval(()=>{
           const enemies = document.getElementsByClassName('enemy')
           for (let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            if(enemy != undefined){
              const enemyHit = enemy.getBoundingClientRect();
              const arrowHit = arrow.getBoundingClientRect();
              console.log(`enemy box is`)
                console.log(enemyHit)
                console.log(`arrow box is`)
                console.log(arrowHit)
              if (
                arrowHit.left == enemyHit.left &&
                arrowHit.right == enemyHit.right &&
                arrowHit.top == enemyHit.top &&
                arrowHit.bottom == enemyHit.bottom
              ) {
                console.log(`enemy box is`)
                console.log(enemyHit)
                console.log(`arrow box is`)
                console.log(arrowHit)
                enemy.parentElement.removeChild(enemy);
                //Scoreboard
                document.getElementById("points").innerHTML =
                  parseInt(document.getElementById("points").innerHTML) + 1;
              }
            }
          }


           let arrowBot= parseInt(window.getComputedStyle(arrow).getPropertyValue('bottom'))
           arrow.style.bottom = arrowBot + 5 + 'px'
           arrow.style.left = left + 'px'
        //    console.log(arrowBot)

        if (arrowBot >= 650) {
            clearInterval(moveArrows);
            arrow.parentElement.removeChild(arrow)
          }
        })

            break;
    }
});

const generateEnemy = setInterval(()=>{
    const enemy = document.createElement('div')
    enemy.classList.add('enemy')
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
    enemy.style.left = Math.floor(Math.random() * 136) * 5 + 'px'

border.appendChild(enemy)
},5000) ;


const moveEnemies =setInterval(()=>{
    enemies = document.getElementsByClassName('enemy')
    if(enemies!= undefined){
      for (let i = 0;i<enemies.length;i++){
       let enemy = enemies[i];
       let enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue('top'))
       enemy.style.top = enemyTop + 5 + 'px'



       if(enemyTop >= 520){
        alert('You Lose!')
        clearInterval(moveEnemies)
       }
      }
    }
  },500) 