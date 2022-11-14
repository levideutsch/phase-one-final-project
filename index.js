// const link = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest';

// listener #1. When the page loads we load all the states into the dropdown
document.addEventListener("DOMContentLoaded", () => {
    // render the states in the dropdown
    fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
        .then(response => response.json())
        .then(response => {
            const states = response.data;

            // States data for dropdown
            // const stateSelect = document.getElementById("state-selector")

            //response.data
            // Here we say for each object od our API do this...
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

    // listener #2 and #3 need to be registered after the dom is rendered

    // listener #2. When the form is submitted make an API call and update the form
    document.getElementById("state-select-form").addEventListener("submit", event => {
        event.preventDefault();
        const dropdown = document.getElementById('state-selector');
        fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
            // format the response as json
            .then(response => response.json())
            // find and render the state we want
            .then(response => {
                // use .find to get the state by its id
                const state = response.data.find(state => state["ID State"] === dropdown.value);
                
                // update the 3 properties we want from the API
                document.querySelector("#year-box > p").textContent = state["ID Year"];
                document.querySelector("#state-box > p").textContent = state.State;
                document.querySelector("#population-box > p").textContent = state.Population;
            })
    });


    // listener #3, when the population box is clicked we want to show the picture
    document.getElementById("population-box").addEventListener("click", () => {
        const img = document.createElement("img")
        img.src = "https://www.infoandopinion.com/wp-content/uploads/2021/07/USA-Map-Blank.png"
        img.id = "usa-photo"
        document.body.appendChild(img)

        // Listener #4, add another picture when the mouse hovers over the picture
        img.addEventListener("mouseover", () => {
            const img2 = document.createElement("img")
            img2.src = "https://cdn-icons-png.flaticon.com/512/5277/5277377.png"
            document.body.appendChild(img2)
        })
    },{once : true});
});







  










    // const webLinks = document.querySelector("#state-box > p")
    // webLinks.addEventListener("click",  ()=> {
       
    // window.open(stateWebsites[state["State"]], "_blank")});
    //    console.log(stateWebsites)
    // const stateWebsites = {
    //     "Alabama": "https://www.alabama.gov/",
    //     "Alaska": "https://www.alaska.gov/",
    //     "Arizona": "https://az.gov/",
    //     "Arkansas": "https://portal.arkansas.gov/",
    //     "California": "https://www.ca.gov/",
    //     "Colorado": "https://co.colorado.gov/",
    //     "Connecticut": "https://portal.ct.gov/",
    //     "Delaware": "https://delaware.gov/",
    //     "District of Columbia": "https://dc.gov/",
    //     "Florida": "https://www.myflorida.com/",
    //     "Georgia": "https://georgia.gov/",
    //     "Hawaii": "https://portal.ehawaii.gov/",
    //     "Idaho": "https://www.idaho.gov/",
    //     "Illinois": "https://www.illinois.gov/",
    //     "Indiana": "https://www.in.gov/core/",
    //     "Iowa": "https://www.iowa.gov/",
    //     "Kansas": "https://portal.kansas.gov/",
    //     "Kentucky": "https://www.kentucky.gov/Pages/home.aspx",
    //     "Louisiana": "https://www.louisiana.gov/",
    //     "Maine": "https://www.maine.gov/portal/index.html",
    //     "Maryland": "https://www.maryland.gov/Pages/default.aspx",
    //     "Massachusetts": "https://www.mass.gov/",
    //     "Michigan": "https://www.michigan.gov/som",
    //     "Minnesota": "https://mn.gov/portal/",
    //     "Mississippi": "https://www.ms.gov/",
    //     "Missouri": "https://www.mo.gov/",
    //     "Montana": "https://mt.gov/",
    //     "Nebraska": "https://www.nebraska.gov/#gsc.tab=0",
    //     "Nevada": "https://nv.gov/",
    //     "New Hampshire": "https://www.nh.gov/index.htm",
    //     "New Jersey": "https://nj.gov/",
    //     "New Mexico": "https://www.nm.gov/",
    //     "New York": "https://www.ny.gov/",
    //     "North Carolina": "https://www.nc.gov/",
    //     "North Dakota": "https://www.nd.gov/",
    //     "Ohio": "https://ohio.gov/",
    //     "Oklahoma": "https://oklahoma.gov/",
    //     "Oregon": "https://www.oregon.gov/Pages/index.aspx",
    //     "Pennsylvania": "https://www.pa.gov/",
    //     "Rhode Island": "https://www.ri.gov/",
    //     "South Carolina": "https://sc.gov/",
    //     "South Dakota": "https://www.sd.gov/cs",
    //     "Tennessee": "https://www.tn.gov/",
    //     "Texas": "https://www.texas.gov/",
    //     "Utah": "https://www.utah.gov/index.html",
    //     "Vermont": "https://www.vermont.gov/#gsc.tab=0",
    //     "Virginia": "https://www.virginia.gov/",
    //     "Washington": "https://wa.gov/",
    //     "West Virginia": "https://www.wv.gov/Pages/default.aspx",
    //     "Wisconsin": "https://www.wisconsin.gov/Pages/Home.aspx", 
    //     "Wyoming": "https://www.wyo.gov/",
    //     "Puerto Rico": "https://pr.gov/Pages/default.aspx",
    // }
    