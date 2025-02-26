import React, { useEffect } from 'react'

import Footer from '@/components/shared/Footer'
import UserTable from '@/components/users/UserTable'
import UserHeader from '@/components/users/UserHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'

import { useDispatch, useSelector } from 'react-redux';
import { userIndex } from '@/redux/reducer/dashboardReducer';

const UserList = () => {

    const dispatch = useDispatch();
    const { users, isLoading } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(userIndex());
    }, [dispatch]);




    return (
        <>
            <PageHeader>
                <UserHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <UserTable users={users} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UserList