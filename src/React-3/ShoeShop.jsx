import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import Carts from './Carts';
import data from './data.json';

function ShoeShop() {

    const [selectProduct, setSelectProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [carts, setCarts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleGetProduct = (product,value) => {
        (value === 'detail') && setSelectProduct(product);
        if(value === 'cart') {
            // Tìm xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
            const index = carts.findIndex((item) => item.id === product.id);

            if (index === -1) {
            // Chưa tồn tại => Thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
            const newProduct = { ...product, quantity: 1 };
            setCarts([...carts, newProduct]);
            } else {
            // Đã tồn tại => Tăng số lượng của sản phẩm lên 1
            const newCarts = [...carts];
            newCarts[index].quantity += 1;
            setCarts(newCarts);
            }
        }
    }
    const handleRemoveProduct = (productId) => {
        setCarts(carts.filter((item) => item.id !== productId))
      }
    
    const handleUpdateQuantity = (productId,quantity) => {
        const newCarts = carts.map((item) => {
            if(productId === item.id) {
                return {...item, quantity: item.quantity + quantity}
            }
            return item;
        })
        setCarts(newCarts);
    }

    let total = 0;
    const totalProduct = carts.reduce((tol, item) => {
        total += item.quantity * item.price
        return tol + item.quantity;
    },0)

  return (
    <div className='container mb-4'>
        <h1 className='text-center m-3 text-primary'>ShoesShop</h1>
        <div className="d-flex justify-content-end">
            <button className='btn btn-secondary btn-lg' onClick={() => setIsCartOpen(true)} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-bag-check me-2"></i>({totalProduct})</button>
        </div>
        <ProductList onGetProduct={handleGetProduct} products={data} onIsOpen={() => setIsOpen(true)} onIsCartOpen={() => setIsCartOpen(true)}/>
        <ProductDetail 
            isOpen={isOpen}
            onIsClose={() => setIsOpen(false)}
            product={selectProduct}
            onGetProduct={handleGetProduct}
        />

        <Carts 
            isCartOpen={isCartOpen}
            onIsCartClose={() => setIsCartOpen(false)}
            carts={carts}
            onRemoveProduct={handleRemoveProduct}
            onUpdateQuantity={handleUpdateQuantity}
            totalProduct ={totalProduct}
            total={total}
        />
    </div>
  )
}

export default ShoeShop