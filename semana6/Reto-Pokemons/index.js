const InputName = document.querySelector("#InputName")
const form = document.querySelector("form")

const namePokemon = document.querySelector(".namePokemon")

form.onsubmit = function (event) {
  event.preventDefault();//esto va evitar que se actualice al presionar el boton

  async function getPokemon() {
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${InputName.value.toLowerCase()}/`)
     const data = await response.json()
     const resultados = data.sprites.other.dream_world.front_default
     console.log(resultados)
     namePokemon.innerHTML = `
       <img width = 200px src="${resultados}"/>
       <h1> ${InputName.value.toLowerCase()}</h1>    
      ` 
  }

  getPokemon()

}
