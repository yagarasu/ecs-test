import Component from 'core/Component'

class CollisionComponent extends Component {
  getName() { return 'Collision' }

  constructor(data = {}) {
    super({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      collidedWith: [],
      ...data
    })
  }
}

export default CollisionComponent
