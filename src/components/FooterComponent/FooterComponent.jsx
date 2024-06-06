import React from "react";
import imgf from "../../assets/images/imgf.png";
import fb from "../../assets/images/btnfb.png";
import ytb from "../../assets/images/ytb.png";
import zalo from "../../assets/images/zalo.png";
import toparr from "../../assets/images/toparr.png";
import mess from "../../assets/images/mess.png";
import phone from "../../assets/images/phone.png";

const FooterComponent = () => {
  return (
    <>
      <div style={{ paddingBottom: "50px" }}>
        <h1
          style={{
            paddingTop: "40px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          HỆ THỐNG SHOWROOM TIN HỌC NGÔI SAO
        </h1>
        <center>
          <hr
            style={{
              width: "15%",
              marginTop: "10px",
              border: "2px solid #000000",
            }}
          />
        </center>
        <div className="container text-start" style={{ marginTop: "20px" }}>
          <div className="row">
            <div className="col-12 col-md-3 mb-4">
              <div className="text-start">
                <span
                  style={{
                    borderRadius: "3px 0 0 3px",
                    padding: "5px 10px",
                    background: "#505050",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  1
                </span>
                <span
                  className="txt"
                  style={{
                    borderRadius: "0 3px 3px 0",
                    background: "red",
                    padding: "5px 60px 5px 10px",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ★ Showroom Tân Bình
                </span>
              </div>
              <ul
                className="list"
                style={{
                  listStyle: "none",
                  marginTop: "7px",
                  textAlign: "left",
                  fontSize: "13px",
                  padding: "0 12px",
                }}
              >
                <li>
                  <a
                    href="https://www.google.com/maps/place/Tin+H%E1%BB%8Dc+Ng%C3%B4i+Sao/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x3175294f708b975f:0x2076e7f098a1b065!8m2!3d10.7850551!4d106.6566326!16s%2Fg%2F11h414k2vg?entry=ttu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    28 - 30 Trần Triệu Luật, P.6, Q.Tân Bình, TP.HCM
                  </a>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Mua hàng: 0899 000 001 (08:30 - 21:00)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Bảo hành: 0919 267 015 (8:30 - 17:30)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-alarm-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Thứ 2 - Chủ nhật, 08:30 - 21:00
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <div className="text-start">
                <span
                  style={{
                    borderRadius: "3px 0 0 3px",
                    padding: "5px 10px",
                    background: "#505050",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  2
                </span>
                <span
                  className="txt"
                  style={{
                    borderRadius: "0 3px 3px 0",
                    background: "red",
                    padding: "5px 70px 5px 10px",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ★ Showroom Thủ Đức
                </span>
              </div>
              <ul
                className="list"
                style={{
                  listStyle: "none",
                  marginTop: "7px",
                  textAlign: "left",
                  fontSize: "13px",
                  padding: "0 11px",
                }}
              >
                <li>
                  <a
                    href="https://www.google.com/maps/place/Tin+H%E1%BB%8Dc+Ng%C3%B4i+Sao+L%C3%AA+V%C4%83n+Vi%E1%BB%87t/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x3175273ffb855ca7:0x658e6853070e6657!8m2!3d10.8440894!4d106.7817746!15sChN0aW4gaOG7jWMgbmfDtGkgc2FvIgOIAQFaFSITdGluIGjhu41jIG5nw7RpIHNhb5IBDmNvbXB1dGVyX3N0b3Jl4AEA?shorturl=1"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    180 Lê Văn Việt, P. Tăng Nhơn Phú B, Thủ Đức, TP.HCM
                  </a>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Mua hàng: 0899 000 001 (08:30 - 21:00)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Bảo hành: 0919 267 015 (8:30 - 17:30)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-alarm-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Thứ 2 - Chủ nhật, 08:30 - 21:00
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="text-start">
                <span
                  style={{
                    borderRadius: "3px 0 0 3px",
                    padding: "5px 10px",
                    background: "#505050",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  3
                </span>
                <span
                  className="txt"
                  style={{
                    borderRadius: "0 3px 3px 0",
                    background: "red",
                    padding: "5px 60px 5px 10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ★ Showroom Bình Thạnh
                </span>
              </div>
              <ul
                className="list"
                style={{
                  listStyle: "none",
                  marginTop: "7px",
                  textAlign: "left",
                  fontSize: "13px",
                  padding: "0 5px",
                }}
              >
                <li>
                  <a
                    href="httphttps://www.google.com/maps/place/TIN+H%E1%BB%8CC+NG%C3%94I+SAO+B%C3%8CNH+TH%E1%BA%A0NH/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x317529ca2b83e617:0x9fc964b88090b763!8m2!3d10.800914!4d106.710647!16s%2Fg%2F11j1134000?entry=ttus://www.google.com/maps/place/Tin+H%E1%BB%8Dc+Ng%C3%B4i+Sao+L%C3%AA+V%C4%83n+Vi%E1%BB%87t/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x3175273ffb855ca7:0x658e6853070e6657!8m2!3d10.8440894!4d106.7817746!15sChN0aW4gaOG7jWMgbmfDtGkgc2FvIgOIAQFaFSITdGluIGjhu41jIG5nw7RpIHNhb5IBDmNvbXB1dGVyX3N0b3Jl4AEA?shorturl=1"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    474 Điện Biên Phủ, P. 17, Q. Bình Thạnh, TP.HCM
                  </a>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Mua hàng: 0899 000 001 (08:30 - 21:00)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Bảo hành: 0919 267 015 (8:30 - 17:30)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-alarm-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Thứ 2 - Chủ nhật, 08:30 - 21:00
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div className="text-start">
                <span
                  style={{
                    borderRadius: "3px 0 0 3px",
                    padding: "5px 10px",
                    background: "#505050",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  4
                </span>
                <span
                  className="txt"
                  style={{
                    borderRadius: "0 3px 3px 0",
                    background: "red",
                    padding: "5px 3px 5px 10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  ★ Showroom THNS+ Quang Trung
                </span>
              </div>
              <ul
                className="list"
                style={{
                  listStyle: "none",
                  marginTop: "7px",
                  textAlign: "left",
                  fontSize: "13px",
                  padding: "0 4px",
                }}
              >
                <li>
                  <a
                    href="https://www.google.com/maps/place/Tin+H%E1%BB%8Dc+Ng%C3%B4i+Sao/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x3175294f708b975f:0x2076e7f098a1b065!8m2!3d10.7850551!4d106.6566326!16s%2Fg%2F11h414k2vg?entry=ttu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    1270 Quang Trung, P.14, Q.Gò Vấp, TP.HCM
                  </a>
                </li>
                <li>
                  <p>
                    <a
                      href="tel:0899000001"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <i
                        className="bi bi-telephone-fill"
                        style={{ paddingRight: "5px" }}
                      ></i>
                      Mua hàng: 0899 000 001 (08:30 - 21:00)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Bảo hành: 0919 267 015 (8:30 - 17:30)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-alarm-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Thứ 2 - Thứ 7: 09:00 - 21:00; CN: 09:00 - 18:00
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-12 col-md-3 mb-4">
              <div className="text-start">
                <span
                  style={{
                    borderRadius: "3px 0 0 3px",
                    padding: "5px 10px",
                    background: "#505050",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  5
                </span>
                <span
                  className="txt"
                  style={{
                    borderRadius: "0 3px 3px 0",
                    background: "red",
                    padding: "5px 60px 5px 10px",
                    fontSize: "14px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ★ Showroom Đắk Lắk
                </span>
              </div>
              <ul
                className="list"
                style={{
                  listStyle: "none",
                  marginTop: "7px",
                  textAlign: "left",
                  fontSize: "13px",
                  padding: "0 12px",
                }}
              >
                <li>
                  <a
                    href="https://www.google.com/maps/place/Tin+H%E1%BB%8Dc+Ng%C3%B4i+Sao/@10.7908239,106.6562198,12z/data=!4m6!3m5!1s0x3175294f708b975f:0x2076e7f098a1b065!8m2!3d10.7850551!4d106.6566326!16s%2Fg%2F11h414k2vg?entry=ttu"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    138 - 140 Lý Thường Kiệt, Thắng lợi, TP.BMT, Đắk Lắk
                  </a>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-telephone-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Mua hàng: 0899 000 001 (08:30 - 21:00)
                  </p>
                </li>
                <li>
                  <p>
                    <i
                      className="bi bi-alarm-fill"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Thứ 2 - Chủ nhật, 08:30 - 21:00
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#F4F8FA", paddingBottom: "80px" }}>
        <div className="container text-center">
          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-12 col-md-3 mb-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="bi bi-truck"
                  style={{
                    paddingRight: "7px",
                    fontSize: "35px",
                    color: "#E02027",
                  }}
                ></i>
                <div style={{ textAlign: "left", paddingLeft: "5px" }}>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    CHÍNH SÁCH GIAO HÀNG
                  </h1>
                  <p
                    style={{ margin: "0", fontSize: "12px", color: "#777777" }}
                  >
                    Nhận hàng và thanh toán tại nhà
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="bi bi-currency-exchange"
                  style={{
                    paddingRight: "7px",
                    fontSize: "35px",
                    color: "#E02027",
                  }}
                ></i>

                <div style={{ textAlign: "left", paddingLeft: "5px" }}>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    ĐỔI TRẢ DỄ DÀNG
                  </h1>
                  <p
                    style={{ margin: "0", fontSize: "12px", color: "#777777" }}
                  >
                    1 đổi 1 trong 7 ngày
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="bi bi bi-credit-card"
                  style={{
                    paddingRight: "7px",
                    fontSize: "35px",
                    color: "#E02027",
                  }}
                ></i>
                <div style={{ textAlign: "left", paddingLeft: "5px" }}>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    THANH TOÁN TIỆN LỢI
                  </h1>
                  <p
                    style={{ margin: "0", fontSize: "12px", color: "#777777" }}
                  >
                    Trả tiền mặt, chuyển khoản, Trả góp 0%
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 mb-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="bi bi-headset"
                  style={{
                    paddingRight: "7px",
                    fontSize: "35px",
                    color: "#E02027",
                  }}
                ></i>
                <div style={{ textAlign: "left", paddingLeft: "5px" }}>
                  <h1
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                  >
                    HỖ TRỢ NHIỆT TÌNH
                  </h1>
                  <p
                    style={{ margin: "0", fontSize: "12px", color: "#777777" }}
                  >
                    Tư vấn, giải đáp mọi thắc mắc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3 mb-4">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "left",
                    paddingTop: "20px",
                  }}
                >
                  GIỚI THIỆU THNS
                </h1>
                <hr
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    border: "1.5px solid red",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Tư vấn mua hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Tuyển dụng
                    </a>
                  </li>
                </ul>
                <div
                  className="iconlist"
                  style={{ textAlign: "left", fontSize: "20px" }}
                >
                  <a href="https://www.facebook.com/tinhocngoisaolon">
                    <i
                      className="bi bi-facebook"
                      style={{ paddingRight: "10px" }}
                    ></i>
                  </a>
                  <a href="https://www.google.com/search?q=tin+h%E1%BB%8Dc+ng%C3%B4i+sao&tbm=lcl&ei=MLgVYv-bEJTemAXj1I6YCA&oq=tin+h%E1%BB%8Dc+ng%C3%B4i+sao&gs_l=psy-ab.3..0i433i67k1j0i512k1l9.1479.1479.0.1723.1.1.0.0.0.0.93.93.1.1.0....0...1c.1.64.psy-ab..0.1.93....0.2-c6vv30Vx0#rlfi=hd:;si:;mv:[[10.843927,106.71928039999999],[10.7605413,106.62989309999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:4">
                    <i
                      className="bi bi-google"
                      style={{ paddingRight: "10px", color: "#28AAE1" }}
                    ></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCF3v7o8rtoVkqvMeAmFASIA/videos">
                    <i
                      className="bi bi-youtube"
                      style={{ paddingRight: "10px", color: "red" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "left",
                    paddingTop: "20px",
                  }}
                >
                  CHÍNH SÁCH CHUNG
                </h1>
                <hr
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    border: "1.5px solid red",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách trả góp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách giải quyết khiếu nại
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách bảo vệ thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách bảo hành
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Chính sách đổi - trả hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "left",
                    paddingTop: "20px",
                  }}
                >
                  THÔNG TIN KHUYẾN MÃI
                </h1>
                <hr
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    border: "1.5px solid red",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Tổng hợp khuyến mãi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-4">
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    textAlign: "left",
                    paddingTop: "20px",
                  }}
                >
                  HỖ TRỢ KHÁCH HÀNG
                </h1>
                <hr
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    border: "1.5px solid red",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    paddingLeft: "0",
                  }}
                >
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Tổng hợp Hotline CSKH, phản ánh
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Thông tin thanh toán
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Lắp đặt phòng net
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Thiết bị Mining
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "13px",
                      }}
                    >
                      Tra cứu bảo hành
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-md-3 mb-4"
                style={{ textAlign: "left" }}
              >
                <a href="http://online.gov.vn/Home/WebDetails/19897?AspxAutoDetectCookieSupport=1">
                  <img src={imgf} style={{ width: "150px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "20px",
          right: "30px",
        }}
      >
        <a href="https://www.facebook.com/tinhocngoisaolon">
          <img src={fb} style={{ width: "40px", paddingBottom: "5px" }} />
        </a>
        <a href="https://www.youtube.com/@tinhocngoisaolon">
          <img src={ytb} style={{ width: "40px", paddingBottom: "5px" }} />
        </a>
        <a href="https://zalo.me/3540225243475769200">
          <img src={zalo} style={{ width: "40px", paddingBottom: "5px" }} />
        </a>
        <a href="">
          <img
            src={toparr}
            style={{ width: "40px", paddingBottom: "5px", color: "#ED1B24" }}
          />
        </a>
        <a href="">
          <img
            src={mess}
            style={{ width: "60px", marginLeft: "-10px", paddingTop: "20px" }}
          />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "15px",
          left: "15px",
        }}
      >
        <a
          href="tel:19000243"
          style={{
            marginLeft: "7px",
            height: "50px",
            width: "210px",
            fontWeight: "bold",
            borderRadius: "25px",
            fontSize: "10px",
            border: "1px solid #ff4c4c",
            background: "#fff",
            color: "black",
            textDecoration: "none",
          }}
        >
          <img
            src={phone}
            style={{
              width: "49px",
              height: "49px",

              marginRight: "24px",
            }}
          ></img>
          TƯ VẤN NGAY
        </a>
      </div>
    </>
  );
};

export default FooterComponent;
