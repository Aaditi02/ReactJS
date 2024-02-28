//1.  Create a react component to display student details in table format  (Single Student)
//a. Student Details :   sid, sname, course, age, total
import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {

    // Scalar Variables
    let StudentID = 103;
    let Studentname = "Aditi Deshpande";
    let Course= "ReactJs";
    let age = 22;
    let email = "deshpande.aditi91@gmail.com";

    //
    // Array of Objects
  
    let doctorArray = [
      { doctorID: 101, doctarname: "Ujwal", Designation: "Dean" ,experience:"10 years",contactNumber:9881487121},
      { doctorID: 102, doctarname: "Deepika", Designation: "MD" ,experience:"8 years",contactNumber:9834345814},
      { doctorID: 103, doctarname: "Shree", Designation: "HOD" ,experience:" 8 years",contactNumber:7588240574},
      { doctorID: 104, doctarname: "Aditi", Designation: "Assistance" ,experience:"3 years",contactNumber:9623903845},
    ];

    let resultArray2 = doctorArray.map(item => 
      {
        return <tr>
                <td>{item.doctorID}</td>
                <td>{item.doctarname}</td>
                <td>{item.Designation}</td>
                <td>{item.experience}</td>
                <td>{item.contactNumber}</td>
              </tr>;
      });
      

  



  

    return(
        <>
        <div>
          <table border="2"  width="500">
            <tr>
              <td colspan="2" align='center'>
                Student Details
              </td>
            </tr>
            <tr>
              <td>Student Id:</td>
              <td>{StudentID}</td>
            </tr>
            <tr>
              <td>Name of Student:</td>
              <td>{Studentname}</td>
            </tr>
            <tr>
              <td>Course assigned :</td>
              <td>{Course}</td>
            </tr>
            <tr>
              <td>Age of the student :</td>
              <td>{age} </td>
            </tr>
            <tr>
              <td> Email :</td>
              <td>{email}  </td>
            </tr>


          </table>
        </div>
        <br/>
        <hr/>
        <br/>

        <table border="2"  width="500">
          <tr>
            <th>DoctorID</th>
            <th>Doctor's name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Contact Number</th>
          </tr>
          {resultArray2}
        </table>
        <br/>
        <hr/>

        <div>
        <h1>Displaying Images in React</h1>
        <img src="https://wallpapercave.com/wp/wp3478449.jpg" alt="Description of the image" width="500px" height="300px"/>
      </div>
        </>
        
        
    );
}
export default App;
  