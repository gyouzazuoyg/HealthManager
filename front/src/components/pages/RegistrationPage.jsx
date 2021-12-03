/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AccountSection from "../sections/AccountSection";
import LoginNavbar from "../widgets/LoginNavbar";

function RegistrationPage() {
  return (
    <>
      <LoginNavbar />
      <div className="food-page">
        <AccountSection status="register" />
      </div>
    </>
  );
}

export default RegistrationPage;
