import React, {useEffect, useState} from "react";
import "@/components/Product/Filter/filter.scss"
import request from "@/api";
import {useFilter} from "@/helpers/filter";
import loadingImg from "@/img/loading.svg";

const Filter = ({onChange, loading}) => {
    const defaultSearch = {
        price: 0,
        product: "",
        brand: "",
    }
    const [search, setSearch] = useState(defaultSearch)

    const [isActive, setIsActive] = useState(false)
    const [brands, setBrands] = useState([])
    const [isValid, setIsValid] = useState(false)
    const filter = useFilter({limit: 50})


    const setPrice = (e) => {
        const el = e.target
        let price

        if (el.value !== "") {
            if (parseInt(el.value) < parseInt(el.min)) {
                price = String(el.min)
            } else {
                price = String(parseInt(el.value))
            }
        } else {
            price = 0
        }

        setSearch({...defaultSearch, price: price})
    }

    const setName = (e) => {
        const el = e.target
        setSearch({...defaultSearch, product: el.value})
    }

    const setBrand = (e) => {
        const el = e.target
        setSearch({...defaultSearch, brand: el.value})
    }

    const getBrands = async () => {
        try {
            const response = await request({
                "action": "get_fields",
                "params": {
                    "field": "brand",
                    "offset": filter.offset,
                    "limit": filter.limit,
                }
            })
            const items = response.data.result.filter(b => b !== null)
            setBrands(items)
        } catch (error) {

        }
    };

    useEffect(() => {
        getBrands()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset]);

    const checkValid = () =>{
        let isValid = false

        if (!!search.price){
            isValid=true
        }

        if (!!search.product){
            isValid=true
        }

        if (!!search.brand){
            isValid=true
        }

        setIsValid(isValid)
    }

    useEffect(checkValid, [search]);

    const clickHandler = () =>{
        if (isValid){
            const t = {}

            if (!!search.price){
                t.price = parseInt(search.price)
            }

            if (!!search.product){
                t.product = search.product
            }

            if (!!search.brand){
                t.brand = search.brand
            }

            onChange(t)
        }else{
            onChange(null)
        }
    }

    const FilterIcon = () => {
        return (
            <svg
                onClick={() => setIsActive(!isActive)}
                className={"filter-icon"}
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_2">
                    <g id="invisible_box">
                        <rect width="48" height="48" fill="none"/>
                    </g>
                    <g id="icons_Q2">
                        <path
                            d="M41.8,8H21.7A6.2,6.2,0,0,0,16,4a6,6,0,0,0-5.6,4H6.2A2.1,2.1,0,0,0,4,10a2.1,2.1,0,0,0,2.2,2h4.2A6,6,0,0,0,16,16a6.2,6.2,0,0,0,5.7-4H41.8A2.1,2.1,0,0,0,44,10,2.1,2.1,0,0,0,41.8,8Z"/>
                        <path
                            d="M41.8,22H37.7A6.2,6.2,0,0,0,32,18a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4H26.4A6,6,0,0,0,32,30a6.2,6.2,0,0,0,5.7-4h4.1a2,2,0,1,0,0-4Z"/>
                        <path
                            d="M41.8,36H24.7A6.2,6.2,0,0,0,19,32a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4h7.2A6,6,0,0,0,19,44a6.2,6.2,0,0,0,5.7-4H41.8a2,2,0,1,0,0-4Z"/>
                    </g>
                </g>
            </svg>
        )
    }

    return (
        <div
            className={(isActive && "active") + " filter pb-5 pt-5"}>
            <div className={"flex justify-between"}>
                <div className="flex-1 flex justify-center items-center pl-[40px]">
                    {
                        loading && <img src={loadingImg} alt=""/>
                    }

                </div>
                <div className="flex justify-center items-center">
                    <FilterIcon/>
                </div>
            </div>
            <div
                className={"filter-items items-start flex justify-between gap-10 max-xl:gap-5 max-xl:gap-y-5 max-xl:flex-col max-xl:items-start"}>
                <div className="flex justify-between gap-x-10 pt-5 max-xl:flex-col max-xl:gap-y-5 max-xl:w-full">
                    <div className="flex items-end gap-x-[5px] max-xl:w-full">
                        <p className="text-[20px] max-xl:w-[120px]">Цена: </p>
                        <input
                            min={0}
                            onChange={setPrice}
                            value={search.price ? search.price : ""}
                            className="min-[1430px]:w-[250px] max-xl:flex-1  border-0 bg-gray-300 border-b-[2px] border-b-sky-800"
                            type="number"/>
                    </div>
                    <div className="flex items-end gap-x-[5px] max-xl:w-full">
                        <p className="text-[20px] max-xl:w-[120px]">Название: </p>
                        <input
                            onChange={setName}
                            value={search.product}
                            className="min-[1430px]:w-[250px] max-xl:flex-1 border-0 bg-gray-300 border-b-[2px] border-b-sky-800"
                            type="text"/>
                    </div>
                    <div className="flex items-end gap-x-[5px] max-xl:w-full">
                        <p className="text-[20px] max-xl:w-[120px]">Бренд: </p>
                        <select
                            onChange={setBrand}
                            value={search.brand}
                            className="min-[1430px]:w-[250px] max-xl:flex-1 border-0 bg-gray-300 border-b-[2px] border-b-sky-800 focus:shadow-none cursor-pointer">
                            <option></option>
                            {
                                brands.map((b, i) => (
                                    <option key={i} value={b}>{b}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className={"pt-5 max-xl:w-full"}>
                    <button
                        onClick={clickHandler}
                        className="border-0 px-[35px] tracking-[1px] pt-[9.5px] border-[2px] pb-[15.5px] flex items-center leading-none rounded-[10px] text-[20px] font-semibold hover:bg-[#12123fe6] border-[#12123fe6] text-[#12123fe6] hover:text-white">поиск
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Filter;
