function playGame(){
const player = document.getElementById('player')
const border = document.getElementById('border')
let score = 0
let speed = 300
let level = 1

//set player controls
window.addEventListener('keydown', (e) => {
  
    const left = parseInt(window.getComputedStyle(player).getPropertyValue('left')) // save the players "left" value so it can be used to move
    switch (e.key) {
        case 'ArrowLeft':
          //keep player from going off the left of the screen
            if(left > 0){
            // console.log('left pressed')
            player.style.left = left - 5 + 'px'
            }
            break;
        case 'ArrowRight':
          //keep player from going off the right of the screen
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

            //get enemy amd arrow position
              const enemyHit = enemy.getBoundingClientRect();
              const arrowHit = arrow.getBoundingClientRect();

              //if enemy position is the same as arrow enemy is head
              if (
                arrowHit.left == enemyHit.left &&
                arrowHit.right == enemyHit.right &&
                arrowHit.top == enemyHit.top &&
                arrowHit.bottom == enemyHit.bottom
              ) {

                enemy.parentElement.removeChild(enemy);



                //score
                document.getElementById('scoreboard').innerHTML =
                  parseInt(document.getElementById('scoreboard').innerHTML) + 1;
                  //everytime an enemy is hit increase the score by 1
                  score += 1
                //every every 10 points increase the level 
                if ((score % 10) == 0){
                    level += 1
                    alert(`YOU REACHED LEVEL ${level}`)  
                    speed -= 100
                    console.log(speed)
                    console.log(level)
                }
                
                if(level == 10){
                    alert('YOU WIN!')
                
                    clearInterval(moveEnemies)//stop current enemy movement
                    clearInterval(generateEnemy)//stop enemy spawn
                    let button = document.createElement('button')
                    button.textContent = ("PLAY AGAIN?")
                    border.appendChild(button)
                     button.addEventListener('click', ()=>{
                    window.location.reload()
                    replay()
                     })
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

//generate enemy
const generateEnemy = setInterval(()=>{
    const enemy = document.createElement('div')
    enemy.classList.add('enemy')
    //spawn randomly in multiples of 5only so they can be hit
    enemy.style.left = Math.floor(Math.random() * 136) * 5 + 'px'

border.appendChild(enemy)
},5000) ;

//move enemies
const moveEnemies =setInterval(()=>{
    enemies = document.getElementsByClassName('enemy')
    if(enemies!= undefined){
      for (let i = 0;i<enemies.length;i++){
       let enemy = enemies[i];
       let enemyTop = parseInt(window.getComputedStyle(enemy).getPropertyValue('top'))
       enemy.style.top = enemyTop + 5 + 'px'


//if enemy reaches the bottom of the screen the game is over
       if(enemyTop >= 520){
        alert('You Lose!')
        clearInterval(moveEnemies)//stop enemy movement
        clearInterval(generateEnemy)//stop enemy spawn
        let button = document.createElement('button')
        button.textContent = ("PLAY AGAIN?")
        border.appendChild(button)
        button.addEventListener('click', ()=>{
            window.location.reload()
            replay()
        })
       }
      }
    }
  },speed) 

}

function replay(){
playGame()
}

playGame()