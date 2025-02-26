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


const PaymentTable = ({ users }) => {
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
      accessorKey: '_id',
      header: () => 'User ID',
      cell: (info) => <a href='#' className='fw-bold'>{info.getValue()}</a>
    },
    {
      accessorKey: 'firstName',
      header: () => 'Client',
      cell: (info) => {
        const roles = info.getValue();
        return (
          <a href="#" className="hstack gap-3">
            {
              roles?.img ?
                <div className="avatar-image avatar-md">
                  <img src={roles?.img} alt="" className="img-fluid" />
                </div>
                :
                <div className="text-white avatar-text user-avatar-text avatar-md">{roles.substring(0, 1)}</div>
            }
            <div>
              <span className="text-truncate-1-line">{roles}</span>
              <small className="fs-12 fw-normal text-muted">{roles}</small>
            </div>
          </a>
        )
      }
    },

    {
      accessorKey: 'createdAt',
      header: () => 'Date',
    },
    {
      accessorKey: 'transaction',
      header: () => 'Transaction',
      cell: (info) => <a href=''>{info.getValue()}</a>
    },
    {
      accessorKey: 'type',
      header: () => 'type'
    },
    {
      accessorKey: 'actions',
      header: () => "Actions",
      cell: info => (
        <div className="hstack gap-2 justify-content-end">
          <Link to="/payment/view" className="avatar-text avatar-md">
            <FiEye />
          </Link>
          <Dropdown dropdownItems={actions} triggerIcon={<FiMoreHorizontal />} triggerClass='avatar-md' triggerPosition={"0,21"} />
        </div>
      ),
      meta: {
        headerClassName: 'text-end'
      }
    },
  ]



  return (
    <>
      <Table data={users.users} columns={columns} total={users.users.length} />
    </>
  )
}

export default PaymentTable