import {useEffect, useState} from "react";

export const useFilter = (props) => {
    const [limit] = useState(props.limit)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState({
        toPrev: false,
        toNext: false
    })

    const setSize = (size) => {
        setPagination({toPrev: offset !== 0, toNext: size >= limit})
    }

    const toNextPage = () => {
        if (!loading && pagination.toNext) {
            setOffset(offset + limit)
        }
    }

    const toBegin = () => {
        if (!loading) {
            setOffset(0)
        }
    }

    const toPrevPage = () => {
        if (!loading && pagination.toPrev) {
            const ofs = offset - limit
            setOffset(ofs < 0 ? 0 : ofs)
        }
    }

    useEffect(() => {
        setPagination({...pagination, toPrev: offset !== 0})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])


    return {
        limit: limit,
        offset: offset,
        pagination: pagination,
        loading: loading,
        setLoading: setLoading,
        setSize: setSize,
        toNextPage: toNextPage,
        toPrevPage: toPrevPage,
        toBegin: toBegin,
    }
}
