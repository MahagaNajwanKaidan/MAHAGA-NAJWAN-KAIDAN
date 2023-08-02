//algoritme = kerangka berpikir sistematis secara logis untuk menyelesaikan

//variabel= tempat menaruh/menyimpan nilai
// let angka = parseInt(prompt("masukan nilai"));
// if(angka < 0){
//     console.log("negatif")
// }else if(angka > 0){
//     console.log("positif")
// }else if(angka = 0){
//     console.log("netral")
// }else{
//     console.log("netral")
// }


    // let x = prompt("masukan nilai x");
    // let y = prompt("masukan sumbu y");

    // if (x > 0 && y > 0){
    //     document.write("kanan atas")
    // }else if (x < 0 && y < 0){
    //     document.write("kiri atas")
    // }else if (x > 0 && y < 0){
    //     document.write("kanan bawah")
    // }else if (x < 0 && y > 0){
    //     document.write("kiri bawah")
    // }else if ( x === 0 && y === 0){
    //     document.write("tengah")
    // }else if ( x == 0 && y == 0){
    //     document.write("atas")
    // }else if ( x == 0 && y == 0){
    //     document.write("bawah")
    // }else if ( x == 0 && y == 0){
    //     document.write("kanan")
    // }else if ( x == 0 && y == 0){
    //     document.write("kiri")
    // }

//LOOPING => perulangan

//1.Counted Loop => for, forEACH, Map
//2.Uncounted Loop => while, Do while 

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// const Tired = () => {

// }

// const Run = () => {

// }

// while!
// Latihan 1
// for(let i=0; i<20; i++){
//     console.log("iAM Zahardd");
// }
// // latihan 2
// for(let i = 0; i < 20 ; i++){
//     console.log(i + 1);
// }
// // Latihan 3
// for (let i =5; i <= 100 ; i += 5) {
//     console.log(i)
// }
// // Latihan 4
// for (let i = 0; i <= 10; i+=2){
//     console.log(i = 1)
// }
// // Laqtihan 5
// for (let i = 2; i <= 10; i+=2){
//     console.log(i)
// }
// // Latihan 6
// let a = prompt ("Maukan Nilai Pertama")
// let b = prompt ("Masukan Nilai Kedua")

// for (let i =a; i<=b; i++){
//     console.log(i);
// }

// // SWITCH CASE
// let condition = undefined;
// switch (condition){
//     case 'off':
//         console.log('Lamp off');
//         break;
//     case 'on':
//         console.log('Lamp on')
//         break;
//          default:
// }


// let angka1 = prompt ("Masukan Nilai Pertama")
// let dadu = [2,4,6,8,10,12];
// let angka = Math.floor(Math.random() * 6 + 1);

// const Jumlah = (angka) => {
//     let input = parseInt(prompt("Masukkan Angka"));
// for(let i =0; i<=input; i++){
//     let angka = Math.floor(Math.random() * 6 + 1);
// switch (angka) {
//     case 1:
//         console.log('dapat 2')
//         break;
//     case 2:
//         console.log('dapat 4')
//         break;
//     case 3:
//         console.log('dapat 6')
//         break;
//     case 4:
//         console.log('dapat 8')
//         break;
//     case 5:
//         console.log('dapat 10')
//         break;
//     case 6:
//         console.log('dapat 12')
//         break;
          
// }
// }
// }
// Jumlah()
//ARRAY
// let arr=['orek','Telor balado','Opor','Nasi']

//No.1
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

//No.2
// console.log(arr[0]);

//No 3
// arr.forEach((food) =>{
//     console.log(food)
// })

// arr.map((data) =>{
//     console.log(data)
// });

//Method
//.Push

// arr.push('indomie telor');
// console.log(arr)

// // //2.pop
// arr.pop()
// console.log(arr)

// // //3.SHIFT
// arr.shift();
// console.log(arr)

// //4. SPLICE
// arr.splice(1,2);
// console.log(arr)

//ARROW FUNCTION

// var participantsAge = [20, 17, 15, 30,15, 27, 371]
    
//     var totalTeens = 0
    
//     var totalAdults = 0
    
// for (i = 0; i < participantsAge.length; i++) {
//          if (participantsAge[i] < 20) {
//             totalTeens++
//          } else {
//         totalAdults++

// }
    
// }
    
// console.log('Total adults: ' + totalAdults)
    
// console.log('Totalteens: '+totalTeens)

const waktuBermainHarian = [2, 2, 3, 3, 1, 4, 5];

const batasWaktu = 2;

let totalWaktuBermain = 0;
let jumlahKaliMelebihiBatas = 0;

for (let i = 0; i < waktuBermainHarian.length; i++) {
  totalWaktuBermain += waktuBermainHarian[i];
  if (waktuBermainHarian[i] > batasWaktu) {
    jumlahKaliMelebihiBatas++;
  }
}

console.log("Total waktu bermain game dalam seminggu:", totalWaktuBermain,"jam");
console.log("Jumlah kali melebihi batas waktu bermain:",jumlahKaliMelebihiBatas,"kali");









