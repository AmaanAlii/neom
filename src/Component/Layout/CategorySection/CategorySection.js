import React from 'react'
import './CategorySection.css'
import CategoryCard from '../../Cards/CategoryCard/CategoryCard'
function CategorySection() {
  return (
    <div className='categorysection'>
        <div className="categorysection_head">
            <h3>Category</h3>
        </div>
        <div className="categorysection_cards">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div>
  )
}

export default CategorySection