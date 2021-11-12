import React from 'react';

export default function useTableDateFormatter(series) {
    const columnDefs = [
        { label: 'name', align: 'left' },
        { label: 'avatar', align: 'center', cellRenderer: (url) => <img src={url} alt='' /> },
        { label: 'gender', align: 'right' },
        { label: 'email', align: 'right' },
        { label: 'age', align: 'right' }
    ]
    const rows = series.reduce((rows, item) => {
        const rowItem = {
            id: item.login.username,
            name: `${item.name.first} ${item.name.last}`,
            avatar: item.picture.thumbnail,
            gender: item.gender,
            email: item.email,
            age: item.dob.age,
        }
        rows.push(rowItem)
        return rows
    }, [])

    return { rows, columnDefs }
}