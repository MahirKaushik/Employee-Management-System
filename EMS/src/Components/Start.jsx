/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://www.einnosys.com/wp-content/uploads/2023/09/Best-Software-Solutions-for-Education-Industry.png"
        className="log-img"
        alt="Login"
      />
      <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className="p-3 rounded w-25 border bg-blue">
          <h2>Login As</h2>
          <div className="d-flex justify-content-between mt-5 mb-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/employee_login");
              }}
            >
              Employee
            </button>
            <button type="button" className="btn btn-success" onClick={() => {
                navigate('/adminlogin')
              }}>
              Admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
