import PlayState from 'states/PlayState/PlayState'

class Game {
  constructor (canvas) {
    this._timer = null
    this._running = false
    this.canvas = canvas

    this._currentState = new PlayState(this)
  }

  setState (newState) {
    if (this._currentState && typeof this._currentState.stateWillUnmount === 'function')
      this._currentState.stateWillUnmount()

    this._currentState = newState

    if (this._currentState && typeof this._currentState.stateDidMount === 'function')
      this._currentState.stateDidMount()
  }

  run () {
    this._running = true
    this._timer = requestAnimationFrame(this.tick.bind(this))
  }

  stop () {
    cancelAnimationFrame(this._timer)
    this._timer = null
    this._running = false
  }

  tick (ts) {
    // Main loop
    if (this._currentState && typeof this._currentState.tick === 'function')
      this._currentState.tick(ts)
    this._timer = requestAnimationFrame(this.tick.bind(this))
  }
}

export default Game
