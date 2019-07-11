class Component {
  constructor (defaultData = {}) {
    this._data = defaultData
  }

  set (key, value) {
    this._data[key] = value
  }

  get (key) {
    return this._data[key]
  }
}

export default Component
