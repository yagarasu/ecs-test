import Component from 'core/Component'

class AIComponent extends Component {
  getName() { return 'AI' }

  constructor(data = {}) {
    super({
      strategy: 'rand',
      ...data
    })
  }
}

export default AIComponent
