import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import styles from './itemInner.module.scss';
import ProfileCard from '../common/profileCard';

export default function ItemInner() {

    const series = useSelector(store => store.items.list)
    const location = useLocation()
    const [userInfo, setUserInfo] = useState(null)

    const onMount = () => {
        const id = location.pathname.split('/').pop()
        setUserInfo(series.find(item => item.login.username === id))
    }

    useEffect(onMount, [])

    return (
        <div className={styles.container} >
            {userInfo ?
                <ProfileCard data={userInfo} />
                :
                <>
                    <h1>
                        <strong> {location.pathname.split('/').pop()} user not found</strong>
                    </h1>
                    <h6>
                        If you come here by URL or refreshed the page the user can not be found as if the list updated already.
                    </h6>
                </>
            }
        </div>
    )
}
