class Collider {
  testSingle (subject, target) {
    const { x: sx, y: sy, w: sw, h: sh } = subject
    const { x: tx, y: ty, w: tw, h: th } = target
    return (
      sx + sw >= tx
      && sx <= tx + tw
      && sy + sh >= ty
      && sy <= ty + th
    )
  }

  test (subject, possibleTargets) {
    return possibleTargets.reduce((acc, target) => {
      if (subject.id === target.id) return acc
      if (this.testSingle(subject, target)) {
        return [...acc, target]
      }
      return acc
    }, [])
  }
}

export default Collider
