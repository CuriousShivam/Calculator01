function top0(x) {
    document.getElementById(x).style.transform = 'translate(0,0px)';
    if (x=='options'){
        document.getElementById('account').style.display='none'
        // document.getElementById('enterno').createAttribute('enable')
    }
}

function hide(x){
    document.getElementById(x).style.transform = 'translate(0,-1000px)';
    if(x=='options'){
        document.getElementById('account').style.display='inline-block'
    }
}   


//     function hide(className) {
//     document.getElementById(className).style.top = "-100%";
//     if(className=='options'){
//         console.log('true')
//         document.getElementsByClassName('account').style.visibility = 'visible'
//     }
// }



// Calculator Code

let expression = document.getElementById('enterno');
function eval1() {
    expression = document.getElementById('enterno');
    // console.log(dd, dd.charCodeAt(0)) char code of 1st 
    // console.log(typeof solution)
    const regex = /\b0+(\d)/g;
    let expression1 = expression.value.replace(/\b0+(\d)/g, '$1');
    let solve1 = eval(expression1)
    expression.value = (expression.value.toString() + ' = ' + solve1.toString())
    console.log('solve clicked')

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

// screen size check 



setInterval(function myFunction() {

    let options = document.getElementById('options');
    let calculator = document.getElementById('calculator')
    let login = document.getElementById('login')
    let signup = document.getElementById('signup')

    let list = [options,calculator,login,signup]

    if (window.screen.width < 300) {

        // console.log('true')
        // options.style.scale='.8'
        // calculator.style.scale='.8'
        // login.style.scale='.8'
        // signup.style.scale='.8'

        list.map(function(i){i.style.scale='.8'})
    }
    else if(window.screen.width < 1000){
        // options.style.scale='1'
        // calculator.style.scale='1'
        // login.style.scale='1'
        // signup.style.scale='1'
        list.map(function(i){i.style.scale='1'})
    }
    else {
        // options.style.scale='1.5'
        // calculator.style.scale='1.5'
        // login.style.scale='1.5'
        // signup.style.scale='1.5'
        list.map(function(i){i.style.scale='1.5'})
    }

    // if (document.getElementById('options').style.transform == 'translate(0px, -1000px)'){
    //     document.getElementById('account').style.display='inline-block'
    //     // document.getElementById('enterno').createAttribute('enable')
    // }else{document.getElementById('account').style.display='none'}
    
}, 10); 

// document.querySelectorAll("#thi").innerHTML = 'hello'
// document.querySelectorAll('#cbtn>div>div')[3].addEventListener("click",function(){console.log(true)})

// document.querySelectorAll('#cbtn div')[0].class='ccbtn'



// // Get the parent div element
// const parentDiv = document.getElementById('cbtn');

// // Add event listener to the parent div
// parentDiv.addEventListener('click', function(event) {
//     // Check if the clicked element is one of the children
//     const clickedElement = event.target;
    
//     // Get the index of the clicked child element
//     const index = Array.from(parentDiv.children).indexOf(clickedElement);

//     // Output the index of the clicked child
//     console.log("Clicked on child " + (index + 1));
// });
// let i=0;


// while(i<100000){
//     console.log(i)
//     i++
// }



// document.getElementById('cbtn').onclick = console.log('hello')


// let x = document.querySelectorAll('#cbtn div')
// x[0].class='ccbtn'
let a = 19;
let b = 0;
let cb = document.querySelectorAll('#cbtn div div')
while(b<=a){
cb[b].addEventListener('click',function(){expression.value = expression.value + this.innerHTML});
b++
}












// console.log(document.getElementById('enterno').value)
// - 45
// * 42
// / 47
// ( 40
// ) 41
// ^ 94


