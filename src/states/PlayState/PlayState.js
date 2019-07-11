import ComponentManager from 'core/ComponentManager'
import SpriteSystem from 'modules/sprite/SpriteSystem'
import MotionSystem from 'modules/motion/MotionSystem'
import WarpOnEdgeSystem from 'modules/motion/WarpOnEdgeSystem'
import BounceOnEdgeSystem from 'modules/motion/BounceOnEdgeSystem'
import AISystem from 'modules/ai/AISystem'
import InputSystem from 'modules/input/InputSystem'
import Hero from './Hero'
import Enemy from './Enemy'

class PlayState {
  constructor (game) {
    this.game = game
    this.cm = new ComponentManager()
    this.spriteSystem = new SpriteSystem(this.cm, this.game.canvas)
    this.motionSystem = new MotionSystem(this.cm)
    this.warpOnEdgeSystem = new WarpOnEdgeSystem(this.cm)
    this.bounceOnEdgeSystem = new BounceOnEdgeSystem(this.cm)
    this.aiSystem = new AISystem(this.cm)
    this.inputSystem = new InputSystem(this.cm)
    this.setup()
  }

  setup () {
    this.cm.createEntity(
      'player',
      ...Hero()
    )
    for (let i = 0; i < 2; i++) {
      const x = Math.round(Math.random() * 300)
      const y = Math.round(Math.random() * 190)
      this.cm.createEntity(
        'warpEnemy',
        ...Enemy({ x, y }, 'warp')
      )
    }
    for (let i = 0; i < 8; i++) {
      const x = Math.round(Math.random() * 300)
      const y = Math.round(Math.random() * 190)
      this.cm.createEntity(
        'bounceEnemy',
        ...Enemy({ x, y }, 'bounce')
      )
    }
  }

  tick () {
    this.inputSystem.tick()
    this.aiSystem.tick()
    this.motionSystem.tick()
    this.warpOnEdgeSystem.tick()
    this.bounceOnEdgeSystem.tick()
    this.spriteSystem.tick()
  }
}

export default PlayState
