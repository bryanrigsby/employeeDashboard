let employeeID;

window.onload = function() {
    console.log('employee.js Window has finished loading.');

    //get id from query params and pass to getEOMData() 
    const urlParams = new URLSearchParams(window.location.search);
    employeeID = urlParams.get('id');

    getEmployeeData(employeeID)

    //set up options for Country
    let countrySelect = document.getElementById("country");

    const countries = [
        { label: 'United States', value: 'united states' },
        { label: 'Canada', value: 'canada' },
        { label: 'United Kingdom', value: 'united kingdom' },
        { label: 'Australia', value: 'australia' },
        { label: 'Germany', value: 'germany' },
        { label: 'France', value: 'france' },
        { label: 'China', value: 'china' },
        { label: 'India', value: 'india' },
        { label: 'Japan', value: 'japan' },
        { label: 'Russia', value: 'russia' },
        { label: 'Brazil', value: 'brazil' },
        { label: 'Mexico', value: 'mexico' },
        { label: 'Italy', value: 'italy' },
        { label: 'Spain', value: 'spain' },
        { label: 'South Africa', value: 'south africa' },
        { label: 'Argentina', value: 'argentina' },
        { label: 'Netherlands', value: 'netherlands' },
        { label: 'Sweden', value: 'sweden' },
        { label: 'Switzerland', value: 'switzerland' },
        { label: 'Norway', value: 'norway' },
        { label: 'Saudi Arabia', value: 'saudi arabia' },
        { label: 'United Arab Emirates', value: 'united arab emirates' },
        { label: 'South Korea', value: 'south korea' },
        { label: 'Singapore', value: 'singapore' },
        { label: 'New Zealand', value: 'new zealand' },
        { label: 'Turkey', value: 'turkey' },
        { label: 'Egypt', value: 'egypt' },
        { label: 'Indonesia', value: 'indonesia' },
        { label: 'Pakistan', value: 'pakistan' },
        { label: 'Nigeria', value: 'nigeria' },
        { label: 'Chile', value: 'chile' },
        { label: 'Colombia', value: 'colombia' },
        { label: 'Poland', value: 'poland' },
        { label: 'Belgium', value: 'belgium' },
        { label: 'Denmark', value: 'denmark' },
        { label: 'Finland', value: 'finland' },
        { label: 'Greece', value: 'greece' },
        { label: 'Israel', value: 'israel' },
        { label: 'Portugal', value: 'portugal' },
        { label: 'Ireland', value: 'ireland' },
        { label: 'Austria', value: 'austria' },
        { label: 'Malaysia', value: 'malaysia' },
        { label: 'Thailand', value: 'thailand' },
        { label: 'Vietnam', value: 'vietnam' },
        { label: 'Philippines', value: 'philippines' },
        { label: 'Ukraine', value: 'ukraine' },
        { label: 'Czech Republic', value: 'czech republic' },
        { label: 'Romania', value: 'romania' },
        { label: 'Hungary', value: 'hungary' },
        { label: 'Peru', value: 'peru' },
        { label: 'Venezuela', value: 'venezuela' },
        { label: 'Bangladesh', value: 'bangladesh' },
        { label: 'Qatar', value: 'qatar' },
        { label: 'Kuwait', value: 'kuwait' },
        { label: 'Croatia', value: 'croatia' },
        { label: 'Slovakia', value: 'slovakia' },
        { label: 'Iceland', value: 'iceland' },
        { label: 'Luxembourg', value: 'luxembourg' }
      ];

    for (var i = 0; i < countries.length; i++) {
        var option = new Option(countries[i].label, countries[i].value);
        countrySelect.add(option);
    }

    let stateSelect = document.getElementById("state")

    const states = [
        { label: 'Alabama', value: 'alabama' },
        { label: 'Alaska', value: 'alaska' },
        { label: 'Arizona', value: 'arizona' },
        { label: 'Arkansas', value: 'arkansas' },
        { label: 'California', value: 'california' },
        { label: 'Colorado', value: 'colorado' },
        { label: 'Connecticut', value: 'connecticut' },
        { label: 'Delaware', value: 'delaware' },
        { label: 'Florida', value: 'florida' },
        { label: 'Georgia', value: 'georgia' },
        { label: 'Hawaii', value: 'hawaii' },
        { label: 'Idaho', value: 'idaho' },
        { label: 'Illinois', value: 'illinois' },
        { label: 'Indiana', value: 'indiana' },
        { label: 'Iowa', value: 'iowa' },
        { label: 'Kansas', value: 'kansas' },
        { label: 'Kentucky', value: 'kentucky' },
        { label: 'Louisiana', value: 'louisiana' },
        { label: 'Maine', value: 'maine' },
        { label: 'Maryland', value: 'maryland' },
        { label: 'Massachusetts', value: 'massachusetts' },
        { label: 'Michigan', value: 'michigan' },
        { label: 'Minnesota', value: 'minnesota' },
        { label: 'Mississippi', value: 'mississippi' },
        { label: 'Missouri', value: 'missouri' },
        { label: 'Montana', value: 'montana' },
        { label: 'Nebraska', value: 'nebraska' },
        { label: 'Nevada', value: 'nevada' },
        { label: 'New Hampshire', value: 'new hampshire' },
        { label: 'New Jersey', value: 'new jersey' },
        { label: 'New Mexico', value: 'new mexico' },
        { label: 'New York', value: 'new york' },
        { label: 'North Carolina', value: 'north carolina' },
        { label: 'North Dakota', value: 'north dakota' },
        { label: 'Ohio', value: 'ohio' },
        { label: 'Oklahoma', value: 'oklahoma' },
        { label: 'Oregon', value: 'oregon' },
        { label: 'Pennsylvania', value: 'pennsylvania' },
        { label: 'Rhode Island', value: 'rhode island' },
        { label: 'South Carolina', value: 'south carolina' },
        { label: 'South Dakota', value: 'south dakota' },
        { label: 'Tennessee', value: 'tennessee' },
        { label: 'Texas', value: 'texas' },
        { label: 'Utah', value: 'utah' },
        { label: 'Vermont', value: 'vermont' },
        { label: 'Virginia', value: 'virginia' },
        { label: 'Washington', value: 'washington' },
        { label: 'West Virginia', value: 'west virginia' },
        { label: 'Wisconsin', value: 'wisconsin' },
        { label: 'Wyoming', value: 'wyoming' },
        { label: 'Northern Territory', value: 'northern territory' },
        { label: 'Community of Madrid', value: 'community of madrid' },
        { label: 'Victoria', value: 'victoria' },
        { label: 'Ontario', value: 'ontario' },
        { label: 'England', value: 'england' },
        { label: 'New South Wales', value: 'new south wales' },
        { label: 'British Columbia', value: 'british columbia' },
        { label: 'Catalonia', value: 'catalonia' },
        { label: 'Île-de-France', value: 'île-de-france' },
        { label: 'Mexico City', value: 'mexico city' },
        { label: 'Victoria', value: 'victoria' }
      ];
      
    for (var i = 0; i < states.length; i++) {
    var option = new Option(states[i].label, states[i].value);
    stateSelect.add(option);
    }

    let genderSelect = document.getElementById("gender");

    const genders = [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'},
        {label: 'Other', value: 'other'},
    ];

    for (var i = 0; i < genders.length; i++) {
        var option = new Option(genders[i].label, genders[i].value);
        genderSelect.add(option);
    }
};

function getEmployeeData(uuid){
    console.log('uuid in getEOMData', uuid)

    //GET request
    fetch(`http://localhost:3000/getSpecificEmployeeGet?uuid=${uuid}`)
    .then(response => response.json())
    .then(data => {
        let employee = data;
        console.log('employee returned from GET fetch', employee)

        setEmployeeDataOnElements(employee)

    })
    .catch(error => console.log('Error:', error));
    /////////





    ////POST request
    // const payload = {
    //     uuid: id,
    // };

    // console.log('payload', payload)
      
    // fetch('http://localhost:3000/getSpecificEmployeePost', {
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(payload),
    // })
    // .then(response => response.json())
    // .then(data => console.log('POST returned data', data))
    // .catch(error => console.log('Error:', error));
    //////////


    
}

function setEmployeeDataOnElements(employee){
    //get elements 
    document.getElementById('employeeImage').src = `${employee.picture.large}`;
    document.getElementById('firstName').value = `${employee.name.first}`;
    document.getElementById('lastName').value = `${employee.name.last}`;
    document.getElementById('email').value = `${employee.email}`;
    document.getElementById('address').value = `${employee.location.street.number} ${employee.location.street.name}`;
    document.getElementById('city').value = `${employee.location.city}`;
    document.getElementById('state').value = `${employee.location.state.toLowerCase()}`;
    document.getElementById('zip').value = `${employee.location.postcode}`;
    document.getElementById('country').value = `${employee.location.country.toLowerCase()}`;
    document.getElementById('dob').value = `${formatDate(new Date(employee.dob.date))}`;
    document.getElementById('phone').value = `${employee.cell}`;
    document.getElementById('gender').value = `${employee.gender.toLowerCase()}`;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  function submitForm(){
    const form = document.getElementById('employeeEditForm');
    const formData = new FormData(form);
    formData.append('employeeID', employeeID);


    fetch('http://localhost:3000/updateEmployee', {
    method: 'POST',
    body: formData
    })
    .then(response => response.json())
    .then(data => console.log('POST returned data', data))
    .catch(error => console.log('Error:', error));


  }
  


