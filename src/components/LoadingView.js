import { useLottie } from 'lottie-react';
import React from 'react'
import loadingBlue from './../lotties/animation_lldkogqz.json'

export default function LoadingView() {
  const options = {
    animationData: loadingBlue,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <main class="container">
        <section className='h-50'>
            {
              View
            }
        </section>
    </main>
  )
}
