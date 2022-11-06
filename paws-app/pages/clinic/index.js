import Sidebar from "../../components/Layout/components/Sidebar";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSidebarTitle } from "../../components/shared/reducers/sidebar";
import { useState } from "react";

export default function ClinicDashboard() {
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(setSidebarTitle('Clinic'));
  // });
  const [sidebarTitle, setSidebarTitle] = useState('clinic');

  return (
    <>
      <div>Shelter Dashboard</div>
      <Sidebar title={sidebarTitle}/>
    </>
  )
}
