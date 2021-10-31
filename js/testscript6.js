//การตั้งชื่อใดๆ ในการ Dev. เช่น ชื่อตัวแปร ชื่อฟังก์ชั่น ชื่อออปเจ็กต์ ชื่อค่าคงที่...ต้องเป็นไปตามกฏการตั้งชื่อของภาษานั้นๆ
//Function *********
//การทำงานหนึงๆ
//ฟังก์ชั่นจะไม่ทำงานถ้าไม่มีการเรียกใช้ฟังก์ชั่น หรือ เรียกว่า Call function
//ฟังก์ชั่น จะเรียกให้ทำงานตอน ที่ไหน กี่ครั้ง ก็ได้

//console.log('Good Morning')
//ฟังก์ชั่นจะมีอยู่ 4 ลักษณะ
//1 ทำงานเสร็จในตัวเอง คือ ไม่ส่งคค่ากลับ และไม่มีพารามิเตอร์
function iotFunc1(){//ไม่อะไรในวงเล็บหลังชือฟังก์ชั่น
    console.log('Hello...')
}
//2 ทำงานเสร็จในตัวเอง คือ ไม่ส่งคค่ากลับ และมีพารามิเตอร์
function iotFunc2(a, num){//ไม่อะไรในวงเล็บหลังชือฟังก์ชั่น
    console.log('Hi...')
    console.log(a + num);
}
//3 ทำงานเสร็จในตัวเอง คือ ส่งค่ากลับ และไม่มีพารามิเตอร์
function iotFunc3(){//ไม่อะไรในวงเล็บหลังชือฟังก์ชั่น
    console.log('Hey...')
    return 999;
}
//4 ทำงานเสร็จในตัวเอง คือ ส่งค่ากลับ และมีพารามิเตอร์
function iotFunc4(b, z){//ไม่อะไรในวงเล็บหลังชือฟังก์ชั่น
    console.log('Hoo...')
    return 'สวัสดี';
}

iotFunc1()
iotFunc2(50, 100)
console.log( iotFunc3())
let sau = iotFunc4(555, 'Wow')
console.log(sau);

function iotFunc5(a, b = 20){
    console.log(a)
    console.log(b)
    console.log(a + b)
}

iotFunc5(1, 5)
iotFunc5(100)

//Javascript มีฟังก์ชั่นแบบไม่มีชื่อ
let mod = function(){
    console.log('Wow Wo Wow')
}
let med = () =>{
    console.log('Wee Wee Wee')
}

mod()
med()

function bangkok(a, b){
    console.log(a)
    b()
}

bangkok(20, ()=>{
    console.log('Value')
} )