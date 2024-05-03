function top0(x) {
    document.getElementById(x).style.top = "0px";
}

function hide(className) {
    document.getElementById(className).style.top = "-1000px";
}


function eval1() {
    let expression = document.getElementById('enterno').value
    // console.log(dd, dd.charCodeAt(0)) char code of 1st 
    // console.log(typeof solution)
    let solve = eval(expression)
    document.getElementById('enterno').value = (expression.toString() + ' = ' + solve.toString())

}

// document.getElementById("enterno").addEventListener("keydown",(event) =>{
//     if(event.key==='Enter'){
//         console.log('enter is pressed')
//     }
// })

function enterPressed(){
    const textInput = document.getElementById('enterno')
    document.getElementById('enterno').addEventListener('keydown',(event) => {
        if(event.key === 'Enter'){
            eval1()
        }
    })
}



















// console.log(document.getElementById('enterno').value)
// - 45
// * 42
// / 47
// ( 40
// ) 41
// ^ 94


