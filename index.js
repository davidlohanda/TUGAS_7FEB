// function alphabetPosition(text) {
//     var a = '0abcdefghijklmnopqrstuvwxyz'.split('')
//     var b = text.toLowerCase().replace(/[^a-z]/g, '').split('')
//     var c = []
//     for(let i = 0 ; i < b.length ; i++){
//         c.push(a.indexOf(b[i]))
//     }
//     var d = c.join(' ')
//     return d
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// function findNextSquare(sq) {
//     var root = Math.sqrt(sq)
//     if(root % 1 == 0){
//       var nextSquare = Math.pow(root+1 , 2)
//       return nextSquare
//     } else{
//     return -1;
//     }
//   }

// function getMiddle(s)
// {
//   if(s.length % 2 == 0){
//       var a = (s.length / 2) - 1
//       var b = a + 1
//       return s[a] + s[b]
//   } else{
//       var a = ((s.length + 1) / 2) - 1
//       return s[a]
//   }
// }

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }

// console.log(getMiddle('testa'))



// let id = ['Ali','Bona','Ali'];
// let nama = new Set(id);
// console.log([nama]);
// console.log(nama);






var a = ['a', 'a' , 'b']
var b = [...new Set(a)]
console.log(b)
console.log(b.length)

arrManusia = [{nama : 'Andi' , pekerjaan : 'Guru'} , {nama : 'Doni' , pekerjaan : 'Dokter'}]
arrPekerjaan = []
for(let i = 0 ; i < arrManusia.length ; i++){
  arrPekerjaan.push(arrManusia[i].pekerjaan)
}
console.log(arrManusia)
console.log(arrPekerjaan)