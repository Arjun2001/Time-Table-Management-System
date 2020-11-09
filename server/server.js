const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var connection = mySql.createConnection({
    host: "localhost",
    user: 'root',
    password: "password",
    database: "test_db",    
    port: "3306"
})

connection.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('connected to db');
    }
});


//users table
connection.query("CREATE TABLE users (id int  AUTO_INCREMENT PRIMARY KEY,fullname varchar(255) not null, email varchar(50) NOT NULL,phonenumber BIGINT, password varchar(255) not null, role varchar(255) not null); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'user table error');
    } else{ 
        console.log("table users created");
    }
});
connection.query("INSERT into users values(1,'arjun','arjun@gmail.com',9551933375,'1234566','Admin');", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'user table insertion error');
    } else{ 
        console.log("users table inserted inital values");
    }
});

//tables creation
                        //ADMIN TABLE
connection.query("CREATE TABLE admin (admin_id int  AUTO_INCREMENT PRIMARY KEY,admin_dept varchar(25) not null, admin_email varchar(25) not null); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'admin table error');
    } else{ 
        console.log("table ADMIN created");
    }
});
                        //FACULTY TABLE
connection.query("CREATE TABLE faculty (fac_id int  AUTO_INCREMENT PRIMARY KEY,name varchar(25) not null, email varchar(50) NOT NULL,subject varchar(25) not null,phonenumber BIGINT); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'FACULTY table error');
    } else{ 
        console.log("table FACULTY created");
    }
});
                        //STUDENT TABLE
connection.query("CREATE TABLE student (student_id int  AUTO_INCREMENT PRIMARY KEY,name varchar(50) not null, email varchar(50) NOT NULL,year_of_join int,semester int, branch varchar(25)); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'STUDENT table error');
    } else{ 
        console.log("table STUDENT created");
    }
});
                        //DEPARTMENT TABLE
connection.query("CREATE TABLE DEPARTMENT (DEP_id int  AUTO_INCREMENT PRIMARY KEY,NAME varchar(50) not null); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'DEPARTMENT table error');
    } else{ 
        console.log("table DEPATRMENT created");
    }
});
                        //FACULTY REPLACEMENT TABLE
connection.query("CREATE TABLE FACULTY_REPLACEMENT (replacement_no int  AUTO_INCREMENT PRIMARY KEY,old_id int, new_id int, from_date date,to_date date); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'FAC_REPLACEMENT table error');
    } else{ 
        console.log("table FAC_REPLACEMENT created");
    }
});
                        //LAB TABLE
connection.query("CREATE TABLE LAB (LAB_id int  AUTO_INCREMENT PRIMARY KEY,CREDITS INT, DEPARTMENT_ID INT, FACULTY_ID INT); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'LAB table error');
    } else{ 
        console.log("table LAB created");
    }
});
                        //COURSE TABLE
connection.query("CREATE TABLE COURSE (COURSE_CODE int  AUTO_INCREMENT PRIMARY KEY,COURSE_NAME VARCHAR(25), COURSE_CREDITS INT); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'COURSE table error');
    } else{ 
        console.log("table COURSE created");
    }
});
                        //CLASS TABLE
connection.query("CREATE TABLE CLASS (ROOM_NO int  AUTO_INCREMENT PRIMARY KEY,DEPARTMENT_ID INT, BATCH VARCHAR(20), SECTION VARCHAR(20)); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'CLASS table error');
    } else{ 
        console.log("table CLASS created");
    }
});
                        //PHONE DETAILS TABLE
connection.query("CREATE TABLE PHONE_DETAILS (TIME_TABLE_id int  AUTO_INCREMENT PRIMARY KEY,FACULTY_NO BIGINT); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'PHONE_DETAILS table error');
    } else{ 
        console.log("table PHONE_DETAILS created");
    }
});
                        //TIME TABLE TABLE
connection.query("CREATE TABLE TIME_TABLE (TIME_TABLE_ID int  AUTO_INCREMENT PRIMARY KEY,ADMIN_ID INT, STUDENT_ID INT, FAC_ID INT,DEP_ID INT, LAB_ID INT, REPLACEMENT_NO INT, COURSE_CODE INT, ROOM_NO INT); ", (err, rows) => {
    if(err) {
        console.log(err.sqlMessage,'TIME_TABLE table error');
    } else{ 
        console.log("table TIME TABLE created");
    }
});



app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query("select * from users where email = ?", [email], async function (error ,result, fields) {
        if (error) {
            res.send({
              "code":400,
              "message":"error ocurred.Please try again later 😉"
            })
        } else{
            console.log(result);
            if (result.length > 0) {
                if(result[0].password == password){
                    res.send({
                        "code":200,
                        "message":"login sucessfull 🙌"
                      })
                }
                else{
                    res.send({
                         "code":204,
                         "message":"Email and password does not match 🤷‍♂️"
                    })
                }
            } else {
                res.send({
                    "code": 204,
                    "message": "This User is not registered 🤦‍♂️"
                })
            }
            
        }
    });
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;

    connection.query(`INSERT INTO users(fullname,email,phonenumber,password,role) VALUES('${fullname}','${email}','${phonenumber}','${password}','Admin');`,(err, rows) => {
        if(err) {
            console.log(err,"inserted initial values already");
            res.send({
                "code":400,
                "message":"error ocurred.Please try again later 😉"
              })
        } else{ 
            res.send({
                "code":200,
                "message":"Admin registerd successfully"
              })
        }

    })
})

app.post('/api/getdata/:table', (req, res) => {
    const tName = req.params.table;
    connection.query(`SELECT * FROM ${tName}`, (err, result,FIELDS) => {
        if(err) {
            res.send({
                "code":400,
                "message":"error ocurred.Please try again later 😉"
              })
              console.log(err);
        } else{ 
            res.send({
                "code":200,
                "message":"fetched data successfully",
                "content":result
              })
        }
    });
});

app.post('/api/insert/:table', (req, res) => {
    const tName = req.params.table;
    var values = Object.values(req.body);
    console.log(values);
    connection.query(`insert into ${tName} values (?);`, [values], (err, result,FIELDS) => {
        if(err) {
            res.send({
                "code":400,
                "message":"error ocurred.Please try again later 😉"
              })
              console.log(err);
        } else{ 
            res.send({
                "code":200,
                "message":"inserted into db successfully"
              })
        }
    });
});

app.post('/api/delete/:table', (req, res) => {
    const tName = req.params.table;
    var id = req.body[1][0];
    var values = req.body[0][id];
    connection.query(`delete from ${tName} where ${id} = ?;`, [values], (err, result,FIELDS) => {
        if(err) {
            res.send({
                "code":400,
                "message":"error ocurred.Please try again later 😉"
              })
              console.log(err);
        } else{ 
            res.send({
                "code":200,
                "message":"deleted from db successfully"
              })
        }
    });
});

app.post('/api/update/:table', (req, res) => {
    const tName = req.params.table;
    var id = req.body[1][0];
    var values = req.body[0];
    connection.query(`update  ${tName} set ? where ${id} = ${req.body[0][id]};`, [values], (err, result,FIELDS) => {
        if(err) {
            res.send({
                "code":400,
                "message":"error ocurred.Please try again later 😉"
              })
              console.log(err);
        } else{ 
            res.send({
                "code":200,
                "message":"updated from db successfully"
              })
        }
    });
});

const port = process.env.PORT || 8080;
console.log(port);
app.listen(port,() => {
    console.log(`running on port ${port}`);
});