import React from 'react'
import { FiAlertOctagon, FiCheck, FiEye, FiMoreVertical, FiSend } from 'react-icons/fi';

const TabBillingContent = ({billingHistoryshow,fundingSources,defaultFundingSource,transactions}) => {
   
    console.log('transactions',transactions);
    return (
        <>
         
            <hr className="mt-2" />
            <div className="payment-methord px-4">
                <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h5 className="fw-bold mb-0">Payment Methods:</h5>
                </div>
                <div className="row">
                    {fundingSources?.map((item,index)=>(    
                    <div className="col-xxl-6 col-xl-12 col-lg-6">
                        <PaymentMethod
                            bankAccountType={item?.bankAccountType}
                            name={item?.name}
                            type={item?.type}
                            status={item?.status}
                            isActive={item?.id === defaultFundingSource}
                        />
                    </div>
                    ))}

                </div>
            </div>

            <hr className="mt-2" />
            {billingHistoryshow && <BillingHistory history={transactions} />}
        </>

    )
}

export default TabBillingContent


const SubscriptionPlan = ({ planName, description, price, billingCycle, nextPayment, onCancel, onUpdate }) => {
    return (
        <div className="p-4 mb-4 d-xxl-flex d-xl-block d-md-flex align-items-center justify-content-between gap-4 border border-dashed border-gray-5 rounded-1">
            <div>
                <div className="fs-14 fw-bold text-dark mb-1">
                    Your current plan is <a href="#" className="badge bg-primary text-white ms-2">{planName}</a>
                </div>
                <div className="fs-12 text-muted">{description}</div>
            </div>
            <div className="my-3 my-xxl-0 my-md-3 my-md-0">
                <div className="fs-20 text-dark">
                    <span className="fw-bold">{price}</span> / <em className="fs-11 fw-medium">{billingCycle}</em>
                </div>
                <div className="fs-12 text-muted mt-1">
                    Billed Monthly / Next payment on {nextPayment} for <strong className="text-dark">$62.48</strong>
                </div>
            </div>
            <div className="hstack gap-3">
                <a href="#" className="text-danger" onClick={onCancel}>Cancel Plan</a>
                <a href="#" className="btn btn-light-brand" onClick={onUpdate}>Update Plan</a>
            </div>
        </div>
    );
};


const SubscriptionCard = ({ planName, description, details, price, billingCycle, isActive }) => {
    return (
        <div className="col-xxl-4 col-xl-12 col-lg-4">
            <a href="#" className={`p-4 mb-4 d-block ${isActive ? 'bg-soft-200' : 'bg-soft-100'} border border-dashed border-gray-5 rounded-1 position-relative`}>
                <h6 className="fs-13 fw-bold">{planName}</h6>
                <p className="fs-12 fw-normal text-muted">{description}</p>
                <p className="fs-12 fw-normal text-muted text-truncate-2-line">{details}</p>
                <div className="mt-4">
                    <span className="fs-16 fw-bold text-dark">{price}</span> / <em className="fs-11 fw-medium">{billingCycle}</em>
                </div>
                {isActive && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                        <FiCheck size={20} className='bg-primary text-white p-1 rounded-circle' />
                    </div>
                )}
            </a>
        </div>
    );
};


const PaymentMethod = ({ isActive, cardType, cardHolder, cardNumber, expiryDate, cardImg, bankAccountType, name, type, status }) => {
    return (
        <div className="px-4 py-2 mb-4 d-sm-flex justify-content-between border border-dashed border-gray-3 rounded-1 position-relative">
            <div className="d-sm-flex align-items-center">
                <div className="wd-50">
                    <img src={`/images/payment/mastercard.svg`} className="img-fluid" alt="" />
                </div>
                <div className="ms-0 ms-sm-3">
                    <div className="text-dark fw-bold mb-2">{name}</div>
                    <div className="mb-0 text-truncate-1-line text-capitalize">{type}</div>
                    <small className="fs-10 fw-medium text-uppercase text-muted text-truncate-1-line ">{status}</small>
                </div>
            </div>
            <div className="hstack gap-3 mt-3 mt-sm-0">
            </div>
            {isActive && (
                <div className="position-absolute top-50 start-0 translate-middle">
                    <FiCheck size={20} className='bg-primary text-white p-1 rounded-circle' />
                </div>
            )}
        </div>
    );
};


const BillingHistory = ({ history }) => {
    const billingHistory = history?.map((item)=>({
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

