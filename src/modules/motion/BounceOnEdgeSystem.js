class BounceOnEdgeSystem {
  constructor (componentManager) {
    this.cm = componentManager
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Sprite', 'Motion', 'BounceOnEdge')
    entities.forEach(entity => {
      const { Sprite, Motion } = entity.components
      if (
        Sprite.get('x') === 0
        || Sprite.get('x') >= 320 - Sprite.get('w')
      ) {
        Motion.set('vx', Motion.get('vx') * -1)
      }
      if (
        Sprite.get('y') === 0
        || Sprite.get('y') >= 200 - Sprite.get('h')
      ) {
        Motion.set('vy', Motion.get('vy') * -1)
      }
    })
  }
}

export default BounceOnEdgeSystem
