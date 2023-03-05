import './service-page.styles.scss';
import { Route, Routes } from 'react-router-dom';
import Service from '../Service/service.component';

import React from 'react'

const ServicePage = () => {
  return (
    <Routes>
        <Route path=':page' element={<Service />} />
    </Routes>
  )
}

export default ServicePage