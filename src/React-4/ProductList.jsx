import React from 'react';
import Table from 'react-bootstrap/Table';

function ProductList({state,onSelectProduct,onRemoveProduct}) {
  return (
    <div className='row'>
        {state.loading &&  <div className="text-center">
            <img src='img/loading.svg' alt="" style={{ width: '100px',height: '100px'}}/>
                </div>
        }
        {state.error && <h1>{state.error}</h1>}
        
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.products && !state.loading && state.products.map((obj, index) => {
                        return (
                            <tr key={obj.id}>
                                <td>{index + 1}</td>
                                <td>{obj.name}</td>
                                <td>{obj.type}</td>
                                <td>{obj.description}</td>
                                <td>{obj.image}</td>
                                <td>{obj.price}</td>
                                <td>
                                    <button className="btn btn-warning me-2" 
                                    onClick={()=> onSelectProduct(obj)}>Edit</button>
                                    <button className="btn btn-danger" 
                                    onClick={() => onRemoveProduct(obj.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </Table>
    </div>
  )
}

export default ProductList