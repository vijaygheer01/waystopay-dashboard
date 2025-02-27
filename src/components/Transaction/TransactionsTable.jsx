import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiAlertOctagon, FiArchive, FiClock, FiEdit3, FiEye, FiMoreHorizontal, FiPrinter, FiTrash2 } from 'react-icons/fi'
import Dropdown from '@/components/shared/Dropdown';
import { paymentTableData } from '@/utils/fackData/paymentTableData';
import Table from '@/components/shared/table/Table';


const actions = [
  { label: "Edit", icon: <FiEdit3 /> },
  { label: "Print", icon: <FiPrinter /> },
  { label: "Remind", icon: <FiClock /> },
  { type: "divider" },
  { label: "Archive", icon: <FiArchive /> },
  { label: "Report Spam", icon: <FiAlertOctagon />, },
  { type: "divider" },
  { label: "Delete", icon: <FiTrash2 />, },
];


const TransactionTable = ({ transactions }) => {
  const columns = [
    {
      accessorKey: '_id',
      header: ({ table }) => {
        const checkboxRef = React.useRef(null);

        useEffect(() => {
          if (checkboxRef.current) {
            checkboxRef.current.indeterminate = table.getIsSomeRowsSelected();
          }
        }, [table.getIsSomeRowsSelected()]);

        return (
          <input
            type="checkbox"
            className="custom-table-checkbox"
            ref={checkboxRef}
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        );
      },
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="custom-table-checkbox"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      meta: {
        headerClassName: 'width-30',
      },
    },

    
    {
      accessorKey: 'Sender',
      header: () => 'Sender',
      cell: (info) => {
        const firstName = info.row.original.sender?.name;
        return (
          <Link to={`/user/${info.row.original._id}`} className="hstack gap-3">
            {

                <div className="text-white avatar-text user-avatar-text avatar-md">{firstName?.substring(0, 1)}</div>
            }
            <div>
              <span className="text-truncate-1-line">{firstName}</span>
              <small className="fs-12 fw-normal text-muted">From : {info.row.original.sender?.bankType}</small>
            </div>
          </Link>
        )
      }
    },
    {
      accessorKey: 'amount',
      header: () => 'Amount',
      cell: (info) => <span className='fw-bold'>  $ {info.getValue()}</span>,
      meta: {
        headerClassName: 'text-center'
      }
    },

    {
      accessorKey: 'Receiver',
      header: () => 'Receiver',
      cell: (info) => {
        const firstName = info.row.original.receiver?.name;
        return (
          <Link to={`/user/${info.row.original._id}`} className="hstack gap-3">
            <div className="text-white avatar-text user-avatar-text avatar-md">{firstName?.substring(0, 1)}</div>
            <div>
              <span className="text-truncate-1-line">{firstName}</span>
              <small className="fs-12 fw-normal text-muted">To : {info.row.original.receiver?.bankType}</small>
            </div>
          </Link>
        )
      }
    }, 
    {
      accessorKey: 'status',
      header: () => 'Status',
      cell: (info) => <a href='#' className='fw-bold badge bg-light text-dark text-capitalize '>{info.getValue()}</a>,
      meta: {
        headerClassName: 'text-center'
      }
    },
    {
      accessorKey: 'purpose',
      header: () => 'Purpose',
      cell: (info) => (
      <div className=''>
      <div className='fw-bold badge bg-light text-dark text-capitalize'>
        {info.row.original.metadata?.purpose || 'No Purpose'}
      </div>
      <br />
      <small className='text-capitalize'>
        Notes : {info.row.original.metadata?.notes || 'No Purpose'}
      </small>
      </div>
      ),
      meta: {
        headerClassName: 'text-center'
      }
    },
    {
      accessorKey: 'timestamp',
      header: () => 'Time Stamp',
      cell: (info) => <small className='text-dark text-capitalize'>
       Date : {new Date(info.getValue()).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        <br />
        Time : {new Date(info.getValue()).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}
      </small>,
      meta: {
        headerClassName: 'text-center'
      }
    },
   
  

    
  


  ]



  return (
    <>
      <Table data={transactions} columns={columns} total={transactions.length} />
    </>
  )
}

export default TransactionTable