import './table.scss'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material'

function createData(product, status, date, description, parcentage) {
    return { product, status, date, description, parcentage };
}

const rows = [
    createData('Servidor Cloud', 'pending', '25/04/2021', 'Daño servidor', '90%'),
    createData('Isabell 12', 'rejected', '15/11/2021', 'parametrización equivocada', '45%'),
    createData('MacBook Pro', 'fullfilment', '22/10/2021', 'producto no funciona', '60%'),
    createData('SSD Samsung 224Gb', 'rejected', '05/01/2022', 'devolución', '78%'),
    createData('Servicio PBX cLoud', 'pending', '03/09/2020', 'instalación de pbx', '25%'),
];

export default function TableComp() {
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell className="tableCell" align="right">Fecha</TableCell>
                        <TableCell className="tableCell" align="right">Porcentaje</TableCell>
                        <TableCell className="tableCell" align="right">Descripción</TableCell>
                        <TableCell className="tableCell" align="right">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.product}
                        >
                            <TableCell className="profix" component="th" scope="row">
                                {row.product}
                                <div className="wrapperImg">
                                    <img src="https://picsum.photos/200/300" alt="profix" />
                                </div>
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.parcentage}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">
                                <span className={row.status}>
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
