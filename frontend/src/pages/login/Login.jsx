import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// ------------------------------------
// import Button from "../components/button/Button";
import Helmet from "../../components/helmet/Helmet";
import CheckBox from "../../components/checkbox/CheckBox";
// ------------------------------------
import "./login.scss";
import logo from "../../assets/images/logo.png";
import { loginUser } from "../../features/auth/pathAPI";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      dispatch(loginUser(data));
      alert("Login success!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Helmet title="Login">
        <div className="login">
          <div className="form">
            <Link className="form__logo">
              <img src={logo} alt="" />
            </Link>
            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email"
                required
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {/* {errors.email?.type === "required" && (
                <span className="error-message error-message-user" role="alert">
                  Email is required
                </span>
              )} */}
              <span className="form__input__icon__err">
                {/* <i className='bx bx-error-circle'></i> */}
              </span>
              <span className="form__input__icon__success">
                {/* <i className='bx bx-check-circle'></i> */}
              </span>
              <span className="form__input__err__msg"></span>
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                required
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <span className="error-message error-message-pass" role="alert">
                  {errors.password?.message}
                </span>
              )}
              <span className="form__input__icon__err">
                {/* <i className='bx bx-error-circle'></i> */}
              </span>
              <span className="form__input__con__success">
                {/* <i className='bx bx-check-circle'></i> */}
              </span>
            </div>
            <div className="form__group__checkbox">
              <CheckBox />
              <label>Remember Me</label>
            </div>
            <button className="form__btn">Sign in</button>
            <span className="form__delimiter">or connect with</span>
            <div className="form__social">
              <Link to="/" className="form__social__item__fb">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link className="form__social__item__tw">
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link className="form__social__item__gg">
                <i className="bx bxl-google"></i>
              </Link>
            </div>
            <span className="form__txt">
              Don't have an account?
              <Link to="/register">
                <strong> Register</strong>{" "}
              </Link>
            </span>
            <span className="form__txt">
              <Link>Forgot password</Link>
            </span>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </Helmet>
    </form>
  );
};

export default Login;
