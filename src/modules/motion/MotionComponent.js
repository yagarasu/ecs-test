import Component from 'core/Component'

class MotionComponent extends Component {
  getName() { return 'Motion' }

  constructor(data = {}) {
    super({
      vx: 0,
      vy: 0,
      ...data
    })
  }
}

export default MotionComponent
