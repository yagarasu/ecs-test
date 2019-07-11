class MotionSystem {
  constructor (componentManager) {
    this.cm = componentManager
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Sprite', 'Motion')
    entities.forEach(entity => {
      const { Sprite, Motion } = entity.components
      Sprite.set('x', Sprite.get('x') + Motion.get('vx'))
      Sprite.set('y', Sprite.get('y') + Motion.get('vy'))
    })
  }
}

export default MotionSystem
