class MotionSystem {
  constructor (componentManager) {
    this.cm = componentManager
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Sprite', 'Motion')
    entities.forEach(entity => {
      const { Collision, Sprite, Motion } = entity.components
      if (Collision) {
        const collisions = Collision.get('collidedWith', [])
        if (collisions.length > 0) {
          Motion.set('vx', Motion.get('vx') * -1)
          Motion.set('vy', Motion.get('vy') * -1)
        }
      }
      Sprite.set('x', Sprite.get('x') + Motion.get('vx'))
      Sprite.set('y', Sprite.get('y') + Motion.get('vy'))
      if (Collision) {
        Collision.set('x', Sprite.get('x'))
        Collision.set('y', Sprite.get('y'))
      }
    })
  }
}

export default MotionSystem
