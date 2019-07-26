import SpriteComponent from 'modules/sprite/SpriteComponent'
import MotionComponent from 'modules/motion/MotionComponent'
import WarpOnEdgeComponent from 'modules/motion/WarpOnEdgeComponent'
import BounceOnEdgeComponent from 'modules/motion/BounceOnEdgeComponent'
import AIComponent from 'modules/ai/AIComponent'
import CollisionComponent from 'modules/collision/CollisionComponent'

const C = 0xffffffff
const _ = 0x00000000
const sprite = Uint32Array.from([
  _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,
  _,_,C,C,C,C,C,C,C,C,C,C,C,C,_,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,C,_,_,_,_,_,_,C,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,C,C,_,_,C,C,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,C,C,C,C,C,C,_,_,_,C,_,
  _,C,_,_,C,_,_,_,_,_,_,C,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,_,C,C,C,C,C,C,C,C,C,C,C,C,_,_,
  _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,
])


export default (opts, type) => {
  const components = [
    new SpriteComponent({
      w: 16, h: 16,
      x: 200, y: 50,
      sprite,
      ...opts
    }),
    new MotionComponent(),
    new AIComponent(),
    new CollisionComponent({ w: 16, h: 16 })
  ]
  if (type === 'warp') {
    components.push(new WarpOnEdgeComponent())
  }
  if (type === 'bounce') {
    components.push(new BounceOnEdgeComponent())
  }
  return components
}
