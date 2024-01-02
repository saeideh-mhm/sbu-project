let saeideh = document.getElementById("saeideh")

saeideh.addEventListener("blur" , shoo)

let spann = document.getElementById("spann")

function shoo(){

    if(saeideh.value.length == 0){
        spann.innerHTML = "please enter username"
        spann.style.color = "red"
    }else if(saeideh.value.length <= 6){
        spann.innerHTML = "please try again(enter >=7 character)"
        spann.style.color = "red"
    }else{
        spann.innerHTML = "correct"
        spann.style.color = "green"
    }
}
let saeideh1 = document.getElementById("saeideh1")

saeideh1.addEventListener("blur" , shooo)

let spann1 = document.getElementById("spann1")



function shooo(){

    if(saeideh1.value.length == 0){
        spann1.innerHTML = "please enter password"
        spann1.style.color = "red"
    }else if(saeideh1.value.length <= 12){
        spann1.innerHTML = "please try again(enter >=13character)"
        spann1.style.color = "red"
    }else{
        spann1.innerHTML = "correct"
        spann1.style.color = "green"
    }
}

let saeideh2 = document.getElementById("saeideh2")

saeideh2.addEventListener("click", shoooo)
let saeideh3 = document.getElementById("b")


function shoooo(){
    if(saeideh.value.length == 0 ||saeideh1.value.length == 0 ){
        saeideh3.innerHTML = "please enter password or username"
        saeideh3.style.color = "red"
        saeideh3.style.backgroundColor = "yellow"

        setTimeout(function(){saeideh3.style.display = "none"},1000)
    }else if (saeideh.value.length>=7 && saeideh1.value.length>=13){
        saeideh3.innerHTML = "correct"
        saeideh3.style.color = "green"
        saeideh3.style.backgroundColor = "aque"
        setTimeout(function(){saeideh3.style.display = "none"},1000)
    }else{
        saeideh3.innerHTML = "you dont enter please try again"
        saeideh3.style.color = "pink"
        setTimeout(function(){saeideh3.style.display = "none"},1000)
    }

}
