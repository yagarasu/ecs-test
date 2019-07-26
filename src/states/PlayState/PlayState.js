import Debug from 'utils/Debug'
import ComponentManager from 'core/ComponentManager'
import SpriteSystem from 'modules/sprite/SpriteSystem'
import MotionSystem from 'modules/motion/MotionSystem'
import WarpOnEdgeSystem from 'modules/motion/WarpOnEdgeSystem'
import BounceOnEdgeSystem from 'modules/motion/BounceOnEdgeSystem'
import AISystem from 'modules/ai/AISystem'
import InputSystem from 'modules/input/InputSystem'
import CollisionSystem from 'modules/collision/CollisionSystem'
import Hero from './Hero'
import Enemy from './Enemy'
import Map from 'modules/tiles/Map'
import MapRenderer from 'modules/tiles/MapRenderer'
import level from 'levels/level1.json'

class PlayState {
  constructor (game) {
    this.game = game
    this.debug = new Debug()
    this.fps = 0
    this.lastTime = 0
    this.map = new Map(level)
    this.mapRenderer = new MapRenderer(this.map, this.game.canvas)
    this.cm = new ComponentManager()
    this.spriteSystem = new SpriteSystem(this.cm, this.game.canvas)
    this.motionSystem = new MotionSystem(this.cm, this.map)
    this.warpOnEdgeSystem = new WarpOnEdgeSystem(this.cm)
    this.bounceOnEdgeSystem = new BounceOnEdgeSystem(this.cm)
    this.aiSystem = new AISystem(this.cm)
    this.inputSystem = new InputSystem(this.cm)
    this.collisionSystem = new CollisionSystem(this.cm)
    this.setup()
  }

  clear () {
    const cx = this.game.canvas.getContext('2d')
    cx.save()
    cx.fillStyle = '#000000'
    cx.fillRect(0, 0, this.game.canvas.clientWidth, this.game.canvas.clientHeight)
    cx.restore()
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

  tick (ts) {
    this.inputSystem.tick()
    this.aiSystem.tick()
    this.collisionSystem.tick()
    this.motionSystem.tick()
    this.warpOnEdgeSystem.tick()
    this.bounceOnEdgeSystem.tick()

    this.clear()
    this.mapRenderer.tick()
    this.spriteSystem.tick()

    const delta = (ts - this.lastTime) / 1000
    this.lastTime = ts
    this.fps = Math.round(1/delta)
    this.debug.set({ fps: this.fps })
  }
}

export default PlayState
