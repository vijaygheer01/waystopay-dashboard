import React from 'react'
import { FiCheck, FiCheckCircle, FiEye, FiMoreHorizontal, FiMoreVertical, FiX } from 'react-icons/fi'
import { profileActivityData } from '@/utils/fackData/profileActivityData'
import { ActivityListItem } from '../widgetsList/ActivityTwo';


const ActivityHistory = ({ history }) => {
    let billingHistory = history?.map((item)=>({
        id: item?.id,
        date: item?.timestamp,
        dateFormatted: new Date(item?.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        amount: item?.amount,
        status: item?.status.toUpperCase(),
        sender: item?.sender,
        receiver: item?.receiver,
        transferType: item?.transferType,
        statusColor: item?.status.includes('completed') ? 'success' : 'danger'
        
    }))
    billingHistory = billingHistory?.reverse()
    return (
        <div className="payment-history">
            <div className="mb-4 px-4 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0">Transactions History:</h5>
            </div>
            <div className="table-responsive">
                <table className="table mb-0">
                    <thead>
                        <tr className="border-top">
                            <th>ID</th>
                            <th>Sender</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Receiver</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billingHistory?.map((item, index) => (
                            <tr key={index}>
                                <td><a href="#">{index +1}</a></td>
                                <td>{item.sender.name}
                                    <br />
                                    <span className='text-muted badge bg-soft-primary'>{item.sender.bankType.toUpperCase()}</span>
                                </td>
                                <td className='text-capitalize'>  <span className='badge bg-soft-primary text-capitalize text-dark'>{item.transferType}</span></td>
                                <td>$ {item.amount}</td>
                                <td>{item.receiver.name}
                                    <br />
                                    <span className='text-muted badge bg-soft-primary'>{item.receiver.bankType.toUpperCase()}</span>
                                    </td>
                                <td><span className={`badge bg-soft-${item.statusColor} text-${item.statusColor}`}>{item.status}</span></td>
                           
                                <td>{item.dateFormatted}</td>
                              
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};



export default ActivityHistory





