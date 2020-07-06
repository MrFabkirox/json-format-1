const _ = require('lodash')

let obj = [{
  "pays": "france",
  "vehicule": {
    "voiture": "renault",
    "moto": "ducati"
  }
}]

let objshort = [{
  // "paysshort": "france"
}]

obj.forEach(function (voit) {
  if (voit.vehicule.moto === "ducati") {
    objshort.push(voit.vehicule.moto)
  }
})

// push ducati ok
console.log(objshort)