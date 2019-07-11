import Component from 'core/Component'

class WarpOnEdgeComponent extends Component {
  getName() { return 'WarpOnEdge' }

  constructor(data = {}) {
    super({
      ...data
    })
  }
}

export default WarpOnEdgeComponent
