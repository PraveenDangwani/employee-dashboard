import React, { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { columnDefs, defaultColDef } from './grid/columnDefs';
import type { Employee } from './grid/types';
import employeesData from '../data/assessment_data.json';

import {useTheme} from '../context/theme/useTheme';

import 'ag-grid-community/styles/ag-theme-material.css';


ModuleRegistry.registerModules([AllCommunityModule]);

interface Props {
    quickFilterText: string;
  }

const EmployeeGrid: React.FC<Props> = ({ quickFilterText }) => {
  const [rowData] = useState<Employee[]>(employeesData.employees);
  const { theme } = useTheme(); 
  const gridRef = useRef<AgGridReact<Employee>>(null);

  const agGridTheme = theme === 'dark' ? 'ag-theme-material-dark' : 'ag-theme-material';

  return (
    <div
      className={agGridTheme}
      style={{
        height: '80vh',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
      }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        quickFilterText={quickFilterText}
        pagination
        paginationPageSize={20}
        rowSelection="multiple"
        animateRows
        enableBrowserTooltips={true}
        groupDisplayType="multipleColumns"
        suppressRowVirtualisation={false} 
        suppressColumnVirtualisation={false}
      />
    </div>
  );
};

export default EmployeeGrid;
