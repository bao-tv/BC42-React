import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_START':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'FETCH_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

function ProductManagement() {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        loading: false,
        err: null
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const url = "https://63e8641ccbdc565873852dc8.mockapi.io/api/Products/";
    //  call API
    const fetchProducts = async () => {
        dispatch({type: "FETCH_START"});
        try {
            const response = await axios.get(
                url
            );
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    // handle submit update or created
    const handleSubmit = async (user) => {
        try {
            if(user.id) {
                await axios.put(
                    url(user.id),user
                );
            } else {
                await axios.post(
                    url,user
                );
            }
            fetchProducts();
        } catch (err){
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
        }, []);

  return (
    <div className='container'>
        <header className='bg-info rounded'>
            <p className='text-center fs-2 p-3 fw-bold'>Product Manage</p>
        </header>

        <div className='m-3'>
            <button className='btn btn-success' onClick={handleShow}>Created Product</button>
            <ProductForm variant="primary" onClose={handleClose} show={show} onSubmit={handleSubmit}/>
        </div>
        <ProductList state={state}/>
    </div>
  )
}

export default ProductManagement