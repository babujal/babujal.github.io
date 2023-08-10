// import PlayerOne from "./playerOneCan.js"
// import PlayerTwo from "./PlayerTwoUfo.js"

export const restartButton = (playerOne, playerTwo) => {
    const button = document.querySelector('#restartButton')

    const clickHandeler = () => {
        if (playerOne.health === 0 || playerTwo.health === 0) {
            playerOne.x = 400
            playerOne.y = 587
            playerTwo.x = 400
            playerTwo.y = 15
            playerOne.health = 25
            playerTwo.health = 25
            playerOne.healthZero = true
            playerTwo.healthZero = true
            playerOne.shootTrigerPressed = false
            playerTwo.shootTrigerPressed = false
        }
    }
    button.addEventListener('click', clickHandeler)
}
