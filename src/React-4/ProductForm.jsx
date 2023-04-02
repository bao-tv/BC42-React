import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductForm({show, onClose, onSubmit, selectProduct, onRestSelectProduct}) {
    const [product, setProduct] = useState({description:'',
    id: '',
    name: '',
    price: '',
    image: '',
    type: ''});
    useEffect(() => {
      // Dùng giá trị mới của prop user để cập nhật state cho state values
      setProduct(selectProduct)
    }, [selectProduct])
    const handleSubmit = (evt) => { 
        // chặn hành vi submit mặc định của form
        // evt.preventDefault();
        let isValid = validateForm();
        console.log(isValid);
        if(!isValid) return;
        onSubmit(product);

        // //reset form
        handResetFrom();
        onClose();
    };
    const [formErrors, setFormErrors] = useState({
      name : '',
      type : '',
      price: '',
      image: '',
      description: '', 
    })
    // console.log('error: ',formErrors);

    const handleChange = (evt) => {
      let {name,value } = evt.target;
      // validateForm();
      setProduct({
          ...product,
          [name]: value,
      })
    };

    const validateForm = () => {
      let errors = {};
      let isValid = true;

      if(!product.type) {
        errors.type = 'type is required';
        isValid = false;
      }

      if(!product.price) {
        errors.price = 'price is required';
        isValid = false;
      } else if (isNaN(product.price)) {
        errors.price = 'price must be a number';
        isValid = false;
        console.log(typeof +product.price);
      }

      if(!product.image) {
        errors.image = 'image is required';
        isValid = false;
      }

      if(!product.description) {
        errors.description = 'description is required';
        isValid = false;
      }

      if(!product.name) {
        errors.name = 'Name is required';
        isValid = false;
      }

      setFormErrors(errors);
      return isValid;
    }

    const handResetFrom = () => {
      setProduct({
        description:'',
        id: '',
        name: '',
        price: '',
        image: '',
        type: ''
      });
      onRestSelectProduct();
    }
    // console.log(product.name);
    // console.log(product);
  return (
    <div>
        <Modal show={show} onHide={onClose} >
        <Modal.Header closeButton>
          <Modal.Title>Product Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={handleChange} name='name' value={product.name} placeholder="Enter product name" />
                <Form.Text className="text-muted">
                  {formErrors.name}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={handleChange} name='type' value={product.type} placeholder="Enter product type" />
                <Form.Text className="text-muted">
                  {formErrors.type}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleChange} name='description' value={product.description} placeholder="Enter product description" />
                <Form.Text className="text-muted">
                  {formErrors.description}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={handleChange} name='image' value={product.image} placeholder="Enter product image" />
                <Form.Text className="text-muted">
                  {formErrors.image}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={handleChange} name='price' value={product.price} placeholder="Enter product price" />
                <Form.Text className="text-muted">
                  {formErrors.price}
                </Form.Text>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" type='button' onClick={handResetFrom}>
            Reset
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductForm