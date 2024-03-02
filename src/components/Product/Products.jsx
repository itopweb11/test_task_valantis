import React, {useEffect, useRef, useState} from "react";
import Product from "@/components/Product/Product";
import Pagination from "@/components/Product/Pagination";
import Filter from "@/components/Product/Filter/Filter";
import request from "@/api";
import {useFilter} from "@/helpers/filter";

const Products = () => {
    // Создаем ссылку на элемент DOM, который будет использоваться для прокрутки к началу страницы
    const productsRef = useRef(null)

    // Создаем стейт для хранения списка продуктов
    const [products, setProducts] = useState([])

    // Создаем стейт для хранения последнего выполненного действия (отображение списка продуктов или фильтрация)
    const [lastAction, setLastAction] = useState("items")

    // Создаем стейт для хранения параметров поиска
    const [search, setSearch] = useState({})

    // Создаем хук для фильтрации продуктов
    const filter = useFilter({limit: 50})

    // Функция для прокрутки к началу страницы
    const scrollToTop = () => {
        // Прокручиваем к элементу, на который ссылается productsRef
        productsRef.current.scrollIntoView()
    };

    // Функция для получения списка идентификаторов продуктов
    const fetchItems = async (ids) => {
        try {
            // Если список идентификаторов не пуст
            if (ids.length) {
                // Отправляем запрос для получения списка продуктов по их идентификаторам
                const response = await request({
                    "action": "get_items",
                    "params": {"ids": ids}
                });

                // Фильтруем полученный список продуктов, удаляя дубликаты
                const items = response.data.result.filter(function (item, pos, ar) {
                    return ar.findIndex((item2) => item2.id === item.id) === pos;
                })

                // Если список продуктов не пуст, обновляем стейт products
                if (items.length !== 0) {
                    setProducts(items);
                    return
                }
            }

            // Если список продуктов пуст, очищаем стейт products
            setProducts([]);
        } catch (error) {
            // Выводим в консоль ошибку
            console.log(error)
        }
    };

// Функция для получения списка идентификаторов продуктов по заданным параметрам фильтрации
    const getItemsIds = async () => {
        try {
            // Устанавливаем признак загрузки фильтра
            filter.setLoading(true)

            // Отправляем запрос для получения списка идентификаторов продуктов с учетом параметров фильтрации
            const response = await request({
                "action": "get_ids",
                "params": {
                    "offset": filter.offset,
                    "limit": filter.limit
                }
            })

            // Получаем список идентификаторов продуктов из ответа
            const ids = response.data.result

            // Получаем список продуктов по полученным идентификаторам
            await fetchItems(ids)

            // Устанавливаем размер списка продуктов
            filter.setSize(ids.length)

            // Устанавливаем последнее выполненное действие как "отображение списка продуктов"
            setLastAction("items")
        } catch (error) {
            // Выводим в консоль ошибку
            console.log(error)
        }

        // Сбрасываем признак загрузки фильтра
        filter.setLoading(false)
    };


// Функция для получения списка идентификаторов продуктов по заданным параметрам поиска
    const getFilterIds = async (search) => {
        try {
            // Устанавливаем признак загрузки фильтра
            filter.setLoading(true)

            // Отправляем запрос для получения списка идентификаторов продуктов с учетом параметров поиска
            const response = await request({
                "action": "filter",
                "params": {
                    ...search,
                    "offset": filter.offset,
                    "limit": filter.limit
                }
            })

            // Получаем список идентификаторов продуктов из ответа
            const ids = response.data.result

            // Получаем список продуктов по полученным идентификаторам
            await fetchItems(ids)

            // Устанавливаем размер списка продуктов
            filter.setSize(ids.length)

            // Устанавливаем последнее выполненное действие как "фильтрация"
            setLastAction("filter")
        } catch (error) {
            // Выводим в консоль ошибку
            console.log(error)
        }

        // Сбрасываем признак загрузки фильтра
        filter.setLoading(false)
    };

// Стейт для отслеживания первого рендеринга компонента
    const [firstRenderer, setFirstRenderer] = useState(true)

// Эффект для прокрутки к началу страницы после обновления списка продуктов или параметров поиска
    useEffect(() => {
        // Если это не первый рендеринг компонента
        if (!firstRenderer){
            // Прокручиваем к началу страницы
            scrollToTop()
        }

        // Устанавливаем признак первого рендеринга в false
        setFirstRenderer(false)

        // Зависимости эффекта: смещение фильтра и параметры поиска
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset, search]);

// Эффект для получения списка идентификаторов продуктов при изменении смещения фильтра
    useEffect(() => {
        // Если последнее выполненное действие - "отображение списка продуктов"
        if (lastAction === "items"){
            // Получаем список идентификаторов продуктов
            getItemsIds()
        }

        // Зависимости эффекта: смещение фильтра
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset]);

// Эффект для получения списка идентификаторов продуктов при изменении параметров поиска
    useEffect(() => {
        // Если последнее выполненное действие - "фильтрация"
        if (lastAction === "filter"){
            // Получаем список идентификаторов продуктов с учетом параметров поиска
            getFilterIds(search)
        }

        // Зависимости эффекта: смещение фильтра и параметры поиска
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.offset, search]);

// Обработчик изменения параметров фильтрации
    const onChangeFilter = (search) => {
        // Если фильтр не загружается
        if (!filter.loading) {
            // Если параметры поиска не пусты
            if (search !== null) {
                // Устанавливаем последнее выполненное действие как "фильтрация"
                setLastAction("filter")

                // Сбрасываем смещение фильтра
                filter.toBegin()

                // Обновляем параметры поиска
                setSearch(search)
            } else if (lastAction !== "items") {
                // Если параметры поиска пусты и последнее выполненное действие не "отображение списка продуктов"
                // Устанавливаем последнее выполненное действие как "отображение списка продуктов"
                setLastAction("items")

                // Если смещение фильтра равно 0
                if (filter.offset === 0){
                    // Получаем список идентификаторов продуктов
                    getItemsIds()
                }else{
                    // Сбрасываем смещение фильтра
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
