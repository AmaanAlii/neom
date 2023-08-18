import React from 'react'
import './OurProductSection.css'
import ProductCard from '../../Cards/ProductCard/ProductCard'
function OurProductSection() {
  return (
    <div className='ourproductsection'>
        <div className="ourproductsection_heading">
            <h3>Our Product </h3>
        </div>
        <div className="ourproductsection_card">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
    </div>
  )
}

export default OurProductSection