import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import SuspenseLoad from './suspenseLoad';
import Auth from './auth';
import Login from '@/views/login';
import Error404 from '@/views/Error404';
const Layout = lazy(() => import('@/layout')); // Layout
const Expenses = lazy(() => import('@/views/expenses')); // 首页

const router: RouteObject[] = [
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <Auth element={SuspenseLoad(<Layout />)} title="系统" />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      {
        path: 'expenses',
        element: <Auth element={SuspenseLoad(<Expenses />)} title="Expenses" />,
      },

      { path: '*', element: <Error404 /> },
    ],
  },
];
export default router;
