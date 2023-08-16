import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'
import developer from './../lotties/animation_lldk775l.json'
import { useLottie } from 'lottie-react'

export default function About() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)

  const options = {
    animationData: developer,
    loop: true
  };
  const { View } = useLottie(options);

  useEffect(() => {
      // subscribe to store
      dispatch(fetchAllProducts())
  }, [])
  return (
    <main>
        <section class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Brand your pictures with the free watermark and generate your documents with the better solution</h1>
              <p class="lead">Level up your content with customizable watermarks and create stunning
                certificates effortlessly on our website.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Getting Started</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Go Back</button>
              </div>
            </div>
          </div>
        </section>
        <section className='container partner'>
            <p className='text-center fs-2'>Trusted by designers & developers from over companies worldwide</p>
            <div className='d-flex flex-wrap w-75 justify-content-center m-auto'>
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Google_13d1bebc3a.svg?updated_at=2023-02-01T09:30:58.652Z" alt="google" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Disney_9326063989.svg?updated_at=2023-02-01T09:35:39.701Z" alt="disney" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Duolingo_f8ada51f7b.svg?updated_at=2023-02-01T09:36:51.939Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Uber_d1b19ee87f.svg?updated_at=2023-02-01T09:35:39.735Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/instacard_new_b1fa17db81.svg" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Grab_2339109ee6.svg?updated_at=2023-02-01T09:35:39.529Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Netflix_9c7d33db41.svg?updated_at=2023-02-01T09:35:39.412Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Microsoft_78d3346119.svg?updated_at=2023-02-01T09:35:39.737Z" alt="" />
              <img className='m-3' src="https://stp-v4-cdn.lottiefiles.com/Airbnb_4c9a6209d1.svg?updated_at=2023-02-01T09:35:39.532Z" alt="" />
            </div>
        </section>

        <section class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              {
                View
              }
              {/* <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" /> */}
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lightweight, scalable animations for your ads and social media</h1>
              <p class="lead text-muted">LottieFiles takes away the complexity from motion design. It lets you create, edit, test, collaborate and ship a Lottie in the easiest way possible.</p>
              
            </div>
          </div>
        </section>

        <section className='container'>
            <h2 className='text-center fs-1 text-uppercase fw-bold'>Motion design made easy</h2>
            <div className='w-75 m-auto mt-5'>
              <img className='w-100' src="https://framerusercontent.com/images/CdX873RJfHUZ4CiIH3kyRyHPDc.png" alt="" />
            </div>
        </section>

    </main>
  )
}

