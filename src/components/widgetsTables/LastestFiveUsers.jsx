import React from 'react'
import { Link } from 'react-router-dom'
import { FiMoreVertical } from 'react-icons/fi'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import { userList } from '@/utils/fackData/userList'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'

const LatestFiveUsers = ({title,data}) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    const users = data?.lastFiveUsers || []


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
                                    <th scope="row">Users</th>
                                    <th>Type</th>
                                    <th>SSN</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Join Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(({ firstName, lastName, ssn, createdAt, id, email, imageUrl,type, dateOfBirth, address1,city,state,postalCode }) => (
                                        <tr key={id} className='chat-single-item'>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">

                                                            <div className="text-white avatar-text user-avatar-text">{firstName.substring(0, 1)}</div>

                                                    <a href="#">
                                                        <span className="d-block">{firstName} {lastName}</span>
                                                        <span className="fs-12 d-block fw-normal text-muted">{email}</span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-gray-200 text-dark fw-bold text-uppercase">{type}</span>
                                            </td>
                                            <td className='fw-bold'>{ssn}</td>
                                            <td>{new Date(dateOfBirth).toLocaleDateString()}</td>
                                            <td> {address1},
                                                <br />
                                                {city}, {state}, {postalCode}
                                            </td>
                                            <td>{new Date(createdAt).toLocaleDateString()}</td>
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

export default LatestFiveUsers
