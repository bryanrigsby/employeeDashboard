var modal = document.getElementById('addEmployeeModal');
var openModalButton = document.getElementById('modalButton');
var closedModalButton = document.getElementById('closeModalButton');

openModalButton.onclick = function(){
 modal.style.display = 'block';
}

closedModalButton.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if(event.target==modal){
     modal.style.display= 'none';
  }
}

window.onload = function () {
    console.log('Window has finished loading.');
    getAllEmployees()
    getCompanyInfo()
};


function getAllEmployees() {
    fetch("http://localhost:3000/getAllEmployees")
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function(data){
        let employeesArray = data.employees;
        console.log('employeesArray', employeesArray)

        //set up options for employees dropdown
        let employeesSelect = document.getElementById("employeesDropDown");
        for (var i = 0; i < employeesArray.length; i++) {
            var option = new Option(`${employeesArray[i].firstName} ${employeesArray[i].lastName}` , employeesArray[i].UUID);
            employeesSelect.add(option);
        }

        // get random number for employee of the month
       let randomEmployeeIndex = Math.floor(Math.random() * (employeesArray.length));
       let randomeEmployee = employeesArray[randomEmployeeIndex];
        getEmployeeofTheMonth(randomeEmployee);
        setEOMHref(randomeEmployee)
        totalEmployees(employeesArray);
        maleToFemaleRatio(employeesArray);
        percLiveInUS(employeesArray);

      })
      .catch(function(error){
        console.log(error);
      })
};

function getCompanyInfo() {
    fetch("http://localhost:3000/getCompanyInfo")
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(function(data){
        console.log('data from getCompanyInfo', data)
        let companyInfoArray = data.companyInfo;
        const name = companyInfoArray[0].name;
        let companyNameElement = document.querySelector('#companyname')
        companyNameElement.innerText = name;
        let businessCategory = document.getElementById("businessCategory")
        businessCategory.innerText = companyInfoArray[0].category;
        let businessAdress = document.getElementById("businessAdress")
        businessAdress.innerText = `${companyInfoArray[0].address} ${companyInfoArray[0].city} ${companyInfoArray[0].state}, ${companyInfoArray[0].country}`;
        })
      .catch(function(error){
        console.log(error);
      })
};

function getAge(dob){
  let dateOfBirth = new Date(dob);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

  // Check if the birthday has occurred this year
  if (
    currentDate.getMonth() < dateOfBirth.getMonth() ||
    (currentDate.getMonth() === dateOfBirth.getMonth() &&
      currentDate.getDate() < dateOfBirth.getDate())
  ) {
    // Subtract 1 from age if the birthday hasn't occurred yet this year
    return age - 1;
  }
  return age;
 }

function getEmployeeofTheMonth(randomEmployee) {
  let employeeName = document.getElementById('employeeName');
  employeeName.innerText = `${randomEmployee.firstName} ${randomEmployee.lastName}`;
  let employeeAge = document.getElementById('employeeAge')
  let age = getAge(randomEmployee.dob)
  employeeAge.innerText = `${age}`;
  let employeeGender = document.getElementById('employeeGender')
  employeeGender.innerText = `${randomEmployee.gender}`;
  let employeeEmail = document.getElementById('employeeEmail')
  employeeEmail.innerText = `${randomEmployee.email}`;
  let employeeCity = document.getElementById('employeeCity')
  employeeCity.innerText = `${randomEmployee.city}`;
  let employeeCountry = document.getElementById('employeeCountry')
  employeeCountry.innerText = `${randomEmployee.country}`;
  let eomPictures = document.getElementById("eomPicture");
  eomPictures.src = `${randomEmployee.picture}`;
}

function totalEmployees(allEmployees) {
  const totalNumberOFEmployees = allEmployees.length;
  let totalEmployees=document.getElementById('totalEmployees');
  totalEmployees.innerText = `${allEmployees.length}`;
}

function maleToFemaleRatio(allEmployees) {
  let femaleCount = 0;
  let maleCount = 0;
  for (let i = 0; i < allEmployees.length; i++) {
    const element = allEmployees[i];
    if (element.Gender === 'Male') {
      maleCount = maleCount + 1;
    }else{
      femaleCount = femaleCount + 1;
    }
  }
  let ratio = document.getElementById('maleToFemaleRatio');
  ratio.innerText = maleCount + " /" + femaleCount;
}
function percLiveInUS(allEmployees) {
  let usResident = 0;
  for (let i = 0; i < allEmployees.length; i++) {
    const element = allEmployees[i];
    if(element.Country === 'USA'){
      usResident = usResident +1;
    }
  } 
  let percentage = ((usResident/allEmployees.length) * 100).toFixed(0); 
  document.getElementById('percLiveInUS').innerText = percentage + '%';
}

const form = document.getElementById('addEmployeeForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  //add loading screen, confirmation popup and reset/close modal when complete
  addEmployee()
})

function addEmployee(){
  console.log('gn2 addEmployee()')

  let newEmployeeObj = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    gender: document.getElementById('gender').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zipcode: document.getElementById('zipcode').value,
    email: document.getElementById('email').value,
    dob: document.getElementById('dob').value,
    phone: document.getElementById('phone').value,
    picture: document.getElementById('picture').value
  }

  console.log('newEmployeeObj', newEmployeeObj)

  fetch('http://localhost:3000/addEmployee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEmployeeObj),
  })
  .then(function(response){
    if(response.ok){
        return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(function(data){
   console.log('data returned in addNewEmployee', data)
   //getting success message. display in popup and clear/close modal
   if(data.success){
    alert(data.message)
    // const form = document.getElementById('addEmployeeForm');
    form.reset()
    modal.style.display = 'none';
   }
   else{
    alert(data.message)
   }
  })
  .catch(function(error){
    console.log(error);
    alert('something went wrong')
  })
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


