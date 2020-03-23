import React from 'react';

import './Pricing.css';
import Product from './Product/Product';

const pricing = () => {
    let data = [
        {
            name: "Palm",
            price: 600,
            category: "palm",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            name: "Mostera",
            price: 900,
            category: "monstera",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        {
            name: "Aloes",
            price: 1200,
            category: "aloes",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.."
        }
    ];
    let products = data.map(row => (
            <Product
                key={row.name}
                name={row.name}
                category={row.category}
                price={row.price}
                description={row.description}/>
    ));

  return (
    <div className="container">
        <section id="pricing">
            {products}
        </section>
    </div>
  );
}

export default pricing;
