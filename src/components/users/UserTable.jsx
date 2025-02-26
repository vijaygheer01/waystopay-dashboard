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


const UserTable = ({ users }) => {
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
      accessorKey: 'firstName',
      header: () => 'User',
      cell: (info) => {
        const firstName = info.row.original.firstName;
        const lastName = info.row.original.lastName;
        const email = info.row.original.email;
        return (
          <Link to={`/user/${info.row.original._id}`} className="hstack gap-3">
            {

                <div className="text-white avatar-text user-avatar-text avatar-md">{firstName.substring(0, 1)}</div>
            }
            <div>
              <span className="text-truncate-1-line">{firstName} {lastName}</span>
              <small className="fs-12 fw-normal text-muted">{email}</small>
            </div>
          </Link>
        )
      }
    },
    {
      accessorKey: 'address',
      header: () => 'Address',
      cell: (info) => {
        const address = info.row.original.address1;
        const city = info.row.original.city;
        const state = info.row.original.state;
        const postalCode = info.row.original.postalCode;
        return (
          <span className="hstack gap-3">
            <div>
              <span className="text-truncate-1-line">{address}</span>
              <small className="fs-12 fw-normal text-muted">{city}, {state} {postalCode}</small>
            </div>
          </span>
        )
      }
    },
    {
      accessorKey: 'dateOfBirth',
      header: () => 'Date of Birth',
      cell: (info) => <span className="fs-12 fw-normal text-muted">{ 
      new Date(info.getValue()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      }</span>
    },


    
    {
      accessorKey: 'type',
      header: () => 'Account Type',
      cell: (info) => <a href='#' className='fw-bold badge bg-light text-dark text-capitalize'>{info.getValue()}</a>,
      meta: {
        headerClassName: 'text-end'
      }
    },
    {
      accessorKey: 'ssn',
      header: () => 'SSN',
      cell: (info) => <span className="fs-12 fw-normal text-muted text-capitalize badge bg-light text-dark">{info.getValue()}</span>
    },  
    {
      accessorKey: 'createdAt',
      header: () => 'Created At',
      cell: (info) => <span className="fs-12 fw-normal text-muted">{ 
      new Date(info.getValue()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      }</span>
    },
    {
      accessorKey: 'actions',
      header: () => "Actions",
      cell: info => (
        <div className="hstack gap-2 justify-content-end">
          <Link to={`/user/${info.row.original._id}`} className="avatar-text avatar-md">
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

export default UserTable