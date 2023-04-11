import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Carts({isCartOpen, onIsCartClose, carts, onRemoveProduct, onUpdateQuantity, totalProduct, total}) {

  return (
    <>
        <Offcanvas show={isCartOpen} onHide={onIsCartClose} placement="end" className="w-75 overflow-scroll m-0" tabIndex={-1} style={{ display: "block"}}>
            <Offcanvas.Header className="text-white bg-dark text-center">
                <Offcanvas.Title id="offcanvasTopLabel">Carts</Offcanvas.Title>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onIsCartClose}><i className="bi bi-x-lg"></i></button>
            </Offcanvas.Header >
            <Offcanvas.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>
                            <th></th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Total (LC)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <img 
                                            src={item.image}
                                            alt={item.alias}
                                            width="70px"
                                            height="70px"
                                        />
                                    </td>
                                    <td>{(item.quantity).toLocaleString()}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary" onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.quantity === 1}><i className="bi bi-dash-lg"></i></button>
                                        <button type="button" className="btn btn-primary"onClick={() => onUpdateQuantity(item.id, 1)}><i className="bi bi-plus-lg"></i></button>
                                    </td>
                                    <td>{(item.price).toLocaleString()} $</td>
                                    <td>{(item.price * item.quantity).toLocaleString()} $</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={()=> onRemoveProduct(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr className='text-primary fs-5'>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th>{totalProduct.toLocaleString()}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>{total.toLocaleString()} $</th>
                        </tr>
                    </tbody>
                </table>

            </Offcanvas.Body>
                <div className="offcanvas-footer d-flex justify-content-end me-3">
                    <button type="button" className="btn btn-secondary me-3" onClick={onIsCartClose}>Close</button>
                    <button type="button" className="btn btn-primary">Proceed to checkout</button>
                </div>
        </Offcanvas>
        {/* <div className="offcanvas-backdrop fade show m-0"/> */}
    </>
  )
}

export default Carts