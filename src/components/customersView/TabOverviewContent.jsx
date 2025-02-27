import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { projectsData } from '@/utils/fackData/projectsData'
import ImageGroup from '@/components/shared/ImageGroup'
import HorizontalProgress from '@/components/shared/HorizontalProgress';
import { useSelector } from 'react-redux';


const TabOverviewContent = () => {
    const { userDetails } = useSelector((state) => state.dashboard);

    const informationData = [
        { label: 'Name', value: userDetails?.user?.firstName},
        { label: 'Surname', value: userDetails?.user?.lastName },
        { label: 'Type', value: userDetails?.user?.type },
        { label: 'Date of Birth', value: new Date(userDetails?.user?.dateOfBirth).toLocaleDateString() },
        { label: 'Email Address', value: userDetails?.user?.email },
        { label: 'Location', value: userDetails?.user?.address1 },
        { label: 'Joining Date', value: userDetails?.user?.createdAt },
        { label: 'Country', value: userDetails?.user?.country || 'USA' },
        { label: 'City', value: userDetails?.user?.city || 'New York' },
        { label: 'State', value: userDetails?.user?.state || 'New York' },
        { label: 'Postal Code', value: userDetails?.user?.postal_code || '10001' },
    ];


    return (
        <div
            className="tab-pane fade show active p-4"
            id="overviewTab"
            role="tabpanel"
        >
            <div className="profile-details mb-5">
                
                {informationData.map((item, index) => (
                    <div key={index}  className={`row g-0 ${index === informationData.length - 1 ? 'mb-0' : 'mb-4'}`}>
                        <div className="col-sm-6 text-muted">{item.label}:</div>
                        <div className="col-sm-6 fw-semibold">{item.value}</div>
                    </div>
                ))}
            </div>
   
        </div>

    )
}

export default TabOverviewContent