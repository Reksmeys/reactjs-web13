import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'

export default function Home() {
    // declare variable
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products?limit=8&offset=0')
        .then(res => res.json())
        .then(resp => {
            setProducts(resp)
            setLoading(false)
        })
    }
    useEffect(() => {
        // call to api
        console.log("Home page started")
        fetchProducts()
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
