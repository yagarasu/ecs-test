import RandStrategy from './RandStrategy'

const strategies = {
  rand: RandStrategy
}

class AISystem {
  constructor (componentManager) {
    this.cm = componentManager
  }

  init (entity) {
    const { AI } = entity.components
    const strategy = AI.get('strategy')
    if (!strategies[strategy]) return
    strategies[strategy](entity)
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('AI', 'Motion')
    entities.forEach(entity => {
      const { AI, Motion } = entity.components
      const strategy = AI.get('strategyInstance')
      if (strategy) {
        strategy.tick()
      } else {
        this.init(entity)
      }
    })
  }
}

export default AISystem
