

const from = document.querySelector('#from')
const to = document.querySelector('#to')
const btnSubmit = document.querySelector('#btn-submit')
const zone = document.querySelector('#zone')
let id =-1;

function create(from, to){

    // let x = zone.clientWidth;
    // let y = x * from/100;
    // let z = x * to/100;
    // if(to <= 100){
    //     console.log('поместится в пределах первой строки!')
    //     zone.innerHTML = `<div style="margin-left: ${from}%; border: 1px solid red; width: ${(to-from)}%; height: 20px"></div>`
    // } else {
    //     zone.innerHTML = ``
    //     console.log('не поместится в пределах только первой строки!')

    //     let counter = Math.floor(from/100);
    //     let counter2 = Math.floor(to/100);

    //     let marginLeft = from;
    //     while(marginLeft >= 100){
    //         marginLeft = marginLeft - 100   
    //     }
    //     console.log('margin left',marginLeft)

    //     let stopLine = to;
    //     while(stopLine >= 100){
    //         stopLine = stopLine  - 100
    //     }
    //     console.log('stop line', stopLine)


    //     for (let i = 0; i < counter; i++){
    //         zone.innerHTML += `<div style="border: 1px solid blue; width: ${100}%; height: 20px"></div>`
    //     }

    //     if(from < 100){ 
    //         zone.innerHTML += `<div style="margin-left: ${from}%; border: 1px solid red; width: ${(100-from)}%; height: 20px"></div>`
    //         for(let j = 0; j != counter2; j++){
    //             if(counter2 - j == 1 ){
    //                 zone.innerHTML += `<div style="border: 1px solid red; width: ${(100 - stopLine)}%; height: 20px"></div>`
    //             } else {
    //                 zone.innerHTML += `<div style="border: 1px solid red; width: ${(100)}%; height: 20px"></div>`
    //             }
    //         }
    //     }      
    // }

    let rowsNumber = Math.ceil(to/100);
    zone.innerHTML = ``
    for(let i = 0; i < rowsNumber; i++){
        zone.innerHTML += `<div id = ${idUp()} class = 'row'; style="border: 1px solid blue; width: ${100}%; height: 20px; margin-left: ${0}%; margin-right: ${0}%"></div>`
    }
    let rowToStart = Math.floor(from/100);
    let rowToEnd = Math.floor(to/100);
    let marginLeft = from;
    let stopLine = to;
        while(stopLine >= 100){
            stopLine = stopLine  - 100
        }
    let flag = true 
    console.log('row to start ', rowToStart) 
    console.log('row to end ', rowToEnd)

    let rowArray = [...document.querySelectorAll('.row')]

    if(rowToStart == rowToEnd){
        rowArray.forEach(row =>{
            if(row.id < rowToStart){
                row.style.border = '0px solid red'
            }
        })
        while(marginLeft >= 100){
            marginLeft = marginLeft - 100   
        }
        console.log(marginLeft);
        rowArray[rowToEnd].style["margin-left"] = `${marginLeft}%`
        rowArray[rowToEnd].style.width = `${100-marginLeft-(100-stopLine)}%`
        rowArray[rowToEnd].style.border = '1px solid red'
        
    } else {
        rowArray.forEach(row =>{
            if(row.id < rowToStart){
                row.style.border = '0px solid red'
            }
            if(row.id > rowToStart && row.id < rowToEnd){
                row.style.border = '1px solid red'
            }
                
            if(marginLeft <= 100 && flag){
                row.style["margin-left"] = `${marginLeft}%`
                row.style.width = `${100-marginLeft}%`
                row.style.border = '1px solid red'
                flag = false
            }
            marginLeft = marginLeft - 100 
        })
        console.log(rowArray.length-1)

        rowArray[rowArray.length-1].style.border = '1px solid red'
        let marginRight = 100 - stopLine;
        rowArray[rowArray.length-1].style.width = `${stopLine}%`
        console.log(stopLine)



        // if(rowArray[rowArray.length-1].style.width === '0%'){
        //     // rowArray[rowArray.length-1].style.width = `${100}%`
        // }

    }
  
}

function idUp(){
    id++
    return id
}


btnSubmit.addEventListener('click', (event) =>{
    event.preventDefault();
    id = -1;
    console.clear();
    create(from.value, to.value)
})