import React from 'react'
import { useSelector } from 'react-redux'
import { getItems } from '../../store/list/selectors';
import DataTable from '../common/table';
import styles from './items.module.scss';

export default function Items() {
    const list = useSelector(getItems)

    return (
        <div className={styles.container} >
            {!!list.length && <DataTable series={list} />}
        </div>
    )
}
