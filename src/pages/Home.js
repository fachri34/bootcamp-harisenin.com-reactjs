import React from 'react'
import image from '../asset/image/image9.jpg'
import '../style/home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='container mx-auto justify-content-between'>
                <div className='d-flex'>
                    <div className='wrap-text'>
                        <span>Welcome to my Portofolio</span>
                        <h1>Halo! I'm Riesya Fachri Rofi</h1>
                    </div>
                    <div className='image'>
                        <img src={image} alt='gambar' width={700} />
                    </div>
                </div>
            </div>
        </div>
    )
}
