import React from 'react'
import './YouMayAlsoLikeSection.css'
import ProductCard from '../../Cards/ProductCard/ProductCard'
function YouMayAlsoLikeSection() {
  return (
    <div className='youmayalsolikesection'>
        <div className="youmayalsolikesection_heading">
            <h3>You May Also Like</h3>
        </div>
        <div className="youmayalsolikesection_cards">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          
        </div>
    </div>
  )
}

export default YouMayAlsoLikeSection