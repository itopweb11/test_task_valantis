import React, {useEffect, useRef, useState} from "react";
import Product from "@/components/Product/Product";
import Pagination from "@/components/Product/Pagination";
import Filter from "@/components/Product/Filter/Filter";
import request from "@/api";
import {useFilter} from "@/helpers/filter";

const Products = () => {
    const productsRef = useRef(null)

    const [products, setProducts] = useState([])
    const [lastAction, setLastAction] = useState("items")
    const [search, setSearch] = useState({})

    const filter = useFilter({limit: 50})

    const scrollToTop = () => {
        productsRef.current.scrollIntoView()
    };

    const fetchItems = async (ids) => {
        try {
            if (ids.length) {
                const response = await request({
                    "action": "get_items",
                    "params": {"ids": ids}
                });

                const items = response.data.result.filter(function (item, pos, ar) {
                    return ar.findIndex((item2) => item2.id === item.id) === pos;
                })

                if (items.length !== 0) {
                    setProducts(items);
                    return
                }
            }

            setProducts([]);
        } catch (error) {
        }
    };

    const getItemsIds = async () => {
        try {
            filter.setLoading(true)
            const response = await request({
                "action": "get_ids",
                "params": {
                    "offset": filter.offset,
                    "limit": filter.limit
                }
            })
            const ids = response.data.result
            await fetchItems(ids)
            filter.setSize(ids.length)
            setLastAction("items")
        } catch (error) {
        }
        filter.setLoading(false)
    };


    const getFilterIds = async (search) => {
        try {
            filter.setLoading(true)
            const response = await request({
                "action": "filter",
                "params": {
                    ...search,
                    "offset": filter.offset,
                    "limit": filter.limit
                }
            })
            const ids = response.data.result
            await fetchItems(ids)
            filter.setSize(ids.length)
            setLastAction("filter")
        } catch (error) {
        }
        filter.setLoading(false)
    };


    useEffect(() => {
        if (lastAction === "items"){
            getItemsIds()
        }
        if (lastAction) {
            scrollToTop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset]);

    useEffect(() => {
        if (lastAction === "filter"){
            getFilterIds(search)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset, search]);

    const onChangeFilter = (search) => {
        if (!filter.loading) {
            if (search !== null) {
                setLastAction("filter")
                filter.toBegin()
                setSearch(search)
            } else if (lastAction !== "items") {
                setLastAction("items")
                if (filter.offset === 0){
                    getItemsIds()
                }else{
                    filter.toBegin()
                }
            }
        }
    }

    return (
        <div ref={productsRef}>
            <div className={"border-b border-[#12123fe6]"}>
                <Filter onChange={onChangeFilter} loading={filter.loading}/>
            </div>
            <div className="flex flex-wrap gap-y-[20px] justify-between min-h-[50vw] py-5">
                {products.map((product, index) =>
                    <div
                        key={index}
                        className="lg:w-[48%] max-lg:w-full align-stretch"
                    >
                        <Product product={product}/>
                    </div>
                )}
            </div>
            <div className={"border-t border-[#12123fe6] pt-5"}>
                <Pagination pagination={filter.pagination} toPrevPage={filter.toPrevPage}
                            toNextPage={filter.toNextPage}/>
            </div>
        </div>
    )
};

export default Products;
