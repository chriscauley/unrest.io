import parseChoices from './parseChoices'

export default opts => {
  if (typeof opts === "function") {
    // is this ever used? opts.choices if what we actually want
    console.warn("opts is funciton, look at me")
    opts = opts()
  }
  return parseChoices(opts.choices).map((c, index) => ({
    value: c[0],
    label: c[1],
    id: opts.name + '__' + index,
  }))
}
