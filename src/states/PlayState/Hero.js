import SpriteComponent from 'modules/sprite/SpriteComponent'
import MotionComponent from 'modules/motion/MotionComponent'
import WarpOnEdgeComponent from 'modules/motion/WarpOnEdgeComponent'
import InputComponent from 'modules/input/InputComponent'

const C = 0xdae392ff
const _ = 0x00000000
const sprite = Uint32Array.from([
  _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,
  _,_,C,C,C,C,C,C,C,C,C,C,C,C,_,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,C,_,_,_,_,C,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,C,C,C,C,C,C,C,C,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,C,_,_,_,_,_,_,_,_,_,_,_,_,C,_,
  _,_,C,C,C,C,C,C,C,C,C,C,C,C,_,_,
  _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,
])


export default (opts) => [
  new SpriteComponent({
    w: 16, h: 16,
    sprite,
    ...opts
  }),
  new MotionComponent(),
  new WarpOnEdgeComponent(),
  new InputComponent()
]
