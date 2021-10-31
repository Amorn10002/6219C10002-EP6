//Operature ตัวดำเนินการ
//+,-,*,/,%,**
console.log(8**3)
console.log(2**4)

console.log(15%9)
console.log(50%999)

//>,<,>=,<=,== ได้ผลลัพธ์เป็น True/False
console.log('5' == 5)//True
console.log('5' === 5)//False เปรียบเทียบทั้งข้อมูล และชนิดข้อมูล
console.log('5' != 5)//False 
console.log('5' !== 5)//True เปรียบเทียบทั้งข้อมูล และชนิดข้อมูล

//++,--
//+=,-=,*=,/=,%=
let x = 20
x = x + 10
console.log(x)//30
x += 100
console.log(x)//130

//Ternary Operator
// เงื่อนไข ? สิ่งที่ทำเมื่อเงื่อนไขเป็นจริง : สิ่งที่ทำเมื่อเงื่อนไขเป็นเท็จ
let z =25% 3 > 100 ? 9 + 10 : 9 * 10
console.log(z)//90
