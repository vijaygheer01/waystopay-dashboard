import React from 'react'
import { Link } from 'react-router-dom'
import { FiMoreVertical } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import { userList } from '@/utils/fackData/userList'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'

const LatestFiveTrans = ({title,data}) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    const transactions = data.lastFiveTransactions


    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr className="border-b">
                                    <th scope="row">Sender</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Receiver</th>
                                    <th>Status</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions.map(({ sender, receiver, amount, transferType, status, timestamp,metadata, transactionId }) => (
                                        <tr key={transactionId} className='chat-single-item'>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="text-white avatar-text user-avatar-text">{sender.name.substring(0, 1)}</div>
                                                    <a href="#">
                                                        <span className="d-block">{sender.name}</span>
                                                        <span className="fs-12 d-block fw-normal text-muted"> From:  {sender.bankName}</span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-gray-200 text-dark">{amount}</span>
                                            </td>
                                            <td>
                                                <span className="badge bg-gray-200 text-dark">{transferType}</span>
                                            </td>
                                                <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="text-white avatar-text user-avatar-text">{receiver.name.substring(0, 1)}</div>
                                                    <a href="#">
                                                        <span className="d-block">{receiver.name}</span>
                                                        <span className="fs-12 d-block fw-normal text-muted"> To:  {receiver.bankName}</span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-gray-200 text-dark">{status}</span>
                                            </td>
                                            <td>
                                                {metadata.purpose}
                                            </td>
                                            <td>
                                                {new Date(timestamp).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <CardLoader refreshKey={refreshKey} /> */}
            </div>
        </div>
    )
}

export default LatestFiveTrans
