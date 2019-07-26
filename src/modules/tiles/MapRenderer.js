class MapRenderer {
  constructor (map, canvas) {
    this.map = map
    this.canvas = canvas
    this.cx = canvas.getContext('2d')
  }

  draw (type) {
    switch (type) {
      case 'empty':
        break;
      case 'block':
        this.cx.fillStyle = '#ffcc00'
        this.cx.fillRect(0, 0, 16, 16)
        break;
    }
  }

  tick () {
    this.cx.save()
    this.map.walkAllTiles((tile, x, y) => {
      this.cx.save()
      this.cx.translate(x * 16, y * 16)
      this.draw(tile.image)
      this.cx.restore()
    })
    this.cx.restore()
  }
}

export default MapRenderer
