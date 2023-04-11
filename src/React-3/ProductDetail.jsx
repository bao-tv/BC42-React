import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ProductDetail({product, isOpen, onIsClose, onGetProduct}) {
    console.log(product);
    if (!isOpen) {
        return null;
      }

  return (
    <>
        <Modal size="lg" backdrop="static" show={isOpen} onHide={onIsClose} style={{ display: "block", margin: 0}} tabIndex={-1} >
            <Modal.Header className="text-white bg-dark text-center">
                <Modal.Title className="fs-5" id="exampleModalLabel">Product Detail</Modal.Title>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close" onClick={onIsClose}><i className="bi bi-x-lg"></i></button>
            </Modal.Header>
            <Modal.Body>
                <div className="card text-bg-white">
                <img src={product.image} className="card-img" alt={product.alias} />
                <div className="card-img-overlay ">
                    <h5 className="card-title fs-2">Name: {product.name}</h5>
                    <p className="card-text">Description: {product.description}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text fs-1 text-danger"><small>Price: {product.price} <span>$</span></small></p>
                </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onIsClose}>Close</button>
                <button type="button" className="btn btn-primary" onClick={()=>onGetProduct(product,'cart')}>Add to carts <i className="bi bi-cart-plus-fill"></i></button>
            </Modal.Footer>
        </Modal>
        {/* <div className="modal-backdrop fade show" style={{margin:0}}/> */}
    </>
  )
}

export default ProductDetail