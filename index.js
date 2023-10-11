window.onload = function() {
    console.log('index.html Window has finished loading.');
    getAllEmployees()
};

function getAllEmployees(){
    fetch("http://localhost:3000/getAllEmployees")
    .then(function(response) {
        // console.log('response from server', response)
        if (response.ok) {
        return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then(function(data) {
        // Process the response data here

        let allEmployees = data;

        //set up options for employees dropdown
        let employeesSelect = document.getElementById("employeesDropDown");

        for (var i = 0; i < allEmployees.length; i++) {
            var option = new Option(`${allEmployees[i].name.first} ${allEmployees[i].name.last}` , allEmployees[i].login.uuid);
            employeesSelect.add(option);
        }

        //get total employees
        let totalEmployeesElement = document.getElementById('totalEmployees');
        totalEmployeesElement.innerText = `${allEmployees.length}`

        //get male to female ratio
        getMaleToFemaleRatio(allEmployees)

        //get percentage of employees that live in US
        getPercentageOfUSEmployees(allEmployees)

        //get random employee of the month
        let randomEmployeeIndex = Math.floor(Math.random() * (allEmployees.length));
        let employeeOfTheMonth = allEmployees[randomEmployeeIndex]
        getEmployeeOfTheMonth(employeeOfTheMonth);

        //set href for EOM
        setEOMHref(employeeOfTheMonth)
    })
    .catch(function(error) {
        // Handle any error that occurred
        console.error('error in getAllEmployees()', error)
    });
};


function getMaleToFemaleRatio(allEmployees){
    let numOfMaleEmployees = 0;
    let numOfFemaleEmployees = 0;
    allEmployees.map(e => {
        if(e.gender === 'male'){
            numOfMaleEmployees++
        }
        else if(e.gender === 'female'){
            numOfFemaleEmployees++
        }
    })

    let maleToFemaleEmployeeRatioElement = document.getElementById('maleToFemaleRatio');
    maleToFemaleEmployeeRatioElement.innerText = `${numOfMaleEmployees.toString()} / ${numOfFemaleEmployees.toString()}`;
}

function getPercentageOfUSEmployees(allEmployees){
    let totalNumOfEmployees = allEmployees.length;
    let numInUS = 0;
    allEmployees.map((a)=> {
        if(a.location.country === "United States"){
            numInUS++
        }
    })

    let decimal = numInUS/totalNumOfEmployees;
    let percentage = (decimal * 100).toFixed(2) + '%';

    let percentageElement = document.getElementById('percLiveInUS');
    percentageElement.innerText = percentage;
}

function getEmployeeOfTheMonth(employee){
    let eomName = `${employee.name.first} ${employee.name.last}`;
    let eomAge = `${employee.dob.age}`;
    let eomGender = `${employee.gender.charAt(0).toUpperCase() + employee.gender.slice(1)}`;
    let eomEmail = `${employee.email}`;
    let eomCity = `${employee.location.city}`;
    let eomCountry = `${employee.location.country}`;
    let eomPicture = `${employee.picture.large}`;

    let eomNameElement = document.getElementById('eomName')
    eomNameElement.innerText = eomName;
    let eomAgeElement = document.getElementById('eomAge')
    eomAgeElement.innerText = eomAge;
    let eomGenderElement = document.getElementById('eomGender')
    eomGenderElement.innerText = eomGender;
    let eomEmailElement = document.getElementById('eomEmail')
    eomEmailElement.innerText = eomEmail;
    let eomCityElement = document.getElementById('eomCity')
    eomCityElement.innerText = eomCity;
    let eomCountryElement = document.getElementById('eomCountry')
    eomCountryElement.innerText = eomCountry;
    let eomPictureElement = document.getElementById('eomPicture')
    eomPictureElement.src = eomPicture;
}

function setEOMHref(eom){
    document.getElementById("eomAnchor").href = `./pages/employee/employee.html?id=${eom.login.uuid}`;
}

function employeeDropdownRedirect(){
    const selectedValue = document.getElementById("employeesDropDown").value;
    console.log('selectedValue in setEmployeeHref()', selectedValue)
    const url = `./pages/employee/employee.html?id=${selectedValue}`
    // Navigate to the new URL
    window.location.href = url;
}

[1, 2 -7]

"1, 2, -7 "