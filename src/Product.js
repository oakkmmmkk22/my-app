import React, { useState,useEffect } from "react";
import axios from "axios";
export default function Product(){
    const [product,setProduct]=useState([])
    const myInputRef0 = React.createRef()
    const myInputRef1 = React.createRef()
    const myInputRef2 = React.createRef()
    useEffect(()=>{
        console.log("request to api")
        axios.get("http://127.0.0.1:5000/products")
        .then(response=>setProduct(response.data))
        .catch(error => {
            console.error('Error fetching data:', error);
          })
    },[])
    const onAddProduct=(id)=>{
        console.log(myInputRef1.current.data)
        console.log(myInputRef2.current.data)
        const data={
            name:myInputRef1.current.value,
            price:myInputRef2.current.value
        }
        axios.post("http://127.0.0.1:5000/products",data)
        .then((response) => {
            setProduct(response.data);
        })
    }
    const show_products = product.map((item)=> {
        return (<tr key={item.id}><td>{item.id}</td><td>{item.name}</td>
        <td>{item.price}</td>
        <td><button>delete</button></td>
        </tr>)
    })
    return (<div>
        <table border='1'><thead><tr><td>id</td><td>name</td><td>price</td></tr></thead>
        <tbody>{show_products}</tbody></table>
        Product ID : <input type="text" name ='product_id' ref={myInputRef0}/>
        <br/>
        Product name : <input type="text" name ='product_name' ref={myInputRef1}/>
        <br/>
        Price : <input type="text" name ='product_price' ref={myInputRef2}/>
        <br/>
        <button onClick={onAddProduct.bind(this)}>Add</button>
        {/* <button >Add</button> */}
    </div>)
}
