import React from "react";
import productData from "./ProductData";

const Product = ({product}) => {
    return (
        <div className="w-full h-full text-[#12123fe6] bg-[#e6e5f3] border-2 border-[#12123fe6] rounded-b-[10px] rounded-t-[12px]">
            {
                <img
                    className="w-full h-[300px] rounded-t-[10px]"
                    src={productData[Math.floor(Math.random() * productData.length)]}
                    alt="img"/>
            }
            <div className="flex flex-col justify-between items-center py-[20px] px-[40px] max-md:px-[20px] text-[24px] h-[200px]">
                {
                    product.product && product.id &&
                    <p className="flex text-center">
                        <span>{product.product} - {product.id.substring(0, 8)}</span>
                    </p>
                }
                {
                    product.brand &&
                    <p className="text-center">
                        <span>{product.brand}</span>
                    </p>
                }
                {
                    product.price &&
                    <p className="text-center">
                        <span>{product.price} р.</span>
                    </p>
                }
            </div>
        </div>
    )
};

export default Product;
