import React from 'react'
import ProfileCard from './ProfileCard'
import { useAuth0 } from '@auth0/auth0-react'
const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }
    
  return (
    isAuthenticated && (
    <div className='h-auto min-h-screen w-3/4'> 
      <ProfileCard
        name={user.name}
        plan={"Standard"}
      />
    </div>
    )

  )
}

export default Profile
