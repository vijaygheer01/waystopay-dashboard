import React, { useEffect, useState } from 'react'

const TablePagination = ({table, total}) => {
    const [pageCount, setPageCount] = useState(0)
    useEffect(() => {
        setPageCount(table.getPageCount())
    }, [table])
    return (
        <div className="row gy-2">
            <div className="col-sm-12 col-md-5 p-0">
                <div className="dataTables_info text-lg-start text-center" id="proposalList_info" role="status" aria-live="polite">Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + table.getState().pagination.pageSize} of {total} entries</div>
            </div>
            <div className="col-sm-12 col-md-7 p-0">
                <div className="dataTables_paginate paging_simple_numbers" id="proposalList_paginate">
                    <ul className="pagination mb-0 justify-content-md-end justify-content-center gap-1">
                        <li className={`paginate_button page-item previous ${!table.getCanPreviousPage() ? "disabled" : ""} `}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <button type="button" onClick={() => table.previousPage()}  className="page-link">Previous</button>
                        </li>

                        {
                            Array.from({length: pageCount}).map((_, index) => (
                                <li key={index} className={`paginate_button page-item ${index === table.getState().pagination.pageIndex ? "active" : ""}`}>
                                    <button  type="button" onClick={() => table.setPageIndex(index)} className="page-link ">{index + 1}</button>
                                </li>
                            ))
                        }
                        <li className={`paginate_button page-item next ${!table.getCanNextPage() ? "disabled" : ""}`}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <button type="button" onClick={() => table.nextPage()}  className="page-link">Next</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TablePagination