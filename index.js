const api = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

// listener #1. 
document.addEventListener("DOMContentLoaded", () => {
    // render the states in the dropdown
    fetch(api)
        .then(response => response.json())
        .then(response => {
            const states = response.data;

            states.forEach(state => {

                 const stateSelect = document.getElementById("state-selector")
                 // Create an "option" element 
                 const stateOption = document.createElement("option");
                 // The text for every option will be the "state" key in each object (example New York)
                 stateOption.text = state.State;
                 // The value for every option will be each objects ID.
                 stateOption.value = state["ID State"];
                 // Now we add stateOption and its text + value into stateSelect (our dropdown)
                //  stateOption.className = 
                 stateSelect.appendChild(stateOption);
            })
        });

    
    // listener #2. 
    document.getElementById("state-select-form").addEventListener("submit", event => {
        event.preventDefault();
        const dropdown = document.getElementById('state-selector');
        fetch(api)
            // format the response as json
            .then(response => response.json())
            // find and render the state we want
            .then(response => {
            
                
                const item = response.data.find(state => state["ID State"] === dropdown.value);
                
                // update the 3 properties we want from the API
                document.querySelector("#year-box > p").textContent = item["ID Year"];
                document.querySelector("#state-box > p").textContent = item.State;
                document.querySelector("#population-box > p").textContent = item.Population;
                // changeFontColor()
            })
    });


    // listener #3.
    document.getElementById("population-box").addEventListener("click", () => {
        const img = document.createElement("img")
        img.src = "https://www.infoandopinion.com/wp-content/uploads/2021/07/USA-Map-Blank.png"
        img.id = "usa-photo"
        document.body.appendChild(img)

        // Listener #4.
        img.addEventListener("mouseover", () => {
            const img2 = document.createElement("img")
            img2.src = "https://cdn-icons-png.flaticon.com/512/5277/5277377.png"
            document.body.appendChild(img2)
        })
    });
});

// function changeFontColor() {
//     let button = document.getElementById("input-state"); // access the button by id
//     let color = button.style.color;
//     if (color === "red") { // if button color is red change it green otherwise change it to red.
//        button.style.color = 'blue';
//     } else {
//        button.style.color = 'red';
//     }
//  }
//,{once : true}