class SpriteSystem {
  constructor (componentManager, canvas) {
    this.cm = componentManager
    this.canvas = canvas
    this.cx = canvas.getContext('2d')
  }

  draw (data, w, h) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = x + (y * w)
        const color = data[i]
        const r = (color & 0xff000000) >>> 24
        const g = (color & 0x00ff0000) >>> 16
        const b = (color & 0x0000ff00) >>> 8
        const a = color & 0x000000ff
        this.cx.fillStyle = `rgba(${r},${g},${b},${a})`
        this.cx.fillRect(x,y,1,1)
      }
    }
  }

  tick () {
    const entities = this.cm.getEntitiesByComponent('Sprite')
    entities.forEach(entity => {
      const { Sprite } = entity.components
      this.cx.save()
      this.cx.translate(Sprite.get('x'), Sprite.get('y'))
      this.draw(Sprite.get('sprite'), Sprite.get('w'), Sprite.get('h'))
      this.cx.restore()
    })
  }
}

export default SpriteSystem
