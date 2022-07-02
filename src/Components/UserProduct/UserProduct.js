import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UserProduct = ({addItem}) => {
    
    const [addedItems , setAddedItems] = useState()

    const { _id, description } = addItem;

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/addedItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = addedItems.filter(addedItem => addedItem._id !== id);
                setAddedItems(remaining);
            })
        }
    }

    return (
        <article>
        <div data-aos="fade-up" className="col ">
            <div className="card h-100 cardImage border-start-0 border-bottom-0 border-top-0 p-3 border-end-3">
                <div className='round-img mx-auto'>
                </div>
                <div className="card-body">
                    <p>{description}</p>
                    
                    <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(addItem._id)}>Delete Item</Button>
                    <Button variant='danger' className='d-block mt-5 mx-auto '>Edit Item</Button>
                </div>
            </div>
        </div>

    </article>
    );
};

export default UserProduct;