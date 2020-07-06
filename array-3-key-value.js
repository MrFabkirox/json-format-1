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

for (var key in obj) {
  console.log("1 _______")
  console.log(obj[key])

  if (obj[key] == "pays") {
    console.log("2 _______")
    console.log(key)
    console.log("3 _______")
  }
}

// obj.forEach(function (voit) {
//   if (voit.vehicule.moto === "ducati") {
//     objshort.push(voit.vehicule.moto)
//   }
// })

// push ducati ok
// console.log(objshort)