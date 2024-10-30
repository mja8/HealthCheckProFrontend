import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';

import doctorImage from 'src/assets/doctor.jpg'; // Import your doctor image here

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="doctor" className="card-title mb-0">
                Health Check Pro
              </h4>
              <div className="small text-body-secondary">
                Stay on top of your health journey—track, check, and progress with Health Check Pro!
              </div>
            </CCol>
          </CRow>
          <div className="text-center mt-4">
            <img src={doctorImage} alt="Doctor" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Dashboard;
