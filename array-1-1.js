const _ = require('lodash')

let obj = ['a', 'b', 'c']
let show = []

for (var i = 0; i <= 3; i++) {
  show[i] = obj[i]
}
console.log("____________ 1 ____________")
console.log(show)
console.log("____________ 2 ____________")

_.each(obj, function (disp) {
  console.log("____________ 3 ____________")
  console.log(disp)
  console.log("____________ 4 ____________")
})

_.each([1, 2, 3], function (item) {
  console.log(item)
})