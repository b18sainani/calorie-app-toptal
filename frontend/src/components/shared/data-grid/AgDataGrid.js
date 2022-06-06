import { forwardRef, useImperativeHandle } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './ag-data-grid.scss';
let gridApi = null;
let gridColumnApi = null;
const AgDataGrid = forwardRef((props, ref) => {
    const onGridReady = (params) => {
        gridApi = params && params.api ? params.api : {};
        gridColumnApi = params.columnApi;
        gridApi.sizeColumnsToFit();
    }
    useImperativeHandle(ref, () => ({
        filterActionGrid(filter) {
            if (gridApi) {
                gridApi.setQuickFilter(filter);
            }
        }
    }));

    const gridOptions = {
        rowData: props.rowData,
        columnDefs: props.columnData,
        rowSelection: 'single',
        onRowClicked: event => console.log('A row was clicked'),
        onColumnResized: event => console.log('A column was resized'),
        onGridReady: params => onGridReady(params),
        isScrollLag: () => false,
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact rowData={props.rowData}
                gridOptions={gridOptions}
                context={props.context}
            />
        </div>
    )
});

export default AgDataGrid;
