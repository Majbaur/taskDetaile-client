import React, { useEffect, useState } from 'react';
import UserProduct from './../UserProduct/UserProduct';
import './MyItems.css'
const MyItems = () => {
    const [addItems,setAddItems]=useState([])
    useEffect(() =>{
        const getAddItems=async () => {
            const url = `http://localhost:5000/addedItem`
            fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res=>res.json())
            .then(result =>{
                setAddItems(result)
            })
            // const{data}= await axios.get(url)
            // setAddItems(data)
        }
        getAddItems()
    })
    return (
        <div className='container'>
            <h2>All Descriptioncom: {addItems.length}</h2>
            <div  className="row row-cols-1 row-cols-md-3 g-5">
            {
                addItems.map(addItem => <UserProduct
                    key={addItem._id}
                    addItem={addItem}
                >
                </UserProduct>)
            }
            </div>
        </div>
    );
};

export default MyItems;