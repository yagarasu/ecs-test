const KEYS = {
  KEY_UP: 'ArrowUp',
  KEY_DOWN: 'ArrowDown',
  KEY_LEFT: 'ArrowLeft',
  KEY_RIGHT: 'ArrowRight'
}

class InputSystem {
  constructor (componentManager) {
    this.cm = componentManager
    this._keys = {}
    this.init()
  }

  init () {
    window.addEventListener('keydown', (e) => {
      const key = e.key
      this._keys = { [key]: true }
    })
    window.addEventListener('keyup', e => {
      const key = e.key
      delete this._keys[key]
    })
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Input', 'Motion')
    entities.forEach(entity => {
      const { Motion } = entity.components
      if (this._keys[KEYS.KEY_UP]) {
        entity.components.Motion.set('vy', -2)
      } else if (this._keys[KEYS.KEY_DOWN]) {
        entity.components.Motion.set('vy', 2)
      } else {
        entity.components.Motion.set('vy', 0)
      }
      if (this._keys[KEYS.KEY_LEFT]) {
        entity.components.Motion.set('vx', - 2)
      } else if (this._keys[KEYS.KEY_RIGHT]) {
        entity.components.Motion.set('vx', 2)
      } else {
        entity.components.Motion.set('vx', 0)
      }
    })
  }
}

export default InputSystem
