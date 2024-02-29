import { useState } from "react";



function EmpList() {

    const [empArray, setempArray] = useState([]);

    const [empno, setempno] = useState("");
    const [empname, setempname] = useState("");
    const [job, setjob] = useState("");
    const [sal,setsalary] = useState("");
    const [deptno,setdeptno] = useState("");


    function getempClick() {
        let data = [
            { empno: 101, empname: "Aditi Deshpande", job: "Analyst",sal:"35000",deptno:10 },
            { empno: 102, empname: "Sayali Chaudhari", job: "Analyst trainee",sal:"25000",deptno:20 },
            { empno: 103, empname: "Jigisha Padia", job: "Consultant",sal:"75000",deptno: 30 },
            { empno: 104, empname: "Radhika Deshpande", job: "Senior Analyst",sal:"65000",deptno:40 },
            { empno: 105, empname: "Nidhi Mindhada", job: "Senior Consultant",sal:"125000",deptno:50 },
        ];

        setempArray(data);

    }

    function addempClick()
    {
        let empObj = { };
        empObj.empno = empno; 
        empObj.empname = empname; 
        empObj.job = job; 
        empObj.sal = sal; 
        empObj.deptno = deptno;  
        

        let tempArray = [...empArray];
        tempArray.push(empObj);       
        setempArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setempno("");
        setempname("");
        setjob("");
        setsalary("");
        setdeptno("");
    }


    function  deleteClick(dno)
    {


        let tempArray = [...empArray];
        
        let  index = tempArray.findIndex( item => item.empno == dno );
        tempArray.splice(index, 1); 

        setempArray( tempArray );
    }

    function  selectClick(dno)
    {
      let empObj =   empArray.find(item =>  item.empno ==  dno);
      setempno(empObj.empno);
      setempname(empObj.empname);
      setjob(empObj.job);
      setsalary(empObj.sal);
      setdeptno(empObj.deptno);

   
    }


    function  updateEmpClick()
    {
        let tempArray = [...empArray];

        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].empname = empname ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;



        setempArray( tempArray );

        clearFields();
    }

    let resultArray = empArray.map(item => {
        return <tr>
            <td>{item.empno}</td>
            <td>{item.empname}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
            <td align="center">
        
            <a href="javascript:void(0);" onClick={() => { selectClick(item.empno) }}>
        <img src={"./Images/selecticon.png"} width="20px"  /> {/* Use img tag with your delete icon */}
      </a>
            <a href="javascript:void(0);" onClick={() => { deleteClick(item.empno) }}>
        <img src={"./Images/deleteicon.jpg"} width="20px"  /> {/* Use img tag with your delete icon */}
      </a>
                
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Empno" type="text"
                value={empno} onChange={(e) => setempno(e.target.value)} />

            <input placeholder="Emp name" type="text"
                value={empname} onChange={(e) => setempname(e.target.value)} />

            <input placeholder="Job" type="text"
                value={job} onChange={(e) => setjob(e.target.value)} />
            
            <input placeholder="sal" type="text"
                value={sal} onChange={(e) => setsalary(e.target.value)} />

            <input placeholder="deptno" type="text"
                value={deptno} onChange={(e) => setdeptno(e.target.value)} />


            <hr />

            <input type="button" value="Get Emp" onClick={getempClick} />
            <input type="button" value="Add Emp" onClick={addempClick} />
            <input type="button" value="Update Emp" onClick={updateEmpClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>EmployeeID</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Dept Number</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmpList;