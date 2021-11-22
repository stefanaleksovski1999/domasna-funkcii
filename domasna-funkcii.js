function fahrenheitToCelsius(fahren) {
  let result = (fahren - 32) * 5 / 9 
  return result
}
let res = fahrenheitToCelsius(100)
console.log(res)


function celsiusToFahrenheit(celsius) {
    let result = (celsius * 1.8) + 32 
    return result
  }
  let res2 = celsiusToFahrenheit(37.777777778)
  console.log(res2)



 
 
 
 
 
  function palindrom(zbor) {
      let reverse = zbor.split('').reverse().join('')
      if (zbor === reverse) {
          console.log('Zborot e palindrom')
      }else {
          console.log ('Zborot ne e palindrom')
      }
  }
 
  let reverse = palindrom('civic')

 
  

  //imav problemi so tretata domasna.. 
  // pa malku poveke koristev google od sto treba 

  function findLongestWord(recenica) {
      let recenicaSplit = recenica.split(' ')
      let longestWord = 0
      for(let i = 0; i < recenicaSplit.length; i++) {
          if(recenicaSplit[i].length > longestWord) {
              longestWord = recenicaSplit[i].length
          }
      }
      return longestWord 
    }

    let result = findLongestWord('Hello everybody and welcome to my home')
    console.log('najdolgiot zbor e: '+result)


