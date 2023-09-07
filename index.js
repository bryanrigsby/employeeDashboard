let allEmployees;
let maleToFemaleRatio;
let percLiveInUS;
let employeeOfTheMonth;

window.onload = function() {
    // Your code here
    console.log('Window has finished loading.');
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

            //get total employees
            let totalEmployeesElement = document.getElementById('totalEmployees');
            totalEmployeesElement.innerText = `${data.length}`

            //get male to female ratio
            getMaleToFemaleRatio(data)

            //get percentage of employees that live in US
            getPercentageOfUSEmployees(data)

            //get random employee of the month
            let randomEmployeeIndex = Math.floor(Math.random() * (data.length));
            getEmployeeOfTheMonth(data[randomEmployeeIndex]);
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

    console.log('US percentage', percentage)
    let percentageElement = document.getElementById('percLiveInUS');
    percentageElement.innerText = percentage;
}

function getEmployeeOfTheMonth(employee){
    console.log('employee in getEmployeeOfTheMonth', employee)
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



