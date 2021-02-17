import React from "react";

const Profile = () => {
  const { fullName, displayName, dob, email, createdAt } = JSON.parse(
    localStorage.getItem("notwitterCurrentUser")
  );
  return (
    <section className='page profile'>
      <div className='profile__inner'>
        <h3>
          Hello <span>{displayName}</span>
        </h3>
        <ul>
          <li>
            <span>Full name:</span>
            <span>{fullName}</span>
          </li>
          <li>
            <span>Display name:</span>
            <span>{displayName}</span>
          </li>
          <li>
            <span>Email:</span>
            <span>{email}</span>
          </li>
          <li>
            <span>Date of birth:</span>
            <span>{dob}</span>
          </li>
          <li>
            <span>Joined at:</span>
            <span>{createdAt}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
