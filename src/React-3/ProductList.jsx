import React from 'react'
import ProductItem from './ProductItem'

function ProductList({products, onGetProduct, onIsOpen}) {
    const handleGetProduct = (product,value) => {
        onGetProduct(product,value);
        (value === 'detail') && onIsOpen(true);
    }

  return (
    <div className='row'>
        {products.map((obj) => {
            return (
                <div key={obj.id} className="col-sm-4">
                    <ProductItem onGetProduct={handleGetProduct}  product={obj}/>
                </div>
            )
        })}
    </div>
  )
}

export default ProductList