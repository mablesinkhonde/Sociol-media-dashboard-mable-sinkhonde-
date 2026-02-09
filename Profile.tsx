'use client';

import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileComponent from '../components/Profile';
import './Profile.css';

export default function ProfilePage() {
  const { userId } = useParams();

  return (
    <div className="profile-page">
      <ProfileComponent />
    </div>
  );
}
