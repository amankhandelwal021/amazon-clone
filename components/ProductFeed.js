import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Image from "next/image";

const ProductFeed = ({ products }) => {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="grid grid-flow-row-dence md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-40 xl:-mt-52 sm:-mt-28 mx-auto">
      {products 
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
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

      <div className="col-span-full mx-5" data-aos="fade-up">
        <Image src="https:links.papareact.com/dyz" alt="" width="300" height="300" layout="fill" />
      </div>

      <div className="md:col-span-2" data-aos="zoom-in-up">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
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

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
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
  );
};

export default ProductFeed;
