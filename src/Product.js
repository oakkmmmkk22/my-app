import React, { useState,useEffect } from "react";
import axios from "axios";
export default function Product(){
    const [product,setProduct]=useState([])
    const myInputRef1 = React.createRef()
    useEffect(()=>{
        console.log("request to api")
        axios.get("http://127.0.0.1:5000/products")
        .then(response=>setProduct(response.data))
        .catch(error => {
            console.error('Error fetching data:', error);
          })
    },[])
    const productList=product.map(p=><li key={p.id}>{p.id} 
    {p.name} <img src={p.img}/> {p.price}</li>)
    // return (<>
    //     <ul>
    //         {productList}
    //     </ul>
    // </>)
    const show_products = product.map((item)=> {
        return (<tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td><img src={item.img}/></td>
        <td>{item.price}</td>
        <td><button>delete</button></td>
        <td><button>ok</button></td>
        </tr>)
    }
    )
    return (<div>
        <table border='1'><thead><tr><td>id</td><td>name</td><td>Image</td><td>price</td></tr></thead><tbody>{show_products}</tbody></table>
        
        Product name : <input type="text" name ='product_name' ref={myInputRef1}/>
        <br/>
        Price : <input type="text" name ='product_price' ref={myInputRef1}/>
        <br/>
        <button>Add</button>
    </div>)
}
