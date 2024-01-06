import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import CreateArtistPageView from './CreateArtistPageView';

const Admin: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard title="Dashboard" />}></Route>
      <Route path="/artist/create" element={<CreateArtistPageView />}></Route>
    </Routes>
  );
};

export default Admin;
