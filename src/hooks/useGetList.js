import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getList } from '../store/list/actions'

export default function useGetList(count) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList({results: count}))
      }, [dispatch, count])
}