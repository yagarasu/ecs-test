import Collider from 'modules/collision/Collider'

class CollisionSystem {
  constructor (componentManager) {
    this.cm = componentManager
    this.collider = new Collider()
  }

  getCollisionData (entity) {
    const { Collision } = entity.components
    const subject = {
      id: entity.id,
      x: Collision.get('x'),
      y: Collision.get('y'),
      w: Collision.get('w'),
      h: Collision.get('h')
    }
    return subject
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Collision')
    entities.forEach(entity => {
      const { Collision } = entity.components
      const subject = this.getCollisionData(entity)
      const targets = entities.map(entity => this.getCollisionData(entity))
      const collisions = this.collider.test(subject, targets)
      Collision.set('collidedWith', collisions)
    })
  }
}

export default CollisionSystem
