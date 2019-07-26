class Map {
  constructor (level) {
    this.level = level
  }

  getTileAt (x, y) {
    const { map, tiles } = this.level
    const { size: { width, height } } = this.level
    if (x > width || y > height || x < 0 || y < 0) return tiles[0]
    const index = x + (y * width)
    return tiles[map[index]]
  }

  getPositionFromIndex (index) {
    const { size: { width } } = this.level
    const x = index % width
    const y = Math.floor(index / width)
    return [x, y]
  }

  walkAllTiles (fn) {
    const { map, tiles } = this.level
    for (let i = 0; i < map.length; i++) {
      const [x, y] = this.getPositionFromIndex(i)
      fn(tiles[map[i]], x, y, i)
    }
  }

  isSolid (x, y) {
    const tile = this.getTileAt(x, y)
    return tile && tile.solid
  }
}

export default Map
