import React, { useEffect, useState } from 'react'

import Footer from '@/components/shared/Footer'
import TransactionTable from '@/components/Transaction/TransactionsTable'
import TransactionHeader from '@/components/Transaction/TransactionsHeader'
import PageHeader from '@/components/shared/pageHeader/PageHeader'

import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '@/redux/reducer/dashboardReducer';
import Loading from '@/components/shared/Loading';

const Transactions = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const { transactions } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(getTransactions());
    }, [dispatch]);

    useEffect(() => {
        if(transactions){
            setIsLoading(false);
        }
    }, [transactions]);
    console.log('transactions', transactions);

    if(isLoading){
        return <Loading />
    }




    return (
        <>
            <PageHeader>
                <TransactionHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <TransactionTable transactions={transactions?.transactions} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Transactions