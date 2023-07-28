import React, { useEffect, useState } from 'react'
import { fetchCategories, fileUploadToServer, insertProduct } from '../services/productAction'

export default function ProductForm() {

    const [categories, setCategories] = useState([])
    const [source, setSource] = useState("")
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


    const onPreviewImage = (e) => {
        console.log(e.target.files)
        setSource(e.target.files[0])
    }

    const handleOnSubmit = () => {
        console.log('on submit')

        // create image object as form data
        const formData = new FormData()
        formData.append("file", source)
        // ----- function to upload image data to server ---
        fileUploadToServer(formData)
        .then(res => {
            product.images = [res.data.location]
            console.log(product.images)
            // --- insert product including image
            insertProduct(product)
            .then(res => res.json())
            .then(resp => console.log(resp))
        })
        // ----- end function

        // insertProduct(product)
        // .then(res => {
        //     res.json()
        //     if(res.status == 201){
        //         alert("Created")
        //     }
        // })
        // .then(resp => console.log(resp))

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
        {/* preview area */}
        <div className='mb-3 preview'>
            <img 
                src={source && URL.createObjectURL(source)} 
                alt='Prevew Image' 
                style={{width: 200}}
            />
        </div>
        {/* choose file area */}
        <div className="mb-3">
            <input type='file' onChange={onPreviewImage} />
        </div>
        <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={() => handleOnSubmit()}
        >Create Product</button>
    </main>
  )
}
