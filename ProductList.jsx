import React from "react";
import {ProductItem1,ProductItem2,ProductItem3,ProductItem4,ProductItem5,ProductItem6} from "./ProductItem";


function ProductList() {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    <ProductItem1 />
                    <ProductItem2 />
                    <ProductItem3 />
                    <ProductItem4 />
                    <ProductItem5 />
                    <ProductItem6 />
                </div>
            </div>
        </section>

    )
};

export default ProductList;