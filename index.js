document.addEventListener("DOMContentLoaded", (event) => {


    // const form = document.getElementById("state-year-form")
    // form.addEventListener("submit", event => {
        // event.preventDefault()

        fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
        .then(response => response.json())
        .then(response => {
           
    //    console.log(response.data[0]["ID State"])

            // States data
const stateSelect = document.getElementById("state-selector")
        response.data.forEach(state => {
        const stateOption = document.createElement("option");
        stateOption.text = state.State;
        stateOption.value = state.State
        stateSelect.appendChild(stateOption)

        
})

            // Year data
 const yearSelect = document.getElementById("year-selector")
        response.data.forEach(year => {
        const yearOption = document.createElement("option")
        yearOption.text = year.Year 
        yearOption.value = year.Year 
        yearSelect.appendChild(yearOption)
        
    })
   
})









// Now we will allow users to click on a state and year and print out the population data 


 const form = document.getElementById("state-year-form")
    form.addEventListener("submit", event => {
    event.preventDefault()
    // event.target[0].value
        
    fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest`)
    .then(response => response.json())
    .then(response => {
        
    // console.log(response.data[0].State)
    // response.data.map(data => {
   
        
    // Append Year
    const yearBox = document.getElementById("year-box")
    p = document.createElement("p") 
    p.innerText = response.data[0].Year
    p.className = "pColor"
    yearBox.appendChild(p)
  
     // Append state
    const stateBox = document.getElementById("state-box")
    p = document.createElement("p")
    p.textContent = response.data[0].State  
    p.className = "pColor"
    stateBox.appendChild(p)

    // Append population
    const populationBox = document.getElementById("population-box")   
    p = document.createElement("p")
    p.innerText = response.data[0].Population
    p.className = "pColor"
    populationBox.appendChild(p)

    
    





            // })
         })
     }, {once : true})
// Image click event
    let population = document.getElementById("population-box")

    population.addEventListener("click", function() {
    const img = document.createElement("img")
    img.src = "https://www.infoandopinion.com/wp-content/uploads/2021/07/USA-Map-Blank.png"
    document.body.appendChild(img)

    },{once : true});
 })


































