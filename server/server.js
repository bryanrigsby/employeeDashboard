import express from 'express';
// import multer from 'multer';
import cors from 'cors';
import mysql from 'mysql2/promise';
import {config} from 'dotenv'
import { getAge, generateRandomAlphaNumeric } from "./util/utils.js"

//Middleware 
const app = express(); 
config()
// Enable CORS
app.use(cors());
// Middleware to parse JSON in the request body
app.use(express.json());
// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));


//Database//
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

 app.get('/getAllEmployees', async (req, res) => {
  const result = await pool.query("select * from employee");
  const rows = result[0];
  res.json({employees: rows})
});
 
app.get('/getCompanyInfo', async (req, res) => {
  const result= await pool.query('select * from business');
  const rows = result[0];
  res.json({companyInfo: rows});
});

app.post('/addEmployee', async (req, res) => {
  let employeeObj = req.body;
  try {
    //create UUID for new entries
    employeeObj.UUID = generateRandomAlphaNumeric();
    let result = await pool.query(`INSERT INTO employee SET ?`, employeeObj)
    result = result[0];
    // Check if the query was successful (affectedRows > 0)
    if (result.affectedRows > 0) {
      // Send a success response to the client
      res.json({ success: true, message: 'Employee added successfully' });
    } else {
      // Send an error response if no rows were affected
      res.json({ success: false, message: 'Employee not added' });
    }
  } catch (error) {
    // Handle any database or query errors
    console.error('Error in /addEmployee:', error);
    res.json({ success: false, message: 'Internal server error' });
  }
  
})

app.post('/getSpecificEmployee', async (req, res) => {
  console.log('req.body.UUID', req.body.UUID)
  let parsedUUID = JSON.parse(req.body.UUID);
  console.log('parsedUUID', parsedUUID)
  const result = await pool.query(`select * from employee where UUID = ${parsedUUID}`);
  const rows = result[0];
  console.log('rows', rows)
  // res.json(employeeObj)
})

// app.post('/updateEmployee', upload.none(), (req, res) => {
//   console.log('req.body in updateEmployee POST', req.body)
//   // eventually we will write query to update employee in db
//   // for now we will update the employees.js array
// })

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
