import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    
        const onSubmit = data => {
            
        console.log(data);
        const url = `http://localhost:5000/addedItem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a Service</h2>

            <form className='flex grid justify-center d-flex flex-column p-3' onSubmit={handleSubmit(onSubmit)}>
                <textarea className='flex justify-center mb-2 center border-2 border-black ' placeholder='Description' {...register("description")} />

                <input className='flex justify-center text-center text-white-400 font-bold rounded py-2 focus:outline-none bg-gray-200 border-2 border-indigo-400"'  type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddProduct;