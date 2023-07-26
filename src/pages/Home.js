import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/productAction'

export default function Home() {
    // declare variable
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        // call to api
        console.log("Home page started")
        fetchProducts()
        .then(resp => {
            setLoading(false)
            setProducts(resp)
        })

    }, [])
  return (
    <>
        <main className='container'>
            <h1>Products</h1>
            <div className='row g-4'>
                {
                    isLoading ? 
                    <>
                        <div className='col-12 col-md-3'>
                            <LoadingView />
                        </div>
                    </>
                    : 
                    products.map((p) => (
                        <div 
                            key={p.id}
                            className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <Link 
                                to={`/read/${p.id}`}
                                className='text-decoration-none'
                            >
                                <Card 
                                    imageURL={p.images[0]}
                                    title={p.title}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    </>
  )
}
