import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import LineChart from '../../charts/LineChart01';
// import Icon from '../../images/icon-01.svg';
// import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
// import { tailwindConfig, hexToRGB } from '../../utils/Utils';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTotalEmployeeAsync } from '../../state/features/employees/employeesSlice';
import { EmployeeList } from '../../features/employee-list/EmployeeList';

function DashboardCard01() {
  return (
    <>
    <EmployeeList></EmployeeList>
    </>
  );
}

export default DashboardCard01;
