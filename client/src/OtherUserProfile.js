import React from "react";
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
  const { id } = useParams();
  return <div>User Profile</div>;
};

export default OtherUserProfile;
