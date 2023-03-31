import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductForm({show, onClose, onSubmit}) {
    const [product, setProduct] = useState({});
    // useEffect(() => {
    //     setProduct(productSelect)
    // },[productSelect])
    const handleSubmit = (evt) => { 
        // chặn hành vi submit mặc định của form
        evt.preventDefault();
       
        onSubmit(product);

        // //reset form
        // handResetFrom();
    };

    const handleChange = (evt) => {
        // console.log(evt.target.name);
        setProduct({
            ...product,
            [evt.target.name]: evt.target.value,
        })
    }

    console.log(product);

  return (
    <div>
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} placeholder="Enter product name" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={handleChange} placeholder="Enter product type" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleChange} placeholder="Enter product description" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={handleChange} placeholder="Enter product image" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={handleChange} placeholder="Enter product price" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Reset
          </Button>
          <Button type="submit" variant="primary" onClick={onClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductForm