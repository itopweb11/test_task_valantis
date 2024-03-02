import {useEffect, useState} from "react";

export const useFilter = (props) => {
    // Количество элементов на странице
    const [limit] = useState(props.limit);

    //количество всех елементов которые были отображены на экране
    const [offset, setOffset] = useState(0);

    // загрузка
    const [loading, setLoading] = useState(false);

    // Состояние пагинации
    const [pagination, setPagination] = useState({
        toPrev: false,
        toNext: false,
    });

    // Устанавливает размер списка элементов
    const setSize = (size) => {
        setPagination({
            // Можно перейти на предыдущую страницу, если текущий offset не равен 0
            toPrev: offset !== 0,
            // Можно перейти на следующую страницу, если размер списка больше или равен лимиту
            toNext: size >= limit,
        });
    };

    // Переход на следующую страницу
    const toNextPage = () => {
        // Переход на следующую страницу если нет загрузки
        if (!loading && pagination.toNext) {
            setOffset(offset + limit);
        }
    };

    // Переход в начало списка
    const toBegin = () => {
        // Переход если нет загрузки
        if (!loading) {
            setOffset(0);
        }
    };

    // Переход на предыдущую страницу
    const toPrevPage = () => {
        //Переход на предыдущую страницу если нет загрузки
        if (!loading && pagination.toPrev) {
            const ofs = offset - limit;
            setOffset(ofs < 0 ? 0 : ofs);
        }
    };

    // useEffect для обновления состояния пагинации при изменении offset
    useEffect(() => {
        setPagination({ ...pagination, toPrev: offset !== 0 });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset]);

    // Возвращаемый объект с данными и методами для управления фильтрацией и пагинацией
    return {
        limit,
        offset,
        pagination,
        loading,
        setLoading,
        setSize,
        toNextPage,
        toPrevPage,
        toBegin,
    };
};
