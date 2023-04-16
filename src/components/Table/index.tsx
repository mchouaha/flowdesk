import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Ticker, Trade } from '../../lib/interfaces'
import { TableSortLabel } from '@mui/material'
import moment from 'moment'

interface PropsTable {
    data: [Ticker] | [Trade]
}

enum Order {
    DESC,
    ASC
}

const DEFAULT_ORDER_BY = 'price'
const DEFAULT_ORDER = Order.ASC
const ORDER_LIST = ['time', 'price', 'qty']
const DataTable: React.FunctionComponent<PropsTable> = ({data}) => {
  
    const [order, setOrder] = React.useState<Order>(DEFAULT_ORDER);
    const [orderBy, setOrderBy] = React.useState<string>(DEFAULT_ORDER_BY);

    const headerKeys: string[] | undefined = Object.keys(data[0])

    const handleSort = React.useCallback( (sortKey: string) => {
        
        setOrderBy(sortKey)

        data?.sort((a: any, b: any) => {

            if(order === Order.ASC) {
                setOrder(Order.DESC)
                return b[sortKey].toString().localeCompare(a[sortKey].toString())
            }
            else {
                setOrder(Order.ASC)
                return a[sortKey].toString().localeCompare(b[sortKey].toString())
            }
        })
    },[order, orderBy])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            
                <TableHead>
                    <TableRow>
                    
                    { headerKeys && headerKeys.map((key: string) => key!== 'id' && 
                        <TableCell key={key}>
                            <TableSortLabel 
                                active={ORDER_LIST.includes(key)}
                                hideSortIcon={!ORDER_LIST.includes(key)}
                                direction={ orderBy === key && order === Order.DESC ? 'desc' : 'asc'}
                                onClick={() => ORDER_LIST.includes(key) && handleSort(key)} > {key}
                            </TableSortLabel>
                        </TableCell>
                    )}

                    </TableRow>
                </TableHead>

                <TableBody>
                    { data.map((row: any, index: number) => 
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            { headerKeys && headerKeys.map((key: string) => key!== 'id' && 
                                <TableCell key={key} component="th" scope="row">
                                    { key === 'time' ? moment(row[key]).format('llll')  : row[key].toString()}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>

            </Table>
        </TableContainer>
    );
}

export default DataTable
