import PlayerOne from "./playerOneCan.js"
import PlayerTwo from "./playerTwoUfo.js"
import { ufoHealthScreen, cannonHealthScreen, ufoScoreScreen, cannonScoreScreen, scoreUdate } from "./updateScreen.js"
import {restartButton} from "./RestartHandeler.js"

const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

const playerTwo = new PlayerTwo (canvas.width / 2, canvas.height /40)
const playerOne = new PlayerOne (canvas.width / 2, canvas.height / 1.02)

const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    playerOne.drawMovCannon(ctx)
    playerTwo.drawUfo(ctx)
    playerTwo.bullets.forEach((bullet) => {
        bullet.drawUfoBullet(ctx)
    })
    playerOne.bullets.forEach((bullet) => {
        bullet.drawBullet(ctx)
    })
    ufoHealthScreen(playerTwo.health)
    ufoScoreScreen(playerTwo.score)
    cannonHealthScreen(playerOne.health)
    cannonScoreScreen(playerOne.score)
    playerTwo.doIfHitByBullet(playerOne)
    playerOne.doIfHitByBullet(playerTwo)
    restartButton(playerOne, playerTwo)
    scoreUdate(playerOne, playerTwo)
}

gameLoop()
