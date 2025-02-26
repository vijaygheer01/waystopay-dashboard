import React from 'react'
import { Link } from 'react-router-dom'
import { FiMoreVertical } from 'react-icons/fi'
import { crmStatisticsData } from '@/utils/fackData/crmStatisticsData'
import getIcon from '@/utils/getIcon'


const SiteOverviewStatistics = ({data}) => {

    const crmStatisticsData = [
        {
            id: 1,
            title: "Total Users",
            total_number: data.totalUsers,
            icon:"feather-users"
        },
        {
            id: 2,
            title: "Completed Transactions",
            total_number:  data.totalTransactions,
            icon:"feather-check-circle"
        },
        {
            id: 3,
            title: "Total Amount",
            total_number: '$ ' + data.totalAmount, 
            icon:"feather-dollar-sign"
        },
        {   
            id: 4,
            title: "Funding Sources",
            total_number: data.totalFundingSources,
            icon:"fa-cc-mastercard"
        },
        
    ];




    return (
        <>
            {
                crmStatisticsData.map(({ id, completed_number, progress, progress_info, title, total_number, icon }) => (
                    <div key={id} className="col-xxl-3 col-md-6">
                        <div className="card stretch stretch-full short-info-card">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex gap-4 align-items-center">
                                        <div className="avatar-text avatar-lg bg-gray-200 icon">
                                            {React.cloneElement(getIcon(icon), { size: "16" })}
                                        </div>
                                        <div>
                                            <div className="fs-4 fw-bold text-dark">
                                                <span className="counter">{total_number}</span>
                                            </div>
                                            <h3 className="fs-13 fw-semibold">{title}</h3>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SiteOverviewStatistics

