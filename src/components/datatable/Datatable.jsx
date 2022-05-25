import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { GetFakeData } from '../../datatablesource';
import { Button } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'Note ID', width:100, cellClassName: 'class-custom'},
    { field: 'title', headerName: 'Title', width: 150, cellClassName: 'class-custom'},
    { field: 'body', headerName: 'Note', width:250, cellClassName: 'class-custom'},
    {
        field: 'userId',
        headerName: 'User ID', 
        cellClassName: 'class-custom',
        width:100,
    }
];

const columnActions = {
    field: 'actions',
    headerName: 'Acciones',
    width:200,
    renderCell:() => {
        return(
            <div className="cellAction">
                <Button sx={{marginRight:'10px'}} variant="outlined" color='primary'>View</Button>
                <Button variant="outlined" color='secondary'>Delete</Button>
            </div>
        )
    }
}

export default function Datatable() {

    const [userData, setData] = useState([])

    useEffect(() => {
        const data = GetFakeData()
        data.then(dato => setData(dato))
    }, [])
    return (
        <div className="datatable">
            <DataGrid
                rows={userData}
                columns={columns.concat(columnActions)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
