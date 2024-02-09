let dateInput = document.getElementById("date")

dateInput.max = new Date().toISOString().split("T")[0]

let resultBox = document.getElementById("result")

function calculateAge(){

    let birthDate = new Date(dateInput.value)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth()
    let y1 = birthDate.getFullYear()

    let todaysDate = new Date()
    let d2 = todaysDate.getDate()
    let m2 = todaysDate.getMonth()
    let y2 = todaysDate.getFullYear()

    let y3, m3, d3

    y3 = y2-y1
    
    if(m2>=m1){
        m3 = m2-m1
    }else {
        y3--
        m3 = 12 + m2-m1
    }

    if(d2>=d1){
        d3 = d2-d1
    }else{
        m3--
        d3 = getDaysInMonth(y1, m1) + d2-d1

    }
    if(m3<0){
        m3 = 11
        y3--
    }

    resultBox.innerHTML = `Your age is <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days old`

    



}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}
