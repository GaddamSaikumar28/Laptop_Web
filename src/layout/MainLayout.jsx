import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MainLayout = () => {
  return (
    <div className="font-inter bg-black">
      <Header />
      <main>
        <Outlet /> {/* This is where your pages will be rendered */}
      </main>
      <Footer />
    </div>
  );
};
