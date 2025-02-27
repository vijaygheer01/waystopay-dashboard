import React, { useEffect } from 'react'
import CustomerSocalMedia from './CustomerSocalMedia'
import TabOverviewContent from './TabOverviewContent'
import TabBillingContent from './TabBillingContent'
import TabActivityContent from './TabActivityContent'
import TabNotificationsContent from './TabNotificationsContent'
import TabConnections from './TabConnections'
import TabSecurity from './TabSecurity'
import Profile from '../widgetsList/Profile'
import CustomerSocalFlower from './CustomerSocalFlower'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '@/redux/reducer/dashboardReducer';

const CustomerContent = ({userDetails}) => {

  


    return (
        <>
            <div className="col-xxl-4 col-xl-6">
                <Profile user={userDetails.user} walletBalance={userDetails?.balance} />
            </div>
            <div className="col-xxl-8 col-xl-6">
                <div className="card border-top-0">
                    <div className="card-header p-0">
                        <ul className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item flex-fill border-top" role="presentation">
                                <a href="#" className="nav-link active" data-bs-toggle="tab" data-bs-target="#overviewTab" role="tab">User Details</a>
                            </li>
                            <li className="nav-item flex-fill border-top" role="presentation">
                                <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#billingTab" role="tab">Funding Sources

                                    {userDetails?.fundingSources?.length > 0 ? <span className='badge bg-primary ms-2'>{userDetails?.fundingSources?.length}</span> : <span className='badge bg-primary ms-2'>0</span>}
                                </a>
                            </li>
                            <li className="nav-item flex-fill border-top" role="presentation">
                                <a href="#" className="nav-link" data-bs-toggle="tab" data-bs-target="#activityTab" role="tab">Transactions</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="tab-content">
                        <TabOverviewContent />
                        <div className="tab-pane fade" id="billingTab" role="tabpanel">
                            <TabBillingContent transactions={userDetails?.transaction} defaultFundingSource={userDetails?.user?.defaultBankAccountId} billingHistoryshow={true} fundingSources={userDetails?.fundingSources} />
                        </div>
                        <TabActivityContent history={userDetails?.transaction} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerContent