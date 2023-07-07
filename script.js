let apikey="4e25a3d847471cb9b819ba2798230d6f"
let urll="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let inputt=document.querySelector(".input")
let btn=document.querySelector("button")
async function weather(city){
    let p1=await fetch(urll+city+`&appid=${apikey}`)
    let responce=await p1.json()
    console.log(responce)
    if(responce.status==400){
        alert("there is a error")
    }
    else{
        document.querySelector(".heading").innerHTML= responce.name
        document.querySelector(".wind").innerHTML=  responce.wind.speed
        document.querySelector(".tem").innerHTML=responce.main.temp +"C"
    }
}

btn.addEventListener('click',()=>{
    weather(inputt.value)
})
console.log("hell0")
