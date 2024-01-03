import React from "react";
import { useRouter } from "next/router";

interface ProfileProps {
  name: string;
  email: string;
  bio: string;

  params: {
    slug: string;
  };
}

const ProfilePage: React.FC<ProfileProps> = ({ name, email, bio, params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{bio}</p>
    </div>
  );
};

export default ProfilePage;
