import React from 'react';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons';

import avatar1 from 'src/assets/images/avatars/1.jpg';
import avatar2 from 'src/assets/images/avatars/2.jpg';
import avatar3 from 'src/assets/images/avatars/3.jpg';
import avatar4 from 'src/assets/images/avatars/4.jpg';
import avatar5 from 'src/assets/images/avatars/5.jpg';
import avatar6 from 'src/assets/images/avatars/6.jpg';

import doctorImage from 'src/assets/doctor.jpg'; // Import your doctor image here

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ];

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'USA', flag: cifUs },
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    // Add other table items as necessary
  ];

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="doctor" className="card-title mb-0">
                Health Check Pro
              </h4>
              <div className="small text-body-secondary">Stay on top of your health journey—track, check, and progress with Health Check Pro!</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              {/* Empty or add additional buttons if needed */}
            </CCol>
          </CRow>
          <div className="text-center mt-4">
            <img src={doctorImage} alt="Doctor" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              {/* Retain rest of your original components and tables */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
