import Component from 'core/Component'

class InputComponent extends Component {
  getName() { return 'Input' }

  constructor(data = {}) {
    super({
      ...data
    })
  }
}

export default InputComponent
