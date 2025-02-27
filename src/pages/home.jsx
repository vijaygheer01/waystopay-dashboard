import React, { useEffect, useState } from 'react'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import Schedule from '@/components/widgetsList/Schedule'
import Project from '@/components/widgetsList/Project'
import TeamProgress from '@/components/widgetsList/Progress'
import UserRecordChart from '@/components/widgetsCharts/UserRecordChart'
import TransactionRecordChart from '@/components/widgetsCharts/TransactionRecordChart'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import { useDispatch, useSelector } from 'react-redux';
import { dashboardIndex } from '../redux/reducer/dashboardReducer';
import LatestFiveUsers from '@/components/widgetsTables/LastestFiveUsers'
import LatestFiveTrans from '@/components/widgetsTables/LastestFiveTrans'
import Loading from '@/components/shared/Loading'
const Home = () => {
    const { dashboard, error } = useSelector((state) => state.dashboard);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dashboardIndex())

    }, [dispatch]);

    useEffect(() => {
        if(dashboard){
            setIsLoading(false);
        }
    }, [dashboard]);

    if(isLoading){ return <Loading /> }





    return (
        <>
            <PageHeader >
                {/* <PageHeaderDate /> */}
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewStatistics data={dashboard} />
                    <UserRecordChart data={dashboard} title={"Users"} />
                    <TransactionRecordChart data={dashboard} title={"Transactions"} />
                    <LatestFiveTrans data={dashboard} title={"Last 5 Transactions"} />
                    <LatestFiveUsers data={dashboard} title={"Last 5 Users"} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home