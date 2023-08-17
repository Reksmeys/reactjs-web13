import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllProducts } from '../redux/actions/productActions'

export default function Home() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.prodReducer)

    // declare local state
    // const [products, setProducts] = useState([])
    // const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts(1, 12))
        dispatch(fetchAllCategories())
    }, [])
  return (
    <main>
        <section className='container'>
            <h1>Products</h1>
            
            <div className='row g-4'>
                {
                    isLoading ? 
                    
                        <LoadingView />
                    
                    : 
                    products.map((p) => (
                        <div 
                            key={p.id}
                            className='col-12 col-sm-6 col-md-3 col-lg-2'>
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
        </section>
        <section className='container mt-5'>
            <h1>Categories</h1>
            
            <div className='row g-4'>
                {
                    isLoading ? 
                    
                        <LoadingView />
                    
                    : 
                    categories.map((c) => (
                        <div 
                            key={c.id}
                            className='col-12 col-sm-6 col-md-3 col-lg-2'>
                           
                            <Card 
                                imageURL={c.image}
                                title={c.name}
                            />
                           
                        </div>
                    ))
                }
            </div>
        </section>
    </main>
  )
}
