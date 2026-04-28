'use client';

import { useMemo, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    Avatar,
    Chip,
    IconButton,
    Dialog,
    DialogContent,
    MenuItem,
    Select,
    Button,
    Snackbar,
    Alert,
    Typography
} from '@mui/material';

import { MdPendingActions } from "react-icons/md";

export default function UserTable() {

    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const [sortType, setSortType] = useState('none');

    // 🔥 NEW: filter toggle
    const [filterExperience, setFilterExperience] = useState(false);

    const branches = [
        { id: 'B-01', name: 'شعبه مرکزی' },
        { id: 'B-02', name: 'شعبه شمال' },
        { id: 'B-03', name: 'شعبه غرب' },
    ];

    const handleOpen = (row) => {
        setSelectedUser(row);
        setSelectedBranch(row.BranchCode || '');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedUser(null);
    };

    const handleSubmit = () => {
        setSnackbarOpen(true);
        setOpen(false);
    };

    // 🔥 BIG DATA (زیادش کردم)
    const rows = [
        ...Array.from({ length: 25 }).map((_, i) => ({
            id: i + 1,
            UserId: 1000 + i,
            FirstName: i % 2 === 0 ? 'علی' : 'سارا',
            LastName: 'کاربر' + i,
            GenderType: i % 2 === 0 ? 'male' : 'female',
            NationalCode: '12345678' + i,
            ExperienceByYear: Math.random() * 6, // 0 تا 6 سال
            BranchCode: 'B-0' + ((i % 3) + 1),
            Img: '',
            RoleType: i % 3 === 0 ? 'مدیر' : 'کارمند'
        }))
    ];

    // 🔥 SORT
    const sortedRows = useMemo(() => {
        let data = [...rows];

        if (sortType === 'experience') {
            data.sort((a, b) => b.ExperienceByYear - a.ExperienceByYear);
        }

        if (sortType === 'gender') {
            data.sort((a, b) => a.GenderType.localeCompare(b.GenderType));
        }

        return data;
    }, [sortType]);

    // 🔥 FILTER + SORT
    const finalRows = useMemo(() => {
        let data = [...sortedRows];

        if (filterExperience) {
            data = data.filter(user => user.ExperienceByYear >= 2.5);
        }

        return data;
    }, [sortedRows, filterExperience]);

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

        { field: 'UserId', headerName: 'شناسه', width: 90 },

        {
            field: 'fullName',
            headerName: 'نام و نام خانوادگی',
            flex: 1,
            renderCell: (params) => (
                <div className="d-flex align-items-center gap-2">
                    <Avatar src={params.row.Img} />
                    <span>{params.row.FirstName} {params.row.LastName}</span>
                </div>
            )
        },

        {
            field: 'GenderType',
            headerName: 'جنسیت',
            width: 120,
            renderCell: (params) => (
                <Chip
                    label={params.value === 'male' ? 'مرد' : 'زن'}
                    color={params.value === 'male' ? 'primary' : 'secondary'}
                    size="small"
                />
            )
        },

        {
            field: 'ExperienceByYear',
            headerName: 'سابقه',
            width: 120,
            renderCell: (params) => `${params.value.toFixed(1)} سال`
        },

        { field: 'BranchCode', headerName: 'کد شعبه', width: 120 },

        {
            field: 'RoleType',
            headerName: 'نقش',
            width: 150,
            renderCell: (params) => (
                <Chip label={params.value} color="success" size="small" />
            )
        },
    ];

    return (
        <>

            {/* 🔥 CONTROLS BAR */}
            <div className="mb-3 d-flex align-items-center gap-3 flex-wrap">

                <Typography sx={{ fontFamily: 'yekanBold' }}>
                    مرتب سازی:
                </Typography>

                <Select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    size="small"
                    sx={{ fontFamily: 'yekanBold', minWidth: 160 }}
                >
                    <MenuItem value="none">پیش فرض</MenuItem>
                    <MenuItem value="experience">سابقه</MenuItem>
                    <MenuItem value="gender">جنسیت</MenuItem>
                </Select>

                {/* 🔥 NEW FILTER BUTTON */}
                <Button
                    variant={filterExperience ? "contained" : "outlined"}
                    onClick={() => setFilterExperience(!filterExperience)}
                    sx={{ fontFamily: 'yekanBold' }}
                >
                    فقط بالای ۲.۵ سال سابقه
                </Button>

                <Typography sx={{ fontFamily: 'yekanBold' }}>
                    تعداد: {finalRows.length}
                </Typography>

            </div>

            {/* TABLE */}
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={finalRows}
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
                    }}
                />
            </div>

            {/* MODAL */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogContent>

                    {selectedUser && (
                        <div className="d-flex flex-column gap-2">

                            <Avatar src={selectedUser.Img} sx={{ width: 70, height: 70 }} />

                            <div className="bg-dark text-white p-2 rounded">
                                نام: {selectedUser.FirstName}
                            </div>

                            <div className="bg-dark text-white p-2 rounded">
                                سابقه: {selectedUser.ExperienceByYear.toFixed(1)} سال
                            </div>

                        </div>
                    )}

                    <h5 className="pt-4">انتخاب شعبه</h5>

                    <Select
                        fullWidth
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        sx={{ fontFamily: 'yekanBold' }}
                    >
                        {branches.map((b) => (
                            <MenuItem key={b.id} value={b.id}>
                                {b.name}
                            </MenuItem>
                        ))}
                    </Select>

                    <Button
                        variant="contained"
                        fullWidth
                        className="mt-3"
                        onClick={handleSubmit}
                    >
                        ثبت
                    </Button>

                </DialogContent>
            </Dialog>

            {/* SNACKBAR */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert severity="success" variant="filled" sx={{ fontFamily: 'yekanBold' }}>
                    عملیات با موفقیت انجام شد
                </Alert>
            </Snackbar>

        </>
    );
}