const stateWebsites = {
    'Alabama': "https://google.com",
    // ...
}

document.addEventListener("DOMContentLoaded", () => {

fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
.then(response => response.json())
.then(response => {
    const states = response.data;

    //States data for dropdown
    const stateSelect = document.getElementById("state-selector")
    response.data.forEach(state => {
        const stateOption = document.createElement("option");
        stateOption.text = state.State;
        stateOption.value = state["ID State"];
        stateSelect.appendChild(stateOption);
    });

    const form = document.getElementById("state-select-form")

    form.addEventListener("submit", event => {
        event.preventDefault();

        const dropdown = document.getElementById('state-selector');

        for (const state of states) {
            if (state["ID State"] === dropdown.value) {
                document.querySelector("#year-box > p").textContent = state["ID Year"];
                document.querySelector("#state-box > p").textContent = state["State"];
                document.querySelector("#population-box > p").textContent = state["Population"];

                document.querySelector("#state-box > p").addEventListener("click", e => {
                    window.open(stateWebsites[state["State"]], "_blank");
                });
            }
        }

        // querySelector uses :checked psudoclass not :selected for the picked dropdown
        // this is super duper haram!!!!!!!!!! 😤😤😤😤😤😤
        // const state = dropdown.querySelector('option:checked').text;
    });
})

    // Image click event
    let population = document.getElementById("population-box")

    population.addEventListener("click", function() {
    const img = document.createElement("img")
    img.src = "https://www.infoandopinion.com/wp-content/uploads/2021/07/USA-Map-Blank.png"
    img.id = "usa-photo"
    document.body.appendChild(img)

        },{once : true});
        
    })


// function getSelectValue() {
//     // let selectedValue = document.getElementById("state-selector").value
//      // Append state
//     //  const stateBox = document.getElementById("state-box")
//      console.log(selectedValue)
  
// }
 

// let selectedValue = document.getElementById("state-selector-form")//.value
// let p = document.getElementById("blah")

// selectedValue.addEventListener("change", () => {
//     p.innerText = selectedValue.options(selection.selectedIndex).text
// })





















