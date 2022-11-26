import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import Section, {
  SectionTitle,
  SectionBody,
} from "../../components/section/Section";
import numberWithCommas from "../../utils/numberWithCommas.js";
import "./profile.scss";

import imguser from "../../assets/images/users.png";
import OrderDetails from "../../components/orderdetails/OrderDetails";

const Profile = () => {
  window.scrollTo(0, 0);
  return (
    <Helmet title='Profile'>
      <div className='container'>
        <Section>
          <SectionTitle>---</SectionTitle>
          <SectionTitle>Tài khoản của tôi</SectionTitle>
          <SectionBody>
            <div className='profile'>
              {/* info card */}
              <div className='profile__info'>
                <div className='profile__cover'></div>
                <div className='profile__info__card'>
                  <div className='profile__info__avatar'>
                    <img src={imguser} alt='avatar' />
                  </div>
                  <div className='profile__info__text'>
                    <div className='profile__info__text__username'>
                      <h5>
                        <strong>Long</strong>
                      </h5>
                    </div>
                    <div className='profile__info__text__datetime'>
                      <span> Đã tham gia 12/12/2022</span>
                    </div>
                  </div>
                </div>
                {/* tab item */}
                <div className='profile__setting'>
                  <div className='profile__setting__btn'>
                    <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Cài đặt tài khoản
                      </button>
                    </div>
                    {/* <div className='profile__setting__btn__item'>
                      <button className='btn-item' type='button'>
                        Orders List
                        <span className='profile__setting__btn__item__badge'>
                          2
                        </span>
                      </button>
                    </div> */}
                    <Link to='/shipping-address'>
                      <div className='profile__setting__btn__item'>
                        <button className='btn-item' type='button'>
                          Địa chỉ giao hàng
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <form className='form-profile'>
                <div className='profile-tab'>
                  <div className='profile-tab__form'>
                    <div className='profile-tab__form__group'>
                      <input
                        type='username'
                        className='profile-tab__form__input'
                        placeholder='Tên tài khoản'
                      />
                    </div>
                    <div className='profile-tab__form__group'>
                      <input
                        type='email'
                        className='profile-tab__form__input'
                        placeholder='Email'
                      />
                    </div>

                    <div className='profile-tab__form__group'>
                      <input
                        type='new-password'
                        className='profile-tab__form__input'
                        placeholder='Mật khẩu mới'
                      />
                    </div>
                    <div className='profile-tab__form__group'>
                      <input
                        type='confirm-password'
                        className='profile-tab__form__input'
                        placeholder='Nhập lại mật khẩu'
                      />
                    </div>

                    <div className='profile-tab__form__btn'>
                      <Button size='sm' type='submit'>
                        Cập nhật
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* <ProfileTabs /> */}
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Đơn hàng của tôi</SectionTitle>
          <SectionBody>
            <OrderDetails />
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Profile;