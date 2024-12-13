"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';
import { SignIn, useUser } from '@clerk/nextjs'

const HomePage = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleGetStarted = () => {
    router.push('/sign-in'); // Adjust the path as needed for your sign-in page
  };

  return (
    <div className="container">
      <header className="hero">
        <h1>Welcome to Our Modern App</h1>
        <p>Experience the future of authentication with Clerk.</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </header>
      <main>
        <h2 className='text'>Features</h2>
        <p className='text'>Explore our amazing features that enhance your experience.</p>
      </main>
    </div>
  );
};

export default HomePage;