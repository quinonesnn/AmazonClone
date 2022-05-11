import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import "../style/Home.css"

function Home() {
  return (
    <div>
        <Header/>
        <div className='home'>
            <img
                className='home__img'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='Amazon Prime Advertisment'
            />
        </div>
        <div className='home__row'>
            <Product
                id="1"
                title="title"
                price={9.99}
                rating={3}
                image="https://m.media-amazon.com/images/I/41JfKuuDSfL.jpg"
            />
        </div>
    </div>
  )
}

export default Home