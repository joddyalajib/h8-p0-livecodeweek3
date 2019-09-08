/**
 * ============
 * Lucky Number
 * ============
 * 
 * [Instruction]
 * 1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
 * 
 * 2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
 *    Contoh:
 *    angka 1-15: 123456789012345
 *    angka 1-21: 123456789012345678901
 * 
 * 3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
 *    Contoh:
 *    angka 1-12: 12345*78901*345
 *    Penjelasan:
 *    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 2 DAN 3,
 *    maka angka tersebut diganti dengan asterisk.
 */

var size = 30 // 12345*78901*34567*90
// Write your code here
var str = ""

function displayNumber (size) {
    for (i = 1;i <= size; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            str = str + "*"
        }
        else if (i > 9) {
            str = str + i % 10
        }
        else {
            str = str + i
        }    
    }
    console.log(str)
}

displayNumber(size);