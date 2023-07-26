import React, { useEffect, useState } from 'react'
import { fetchCategories, insertProduct } from '../services/productAction'

export default function ProductForm() {

    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: 1,
        images: [
            "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        ]
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setProduct(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
        console.log(product)
    }

    const handleOnSubmit = () => {
        console.log('on submit')
        insertProduct(product)
        .then(res => {
            res.json()
            if(res.status == 201){
                alert("Created")
            }
        })
        .then(resp => console.log(resp))

    }

    useEffect(() => {
        fetchCategories()
        .then(res => setCategories(res))
    }, [])

  return (
    <main className='container'>
        
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                name="title" 
                placeholder="Magic Mouse"
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="price" className="form-label">Price $</label>
            <input 
                type="text" 
                className="form-control" 
                name="price" placeholder="300$" 
                onChange={onChangeHandler}
            />
        </div>
        <div className='mb-3'>
            <label for="category" className="form-label">Choose Category</label>
            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={onChangeHandler}
                name='categoryId'
            >
                <option selected>Choose Category</option>
                {
                    categories && categories.map(cat => (
                        <option value={cat.id}>{cat.name}</option>
                    ))
                }
                
            </select>
        </div>
        <div className="mb-3">
        <label for="description" className="form-label">Description</label>
        <textarea 
            className="form-control" 
            name="description" 
            rows="3"
            onChange={onChangeHandler}
        ></textarea>
        </div>
        <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={() => handleOnSubmit()}
        >Create Product</button>
    </main>
  )
}