import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Search from './Search';

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
    const [searchByName,setSearchByName] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectProduct, setSelectProduct] = useState({})
    const url = "https://63e8641ccbdc565873852dc8.mockapi.io/api/Products/";
    //  call API
    const fetchProducts = async () => {
        dispatch({type: "FETCH_START"});
        try {
            const response = await axios.get(
                url,
                {
                    params: {
                      name: searchByName || undefined,
                    },
                }
            );
            // console.log(response.config);
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
    };

    // handle submit update or created
    const handleSubmit = async (obj) => {
        try {
            if(obj.id) {
                console.log('cập nhật: ',obj);
                await axios.put(
                    url+(obj.id),obj
                );
            } else {
                console.log('tạo: ',obj);
                await axios.post(
                    url,obj
                );
            }
            fetchProducts();
        } catch (err){
            console.log(err);
        }
    };

    const handleSelectProduct = (obj) => {
        // console.log('Product select: ',obj);
        setSelectProduct(obj);
        handleShow();
    }

    const handleRemoveProduct = async (id) => {
        try {
            await axios.delete(url+id);    fetchProducts();
        } catch (err){
            console.log(err);
        }
    }
    const handleSearch = async (searchByName) => {
        setSearchByName(searchByName);
    }

    useEffect(() => {fetchProducts()},[searchByName]);

  return (
    <div className='container'>
        <header className='bg-info rounded'>
            <p className='text-center fs-2 p-3 fw-bold'>Product Manage</p>
        </header>

        <div className='m-3 d-flex justify-content-between'>
            <button className='btn btn-success m-3' onClick={handleShow}>Created Product</button>
            <div className="m-3 w-25">
                <Search onSearch={handleSearch}/>
            </div>
        </div>
        <ProductForm variant="primary" 
        onClose={handleClose} 
        show={show} 
        selectProduct={selectProduct}  
        onSubmit={handleSubmit}
        onRestSelectProduct={() => setSelectProduct({})}/>
        <ProductList state={state} onSelectProduct={handleSelectProduct} onRemoveProduct={handleRemoveProduct}/>
    </div>
  )
}

export default ProductManagement