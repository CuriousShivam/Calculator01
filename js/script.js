function top0(x) {
    document.getElementById(x).style.top = "50%";
}




function eval1() {
    let expression = document.getElementById('enterno').value
    // console.log(dd, dd.charCodeAt(0)) char code of 1st 
    // console.log(typeof solution)
    let solve1 = eval(expression)
    document.getElementById('enterno').value = (expression.toString() + ' = ' + solve1.toString())

}

// document.getElementById("enterno").addEventListener("keydown",(event) =>{
//     if(event.key==='Enter'){
//         console.log('enter is pressed')
//     }
// })

function enterPressed() {
    document.getElementById('enterno').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            eval1()
        }
    })
}


setInterval(function myFunction() {
    if (window.screen.width < 300) {
        // console.log('true')
        document.getElementById('options').style.scale='.8'
        document.getElementById('calculator').style.scale='.8'
    }
    else if(window.screen.width < 1000){
        document.getElementById('options').style.scale='1'
        document.getElementById('calculator').style.scale='1'

    }
    else {
        // console.log(false)
        document.getElementById('options').style.scale='1.5'
        document.getElementById('calculator').style.scale='1.5'
    }
}, 10); 


// document.getElementById('cbtn').onclick = console.log('hello')

function doWork(){
console.log(    document.getElementById('cbtn').children.children.innerHTML)
}
















// console.log(document.getElementById('enterno').value)
// - 45
// * 42
// / 47
// ( 40
// ) 41
// ^ 94


