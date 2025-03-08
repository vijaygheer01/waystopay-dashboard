import React, { useEffect, useState } from 'react'

import Footer from '@/components/shared/Footer'
import UserTable from '@/components/users/UserTable'
import UserHeader from '@/components/users/UserHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'

import { useDispatch, useSelector } from 'react-redux';
import { userIndex } from '@/redux/reducer/dashboardReducer';
import Loading from '@/components/shared/Loading';

const UserList = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const { users } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(userIndex());
    }, [dispatch]);

    useEffect(() => {
        if(users){
            setIsLoading(false);
        }
    }, [users]);
    console.log('users', users);

    if(isLoading){
        return <Loading />
    }




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