const express = require('express');
const multer  = require('multer');
const upload = multer();

const app = express();
const cors = require('cors');
const allEmployees = require('./database/employees'); 
const companyInfo = require('./database/companyInfo'); 


// Enable CORS
app.use(cors());

// This line is crucial for getting req.body populated in POST requests
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello from Server!');
});  

app.get('/getAllEmployees', (req, res) => {
    res.send(allEmployees)
});

app.get('/getSpecificEmployeeGet', (req, res) => {
  let uuid = req.query.uuid;
  // console.log('uuid in GET', uuid)

  //go through allEmployees to get correct employee object to return
  //this is where you would query your db

  let employeeObj = allEmployees.find(f => f.login.uuid === uuid)
  // console.log('employeeObj', employeeObj)

  res.json(employeeObj)
})

app.post('/getSpecificEmployeePost', (req, res) => {
  // console.log('req.body.uuid POST', req.body.uuid)

  //go through allEmployees to get correct employee object to return
  //this is where you would query your db

  let employeeObj = allEmployees.find(f => f.login.uuid === uuid)
  // console.log('employeeObj', employeeObj)

  res.json(employeeObj)
})

app.post('/updateEmployee', upload.none(), (req, res) => {
  console.log('req.body in updateEmployee POST', req.body)

  // eventually we will write query to update employee in db
  // for now we will update the employees.js array

  
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});