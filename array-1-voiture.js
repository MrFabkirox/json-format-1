const _ = require('lodash')

let obj = {
  "pays": "france",
  "vehicule": {
    "voiture": "renault",
    "moto": "ducati"
  }
}

let objshort = {
  // "paysshort": "france"
}

for (var i = 0; i < 2; i++) {
  console.log(obj.vehicule)
}

// _.each(obj, function (disp) {
//   let vehiculer2 = disp.vehicule
//   objshort = objshort.set(vehicule2)
// })
// 
// console.log(objshort)