import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { paymentRecordChartOption } from '@/utils/chartsLogic/paymentRecordChartOption';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardHeader from '@/components/shared/CardHeader';
import CardLoader from '@/components/shared/CardLoader';

const userRecordChart = ({title,data}) => {
    let chartOptions = paymentRecordChartOption()
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();
    const series = [
        {
            name: "Users",
            type: "bar",
            data: data.userGraphData.map(item => item.count)
        },
    ];

    chartOptions.xaxis.categories = data.userGraphData.map(item => item._id)

    if (isRemoved) {
        return null;
    }
    
    return (
        <div className="col-xxl-6">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action p-0">
                    <ReactApexChart
                        options={chartOptions}
                        series={series}
                        height={260}
                    />
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default userRecordChart
