import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import PasswordResetForm from './forms/PasswordResetForm';
import ConfirmPasswordForm from './forms/ConfirmPasswordForm';
import MainLayout from './MainLayout'; // Import the layout
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import AllAdmins from './pages/AllAdmins';
import DeleteAdmin from './pages/DeleteAdmin';
import ManageAdmin from './pages/ManageAdmin';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/passwordreset" element={<PasswordResetForm />} />
      <Route path="/resetPassword/:token" element={<ConfirmPasswordForm />} />
      {/* Add other routes here */}
       
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admins"
        element={
          <PrivateRoute>
            <MainLayout>
              <AllAdmins />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-admin"
        element={
          <PrivateRoute>
            <MainLayout>
              <DeleteAdmin />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/:id"
        element={
          <PrivateRoute>
            <MainLayout>
              <ManageAdmin />
            </MainLayout>
          </PrivateRoute>
        }
      />
         {/*
      <Route
        path="/men"
        element={
          <PrivateRoute>
            <MainLayout>
              <Men />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/women"
        element={
          <PrivateRoute>
            <MainLayout>
              <Women />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/kids"
        element={
          <PrivateRoute>
            <MainLayout>
              <Kids />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <MainLayout>
              <Contact />
            </MainLayout>
          </PrivateRoute>
        }
      />
      */}
    </Routes>
    </Router>
  );
};

export default App;


