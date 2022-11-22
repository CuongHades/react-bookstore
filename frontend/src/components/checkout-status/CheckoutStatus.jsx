import React from "react";
import { Link } from "react-router-dom";
import "./checkout-status.scss";

const CheckoutStatus = ({ step1, step2, step3 }) => {
  return (
    <div className='container'>
      {/* <i class='bx bx-check'></i> */}
      {/* Giỏ hàng */}
      <div className='status-bar'>
        <div className='status-checkpoint'>
          <div className='circle'></div>
          <div className='step'>Giỏ hàng</div>
        </div>
        <div className='connection'></div>
        <div className='status-checkpoint'>
          <div className='circle'></div>
          <div className='step'>Hóa đơn & Địa chỉ</div>
        </div>
        <div className='connection'></div>

        <div className='status-checkpoint'>
          <div className='circle'></div>
          <div className='step'>Thanh toán</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStatus;
