class WarpOnEdgeSystem {
  constructor (componentManager) {
    this.cm = componentManager
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Sprite', 'WarpOnEdge')
    entities.forEach(entity => {
      const { Sprite } = entity.components
      if (Sprite.get('x') <= Sprite.get('w') * -1) {
        Sprite.set('x', 320)
      }
      if (Sprite.get('x') >= 320 + Sprite.get('w')) {
        Sprite.set('x', 0)
      }
      if (Sprite.get('y') <= Sprite.get('h') * -1) {
        Sprite.set('y', 200)
      }
      if (Sprite.get('y') >= 200 + Sprite.get('h')) {
        Sprite.set('y', 0)
      }
    })
  }
}

export default WarpOnEdgeSystem
