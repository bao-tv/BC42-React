import React from 'react'

function ProductItem({product, onGetProduct}) {
  return (
    <div className="card mt-4">
        <img src={product.image} className="card-img-top" alt={product.alias} 
        onClick={() => onGetProduct(product,'detail') }  
        style={{cursor:'pointer'}}/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price} <span>$</span></p>
            <button className="btn btn-primary" onClick={()=>onGetProduct(product,'cart')}>Add to carts <i className="bi bi-cart-plus-fill"></i></button>
        </div>
    </div>
  )
}

export default ProductItem