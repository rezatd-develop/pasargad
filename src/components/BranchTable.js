'use client';

import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@mui/material';

import { MdPendingActions } from "react-icons/md";

export default function BranchTable() {

  const [open, setOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleOpen = (row) => {
    setSelectedBranch(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBranch(null);
  };

  const columns = [
    {
      field: 'actions',
      headerName: 'عملیات',
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          className='w-100 justify-content-center'
          onClick={() => handleOpen(params.row)}
        >
          <MdPendingActions />
        </IconButton>
      )
    },

    {
      field: 'BranchId',
      headerName: 'شناسه شعبه',
      width: 120
    },

    {
      field: 'BranchName',
      headerName: 'نام شعبه',
      flex: 1
    },

    {
      field: 'DistrictId',
      headerName: 'کد منطقه',
      width: 120
    },

    {
      field: 'Address',
      headerName: 'آدرس',
      flex: 1
    },
  ];

  const rows = [
    {
      id: 1,
      BranchId: 101,
      BranchName: 'شعبه مرکزی',
      DistrictId: 1,
      Address: 'تهران، خیابان ولیعصر'
    },
    {
      id: 2,
      BranchId: 102,
      BranchName: 'شعبه شمال',
      DistrictId: 2,
      Address: 'تهران، تجریش'
    },
  ];

  return (
    <>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          disableRowSelectionOnClick
          sx={{
            fontFamily: 'yekanBold',
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 2,
            direction: 'rtl',

            '& .MuiDataGrid-columnHeaders': {
              fontFamily: 'yekanBold',
              backgroundColor: '#f5f5f5',
              fontWeight: 'bold',
            },

            '& .MuiDataGrid-cell': {
              fontFamily: 'yekanBold',
            },

            '& .MuiDataGrid-footerContainer': {
              fontFamily: 'yekanBold',
            },
          }}
        />
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

        <DialogTitle>جزئیات شعبه</DialogTitle>

        <DialogContent>

          {selectedBranch && (
            <div className="d-flex flex-column gap-3 mt-2">

              <Typography>شناسه شعبه: {selectedBranch.BranchId}</Typography>
              <Typography>نام شعبه: {selectedBranch.BranchName}</Typography>
              <Typography>کد منطقه: {selectedBranch.DistrictId}</Typography>
              <Typography>آدرس: {selectedBranch.Address}</Typography>

            </div>
          )}

        </DialogContent>
      </Dialog>
    </>
  );
}