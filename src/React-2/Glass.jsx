import React, { useState } from 'react';
import './main.css';
import data from './dataGlasses.json';
import Product from './Product';

function Glass() {
    const [product, setProduct] = useState('');
    const handleProduct = (product) => {
        setProduct(product);
    }
  return (
    <div className='fullPage'>
            <header>
                <div className="container">
                    <h2 className='text-center'>TRY GLASSES APP ONLINE</h2>
                </div>
            </header>
            <div className='container'>
                <div className="show">
                    <div className='model'>
                        <div className="model-glass">
                            <img src={product.url} alt="" />
                        </div>
                        <div className="info">
                            <h5>{product.name}</h5>
                            <p>{product.desc}</p>
                        </div>
                    </div>
                    <Product onProduct={handleProduct} productList={data}/>
                </div>
            </div>
    </div>
  )
}

export default Glass