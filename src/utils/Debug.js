class Debug {
  constructor () {
    const pre = document.createElement('pre')
    document.getElementsByTagName('body')[0].appendChild(pre)
    this.el = pre
  }

  set (data) {
    this.el.innerHTML = JSON.stringify(data, null, 2)
  }
}

export default Debug
