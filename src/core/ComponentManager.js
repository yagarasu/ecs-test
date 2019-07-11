class ComponentManager {
  constructor () {
    this.clear()
  }

  clear () {
    this._nextId = 0
    this._entities = []
    this._components = []
  }

  createEntity (name, ...components) {
    const auto = this._nextId++
    const id = `${name}:${auto}`
    const index = this._entities.push({ id, components: [] }) - 1
    components.forEach(component => {
      const componentName = component.getName()
      const componentIndex = this._components
        .push({ id, componentName, component }) - 1
      this._entities[index].components.push(this._components[componentIndex])
    })
    return id
  }

  _includesAll (subjectList, items) {
    return items.reduce((acc, item) => {
      return acc && subjectList.includes(item)
    }, true)
  }

  getComponentsById (id) {
    return this._components
      .filter(({ id: componentId }) => componentId === id)
  }

  removeComponentsById (id) {
    this._components = this._components.filter(({ id: compId }) => compId !== id)
  }

  removeEntityById (id) {
    this.removeComponentsById(id)
    this._entities = this._entities.filter(({ id: eid }) => eid !== id)
  }

  getEntitiesByComponent (...componentNames) {
    const entities = this._entities
      .filter(({ components }) => {
        const componentList = components
          .map(({ componentName }) => componentName)
        return this._includesAll(componentList, componentNames)
      })
    return entities.map(({ id, components }) => ({
      id,
      components: components
        .reduce((acc, { componentName, component }) => ({
          ...acc,
          [componentName]: component
        }), {})
    }))
  }
}

export default ComponentManager
