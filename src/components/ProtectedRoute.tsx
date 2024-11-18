import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
  facultyOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
  facultyOnly = false,
}: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'super_admin') {
    return <Navigate to="/dashboard" />;
  }

  if (facultyOnly && user.role !== 'faculty') {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}