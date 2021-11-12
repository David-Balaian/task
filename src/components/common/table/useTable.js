import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import useGetList from '../../../hooks/useGetList';

export default function useTable() {
    const initialRows = 10
    const history = useHistory();
    const [rowsCount, setRowsCount] = useState(initialRows)
    const [rowsCountAsync, setRowsCountAsync] = useState(initialRows)
    const timeoutId = useRef(null)

    const handleRowsChange = (e) => {
        setRowsCount(+e.target.value ? Math.min(5000, +e.target.value) : 1)
        if (timeoutId.current) clearTimeout(timeoutId.current)
        timeoutId.current = setTimeout(() => {
            +e.target.value ? setRowsCountAsync(Math.min(5000, +e.target.value)) : setRowsCountAsync(1)
        }, 600)

    }

    const handleMoreClick = (id) => history.push(`/items/${id}`)

    useGetList(rowsCountAsync)

    return { rowsCount, handleRowsChange, setRowsCount, rowsCountAsync, handleMoreClick }
}