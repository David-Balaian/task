import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Box } from '@mui/material';
import useTable from './useTable';
import useTableDateFormatter from '../../../hooks/useTableDataFormatter';
import useVirtualization from '../../../hooks/useVirtualization';

export default function DataTable({ series }) {

    const {
        rowsCount,
        rowsCountAsync,
        handleMoreClick,
        handleRowsChange,
    } = useTable();

    const {
        columnDefs,
        rows,
    } = useTableDateFormatter(series);

    const {
        containerRef,
        wrapperRef,
        wrapperStyle,
        showing, 
        rowHeight,
        handleContScroll,
    } = useVirtualization(rows, rowsCountAsync)

    return (
        <div 
            ref={containerRef}
            style={{
                width: '100%',
                height: '100vh',
                overflow: 'auto',
            }}
            onScroll={handleContScroll}
        >
            <div
                ref={wrapperRef}
                style={{
                    height: wrapperStyle.height,
                    paddingTop: wrapperStyle.paddingTop,
                    width: 'fit-content',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    position: 'relative',
                }}
            >
                <TableContainer component={Paper} elevation={10}>
                    <Table sx={{ width: '100%' }} >
                        <TableHead>
                            <TableRow>
                                {columnDefs.map(column => <TableCell key={column.label} align={column.align}>{column.label}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(showing.startIndex, showing.endIndex).map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ height: rowHeight,  '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {columnDefs.map(column => <TableCell key={column.label} align={column.align}>{column.cellRenderer ? column.cellRenderer(row[column.label]) : row[column.label]}</TableCell>)}
                                    <TableCell> <Button onClick={() => { handleMoreClick(row.id) }} variant='contained' color='primary' fullWidth >more</Button> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ position: 'fixed', bottom: 0, right: 0, backgroundColor: '#fff' }} >
                        <TextField
                            variant='filled'
                            color='primary'
                            helperText='note: table will virtualize rows if the count exceed 100'
                            label='Rows count'
                            type='number'
                            value={rowsCount}
                            onChange={handleRowsChange}
                        />
                    </Box>
            </div>
        </div>
    );
}
