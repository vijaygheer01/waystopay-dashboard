import React from 'react'
import { FiBarChart, FiFilter, FiPaperclip, FiPlus } from 'react-icons/fi'
import Dropdown from '@/components/shared/Dropdown'
import { fileType, filterAction } from '../proposal/ProposalHeadr'
import { Link } from 'react-router-dom'
import PaymentStatistics from '../widgetsStatistics/PaymentStatistics';

const PaymentHeader = () => {
    return (
        <>
            <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                <a href="#" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <FiBarChart size={16} />
                </a>
            </div>
            <div id="collapseOne" className="accordion-collapse collapse page-header-collapse payment-header-accordion">
                <div className="accordion-body pb-2">
                    <div className="row">
                        <PaymentStatistics />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentHeader