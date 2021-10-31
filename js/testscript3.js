//Alert POP UP 
//alert('Hello...')
//alert('Hi...')

//ตัวแปร Variable
var a = 10
let b = 20
const c = 30//Const คือ ค่าตัวแปรแบบคงที่

{
    var d = 40
    let e = 50
    const f = 60

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)

    //ตัวแปรที่อยู่ในบรรทัดเดียวกันจะใช้ ";" เป็นตัวกัน
    //a = 111;b = 222;c = 333
    //d = 444;e = 555;f = 666

    a = 111
    b = 222
    //c = 333 Error เพราะเป็นค่าคงที่ห้ามเปลี่ยน
    d = 444
    e = 555
    //f = 666 Error เพราะเป็นค่าคงที่ห้ามเปลี่ยน
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
//console.log(e) ไมรู้จัก
//console.log(f) ไมรู้จัก