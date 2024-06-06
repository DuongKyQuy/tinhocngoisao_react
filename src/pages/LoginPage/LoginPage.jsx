import React, { useState } from "react";
import "./LoginPage.scss";
import btnfb from "../../assets/images/btnfb.png";
import btngg from "../../assets/images/btngg.png";

const LoginPage = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setIsForgotPassword(false);
  };
  return (
    <><div
    className="container text-center"
    style={{ marginTop: "15px", textAlign: "center"}}
  >
    <h1
      style={{
        fontSize: "18px",
        fontWeight: "normal",
        color: "rgb(102, 102, 102)",
      }}
    >
      ĐĂNG NHẬP BẰNG
    </h1>
    <div className="btnsocial" style={{ marginTop: "20px" }}>
      <button
        type="button"
        className="btsocialogin"
        style={{
          marginRight: "7px",
          height: "30px",
          borderRadius: "20px",
          fontSize: "13px",
          border: "none",
          background: "#546ea6",
          color: "white",
          paddingRight: "10px",
        }}
      >
        <img
          src={btnfb}
          style={{
            width: "24px",
            height: "27px",
            marginLeft: "-5px",
            marginRight: "10px",
          }}
        ></img>
        Facebook
      </button>
      <button
        type="button"
        className="btsocialogin"
        style={{
          marginLeft: "7px",
          height: "30px",
          borderRadius: "20px",
          fontSize: "13px",
          border: "none",
          background: "#df5656",
          color: "white",
          paddingRight: "10px",
        }}
      >
        <img
          src={btngg}
          style={{
            width: "24px",
            height: "27px",
            marginLeft: "-5px",
            marginRight: "10px",
          }}
        ></img>
        Google+
      </button>
    </div>
    <div className="line-container" style={{ marginTop: "15px" }}>
      <div className="line"></div>
      <div className="text">HOẶC</div>
      <div className="line"></div>
    </div>
    <div className="container" style={{ marginTop: "10px" }}>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              color: "rgb(102, 102, 102)",
            }}
          >
            {isForgotPassword ? "QUÊN MẬT KHẨU" : "ĐĂNG NHẬP"}
          </h2>
          {!isForgotPassword ? (
            <>
              <div
                className="container d-flex flex-column align-items-center"
                style={{ maxWidth: "400px" }}
              >
                <div className="input-group mb-3" style={{ width: "100%" }}>
                  <span
                    className="input-group-text"
                    style={{ borderRight: "none", background: "white" }}
                  >
                    <i
                      className="bi bi-envelope-fill"
                      style={{
                        color: "#666666",
                        fontSize: "22px",
                        paddingLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Email của bạn"
                    style={{
                      borderRight: "none",
                      borderLeft: "none",
                      paddingLeft: "2px",
                      fontSize: "14px",
                      color: "#757575",
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{
                      borderLeft: "none",
                      background: "white",
                      fontSize: "18px",
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <div className="input-group mb-3" style={{ width: "100%" }}>
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{ borderRight: "none", background: "white" }}
                  >
                    <i
                      className="bi bi-lock-fill"
                      style={{
                        color: "#666666",
                        fontSize: "22px",
                        paddingLeft: "5px",
                      }}
                    ></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nhập mật khẩu"
                    aria-label="Password"
                    style={{
                      borderRight: "none",
                      borderLeft: "none",
                      paddingLeft: "2px",
                      fontSize: "14px",
                      color: "#757575",
                    }}
                  />
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                    style={{
                      borderLeft: "none",
                      background: "white",
                      fontSize: "18px",
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary custom-button"
                  style={{
                    fontSize: "14px",
                    borderRadius: "1px",
                    width: "100%",
                    height: "40px",
                    color: "rgb(102, 102, 102)",
                  }}
                >
                  Đăng nhập
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleForgotPasswordClick}
                  style={{
                    fontSize: "14px",
                    margin: "10px 70px",
                    color: "black",
                  }}
                >
                  Quên mật khẩu?
                </button>
              </div>
            </>
          ) : (
            <>
              <>
              <>
<div className="container" style={{ fontSize: "13px", color: "black", marginTop: "30px", maxWidth: "400px"}}>
  <div className="reset-password-wrapper d-flex align-items-center" >
    <i className="bi bi-arrow-repeat" style={{ marginRight: "8px" }}></i>
    <p style={{ margin: 0 }}>Đặt lại mật khẩu</p>
  </div>
  <p className="reset-password-text" style={{ margin: "10px 0 0 0",textAlign:'left' }}>
    Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
  </p>
</div>

<div className="container d-flex flex-column align-items-center" style={{ maxWidth: "400px", marginTop: "15px" }}>
  <div className="input-group mb-3" style={{ width: "100%" }}>
    <span className="input-group-text" style={{ borderRight: "none", background: "white" }}>
      <i className="bi bi-envelope-fill" style={{ color: "#666666", fontSize: "22px", paddingLeft: "5px" }}></i>
    </span>
    <input
      type="text"
      className="form-control custom-input"
      placeholder="Email của bạn"
      style={{
        borderLeft: "none",
        paddingLeft: "2px",
        fontSize: "14px",
        color: "#757575",
      }}
    />
  </div>

  <button
    type="button"
    className="btn btn-outline-secondary custom-button"
    style={{
      fontSize: "14px",
      borderRadius: "1px",
      width: "100%",
      height: "40px",
      color: "rgb(102, 102, 102)",
      marginBottom: "10px",
    }}
  >
    Gửi yêu cầu
  </button>
  <button
    type="button"
    className="btn btn-link"
    onClick={handleBackToLoginClick}
    style={{
      fontSize: "14px",
      color: "#007bff",
      fontWeight: "bold",
    }}
  >
    Hủy
  </button>
</div>
</>

</>

            </>
          )}
        </div>
        <div className="col-12 col-md-6 mb-4">
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              color: "rgb(102, 102, 102)",
            }}
          >
            ĐĂNG KÝ THÀNH VIÊN MỚI
          </h2>
          <div
            className="container d-flex flex-column align-items-center"
            style={{ maxWidth: "400px" }}
          >
            <div className="input-group mb-3" style={{ width: "100%" }}>
              <span
                className="input-group-text"
                style={{ borderRight: "none", background: "white" }}
              >
                <i
                  className="bi bi-person-fill"
                  style={{
                    color: "#666666",
                    fontSize: "22px",
                    paddingLeft: "5px",
                  }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Họ"
                style={{
                  borderRight: "none",
                  borderLeft: "none",
                  paddingLeft: "2px",
                  fontSize: "14px",
                  color: "#757575",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  borderLeft: "none",
                  background: "white",
                  fontSize: "18px",
                  color: "red",
                }}
              >
                *
              </span>
            </div>

            <div className="input-group mb-3" style={{ width: "100%" }}>
              <span
                className="input-group-text"
                style={{ borderRight: "none", background: "white" }}
              >
                <i
                  className="bi bi-person-fill"
                  style={{
                    color: "#666666",
                    fontSize: "22px",
                    paddingLeft: "5px",
                  }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Tên"
                style={{
                  borderRight: "none",
                  borderLeft: "none",
                  paddingLeft: "2px",
                  fontSize: "14px",
                  color: "#757575",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  borderLeft: "none",
                  background: "white",
                  fontSize: "18px",
                  color: "red",
                }}
              >
                *
              </span>
            </div>

            <div className="input-group mb-3" style={{ width: "100%" }}>
              <span
                className="input-group-text"
                style={{ borderRight: "none", background: "white" }}
              >
                <i
                  className="bi bi-envelope-fill"
                  style={{
                    color: "#666666",
                    fontSize: "22px",
                    paddingLeft: "5px",
                  }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Email"
                style={{
                  borderRight: "none",
                  borderLeft: "none",
                  paddingLeft: "2px",
                  fontSize: "14px",
                  color: "#757575",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  borderLeft: "none",
                  background: "white",
                  fontSize: "18px",
                  color: "red",
                }}
              >
                *
              </span>
            </div>

            <div className="input-group mb-3" style={{ width: "100%" }}>
              <span
                className="input-group-text"
                style={{ borderRight: "none", background: "white" }}
              >
                <i
                  className="bi bi-lock-fill"
                  style={{
                    color: "#666666",
                    fontSize: "22px",
                    paddingLeft: "5px",
                  }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Mật khẩu"
                style={{
                  borderRight: "none",
                  borderLeft: "none",
                  paddingLeft: "2px",
                  fontSize: "14px",
                  color: "#757575",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  borderLeft: "none",
                  background: "white",
                  fontSize: "18px",
                  color: "red",
                }}
              >
                *
              </span>
            </div>

            <div className="input-group mb-3" style={{ width: "100%" }}>
              <span
                className="input-group-text"
                style={{ borderRight: "none", background: "white" }}
              >
                <i
                  className="bi bi-arrow-clockwise"
                  style={{
                    color: "#666666",
                    fontSize: "22px",
                    paddingLeft: "5px",
                  }}
                ></i>
              </span>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Nhập lại mật khẩu"
                style={{
                  borderRight: "none",
                  borderLeft: "none",
                  paddingLeft: "2px",
                  fontSize: "14px",
                  color: "#757575",
                }}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  borderLeft: "none",
                  background: "white",
                  fontSize: "18px",
                  color: "red",
                }}
              >
                *
              </span>
            </div>

            <button
              type="button"
              className="btn btn-outline-secondary custom-button"
              style={{
                fontSize: "14px",
                borderRadius: "1px",
                width: "100%",
                height: "40px",
                color: "rgb(102, 102, 102)",
              }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div style={{ background: "#F4F8FA", paddingBottom: "30px"}}></div></>
    
    
  );
};

export default LoginPage;
