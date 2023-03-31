import React from 'react'

export default function Product({productList, onProduct}) {
    // console.log(productList);
  return (
    <div className="glass">
        <div className="container h-100">
            <div className="row h-100">
                {productList.map((product) => {
                    return (
                        <div key={product.id} className="col-sm-2 d-flex align-items-center justify-content-around">
                            <div className="glassItem" onClick={() => onProduct(product)}>
                                <img src={product.url} alt={product.name} srcset="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
