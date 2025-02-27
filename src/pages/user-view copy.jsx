import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import CustomersViewHeader from '@/components/customersView/CustomersViewHeader'
import CustomerContent from '@/components/customersView/CustomerContent'
import Loading from '@/components/shared/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDetails } from '@/redux/reducer/dashboardReducer'

const UserView = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const { userDetails } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(getUserDetails(id));
    }, [dispatch, id]);

    useEffect(() => {
        if(userDetails){
            setIsLoading(false);
        }
    }, [userDetails]);

    if(isLoading){
        return <Loading />
    }
    

    return (
        <>
            <PageHeader>
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <CustomerContent userDetails={userDetails}/>
                </div>
            </div>
        </>
    )
}

export default UserView