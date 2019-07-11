class RandStrategy {
  constructor (entity) {
    this.entity = entity
    this.ticks = 0
    this.threshold = Math.round(Math.random() * 400)
    this.randomDirection()
  }

  randomDirection () {
    const { Motion } = this.entity.components
    Motion.set('vx', Math.round(Math.random() * 3) - 1)
    Motion.set('vy', Math.round(Math.random() * 3) - 1)
  }

  tick () {
    this.ticks++
    if (this.ticks >= this.threshold) {
      this.randomDirection()
      this.ticks = 0
    }
  }
}

const RandStrategyFactory = (entity) => {
  const { AI } = entity.components
  AI.set('strategyInstance', new RandStrategy(entity))
}

export default RandStrategyFactory
