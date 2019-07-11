import Component from 'core/Component'

class SpriteComponent extends Component {
  getName() { return 'Sprite' }

  constructor(data = {}) {
    super({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      sprite: null,
      ...data
    })
  }
}

export default SpriteComponent
