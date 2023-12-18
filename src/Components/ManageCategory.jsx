import React, { useEffect, useState } from 'react'
import { createCategoryApi, getCategoryAPI } from '../Services/allApi';

function ManageCategory() {
    const [category, setCategory] = useState("")
    console.log(category);
    const handleCreateCategory = async(e) => {
        const reqBody = {
            category
        }
        const result = await createCategoryApi(reqBody)

        if (result.status === 200) {
            alert("Category created")
        }
        else {
            alert("An error occurred")
        }
    }

    const allCategory = async() => {
        const result = await getCategoryAPI()
        console.log(result);
    }

    useEffect(() => {
        allCategory()
    }, [])
  return (
    <div>
        <h2>Add Categories</h2>
        <div className='d-flex mb-3'>
            <input type="text" placeholder='Enter category name' className='form-control w-50' onChange={(e) => setCategory(e.target.value)} />
            <button className='ms-3 btn btn-primary' onClick={(e) => {handleCreateCategory(e)}}>Create</button>
        </div>

        <div className='d-flex'>
            <input type="text" placeholder='Enter sub-category' className='form-control w-50' onChange={(e) => setCategory(e.target.value)} />
            <button className='ms-3 btn btn-primary'>Add</button>
        </div>
        <button className='ms-3 btn btn-primary' onClick={(e) => {handleCreateCategory(e)}}>Create</button>
    </div>

  )
}

export default ManageCategory