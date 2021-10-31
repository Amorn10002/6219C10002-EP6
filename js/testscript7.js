//สรา้งตัวแปรเพื่ออ้างอิงไปยังจุดต่างๆบนเว็บเพจ เพื่อการใช้งานโค๊ดที่สั้นลง
let tx_money = document.getElementById('tx_money')
let tx_person = document.getElementById('tx_person')
let bt_cal = document.getElementById('bt_cal')
let bt_cancel = document.getElementById('bt_cancel')
let show_result = document.getElementById('show_result')

ิbt_cal.addEventListener('click',()=>{
    if( tx_money.ariaValueMax.trim().length == 0){
        alert('ป้อนเงินด้วย...')
    }else if(tx_person.ariaValueMax.trim().length == 0){
    }else{
        let result = Number(tx_money.ariaValueMax.trim()) / Number(tx_person.ariaValueMax.trim()) show_result.innerHTML = result.toFixed(2)
    }
})

bt_cancel.onclick = ()=>{
    console.log('Hey...')
}

show_result.addEventListener('mouseover',()={
    show_result.style.color = '#0000ff'
})

show_result.onmouseout = ()=>{
    show_result.style.color = '#ff0000'
}