import React from 'react'
import ProductCard from './ProductCard'

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dence md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-40 xl:-mt-52 sm:-mt-28 mx-auto">
        {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
           <ProductCard 
           
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           rating={rating}

           />
        ))}
        
    <img src="https:links.papareact.com/dyz" alt="" className="col-span-full"/>
        
        <div className="md:col-span-2">
        {products.slice(4, 5).map(({ id, title, price, description, category, image, rating }) => (
           <ProductCard 
           
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           rating={rating}

           />
        ))}
        </div>

        {products.slice(5, products.length).map(({ id, title, price, description, category, image, rating }) => (
           <ProductCard 
           
           key={id}
           id={id}
           title={title}
           price={price}
           description={description}
           category={category}
           image={image}
           rating={rating}

           />
        ))}
    </div>
  )
}

export default ProductFeed


