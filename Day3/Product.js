import { useState } from "react";
function Product() {

    const [productName, setProductName] = useState("");
    const [unitPrice, setunitPrice] = useState("");
    const [qty, setqty] = useState("");
    const [result, setresult] = useState("");
    const[count,setCount]=useState(1);


    function updateproductName(event)
    {        
        setProductName(event.target.value);
    }

    function updateunitPrice(event)
    {        
        setunitPrice(event.target.value);
    }
    function updateqty(event)
    {        
        setqty(event.target.value);
    }

    function  getTotal()
    {
        let total = parseInt(unitPrice)*parseInt(qty);
        setresult(total)
    }

    function buttonClick(){
        setCount(count+1);
        alert(count);
    }

    let avtar = './pizza.jpg';

    

    return (
        <>
            <h3>Calculating The Total Price</h3>
            <hr/>

            <fieldset>
                <legend>User Login</legend>
                Product Name :    <input type="text"  value={productName} onChange={updateproductName}  />
                <br /><br />

                Unit Price :    <input type="text" value={unitPrice} onChange={updateunitPrice}  />
                <br /><br />
                Quantity:    <input type="text" value={qty} onChange={updateqty}  />
                <br /><br />
                

                <input type="button" onClick={getTotal} value="Get Total" />
                <input type="button" onClick={buttonClick} value="Get" />
               <p>{result}</p>
            </fieldset>
            <hr/>
            <img width="500" src={"./Images/" + avtar}/>3
            <img width="500" src="./Images/paneer.jpg"/>

            
        </>
    );
}

export default Product;