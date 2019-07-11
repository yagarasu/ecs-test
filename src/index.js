import Game from 'core/Game'

const game = new Game(document.getElementById('main'))
game.run()
// setTimeout(() => {
//   game.stop()
// }, 10)

window.game = game
