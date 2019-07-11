import Component from 'core/Component'

class BounceOnEdgeComponent extends Component {
  getName() { return 'BounceOnEdge' }

  constructor(data = {}) {
    super({
      ...data
    })
  }
}

export default BounceOnEdgeComponent
