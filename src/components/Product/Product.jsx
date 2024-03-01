import React from "react";

const Product = ({product}) => {
    return (
        <div className="w-full h-full bg-[#12123fe6] text-white rounded-[10px]">
            <div className="p-[20px] text-[24px]">
                {
                    product.id &&
                    <p className="pb-[10px]">
                        <span className="font-semibold text-[26px]">ID: </span>
                        <span>{product.id}</span>
                    </p>
                }
                {
                    product.product &&
                    <p className="pb-[10px]">
                        <span className="font-semibold text-[26px]">Название: </span>
                        <span>{product.product}</span>
                    </p>
                }
                {
                    product.brand &&
                    <p className="pb-[10px]">
                        <span className="font-semibold text-[26px]">Бренд: </span>
                        <span>{product.brand}</span>
                    </p>
                }
                {
                    product.price &&
                    <p className="pb-[10px]">
                        <span className="font-semibold text-[26px]">Цена: </span>
                        <span>{product.price} р.</span>
                    </p>
                }
            </div>
        </div>
    )
};

export default Product;
