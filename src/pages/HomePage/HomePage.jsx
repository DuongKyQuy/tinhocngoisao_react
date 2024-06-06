import React from "react";
import bn1 from "../../assets/images/bn1.png";
import bn2 from "../../assets/images/bn2.png";
import bn3 from "../../assets/images/bn3.png";
import bn4 from "../../assets/images/bn4.png";
import bn5 from "../../assets/images/bn5.png";
import bn6 from "../../assets/images/bn6.png";
import bn7 from "../../assets/images/bn7.png";
import bn8 from "../../assets/images/bn8.png";
import bn9 from "../../assets/images/bn9.png";
import bn10 from "../../assets/images/bn10.png";
import bn11 from "../../assets/images/bn11.png";
import bn12 from "../../assets/images/bn12.png";
import bn13 from "../../assets/images/bn13.png";
import bn14 from "../../assets/images/bn14.jpg";
import bn15 from "../../assets/images/bn15.jpg";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import ProductsPage from "../ProductsPage/ProductsPage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, paddingRight: "50px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex: "1", paddingLeft: "30px" }}
      onClick={onClick}
    />
  );
}
const HomePage = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ background: "#F4F8FA", paddingBottom: "50px" }}>
      <div className="container">
        <div className="container text-center">
          <div className="row " style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col-3">
              <ul
                className="dropdown-menu "
                style={{ display: "block", color: "black" }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    style={{ fontSize: "14px", padding: "5px 5px" }}
                  >
                    <i className="bi bi-gift" style={{ padding: "5px" }}></i>
                    Tổng Hợp Khuyến Mãi
                  </a>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i className="bi bi-cpu" style={{ padding: "0 7px" }}></i>
                      Linh Kiện Mới
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "135px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu">
                      <div className=" text-center">
                        <div
                          className="row align-items-start"
                          style={{ width: "870px" }}
                        >
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                paddingLeft: "10px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              CPU-Bộ vi xử lý
                            </p>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Intel thế hệ 14
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Intel thế hệ 13
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Intel thế hệ 12
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Intel thế hệ 11
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Intel thế hệ 10
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                AMD 8000 Series
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                AMD 7000 Series
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                AMD 5000 Series
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                AMD 4000 Series
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                AMD 3000 Series
                              </a>
                            </li>

                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                CPU Tray-No Box
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                CPU Intel
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                CPU AMD
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                paddingLeft: "7px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              Mainboard-Bo mạch chủ
                            </p>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Mainboard Intel
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Mainboard AMD
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Mainboard theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Mainboard theo socket
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Mainboard kích thước
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>

                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                paddingLeft: "8px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              SSD-HDD
                            </p>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                SSD 120GB - 128GB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                SSD 240GB - 256GB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                SSD 480GB - 512GB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                SSD 1TB - 2TB - 4TB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                M.2 NVMe Gen 3
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                M.2 NVMe Gen 4
                              </a>
                            </li>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  paddingLeft: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                Ổ cứng theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                HDD 1TB - 2TB - 4TB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ fontSize: "13px" }}
                              >
                                HDD từ 4TB trở lên
                              </a>
                            </li>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  paddingLeft: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                Phụ kiện SSD
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                paddingLeft: "8px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              Case-Thùng máy
                            </p>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  paddingLeft: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                Case theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  paddingLeft: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                Case theo nhu cầu
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  paddingLeft: "10px",
                                  fontSize: "13px",
                                }}
                              >
                                Case theo kích cỡ
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                padding: "10px 0 0 6px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              PSU-Nguồn máy tính
                            </p>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Nguồn theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 400W đến 550W
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 550W đến 650W
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 650W đến 800W
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 800W đến 1000W
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn trên 1000W
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 80 Plus Bronze
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 80 Plus Gold
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Nguồn 80 Plus Platinum
                              </a>
                            </li>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                padding: "10px 0 0 6px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              Bộ nhớ RAM
                            </p>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Ram DDR5
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Ram DDR4 8GB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Ram DDR4 16GB - 32GB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Ram LED RGB
                              </a>
                            </li>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Ram theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Ram theo dung lượng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Ram theo bus
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                padding: "10px 0 0 6px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              VGA-Card màn hình
                            </p>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                VGA NVIDIA GeForce
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <br></br>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                VGA AMD
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                VGA NVIDIA Quadro
                              </a>
                            </li>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                VGA theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                          </div>
                          <div className="col-3" style={{ textAlign: "left" }}>
                            <p
                              style={{
                                padding: "10px 0 0 6px",
                                fontWeight: "bold",
                                fontSize: "13px",
                              }}
                            >
                              Tản nhiệt PC
                            </p>
                            <div className="btn-group dropend">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{
                                  textAlign: "left",
                                  background: "white",
                                  color: "black",
                                  border: "none",
                                  fontSize: "13px",
                                }}
                              >
                                Tản nhiệt theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Tản nhiệt khí
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Tản AIO 240
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Tản AIO 280
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Tản AIO 360
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Fan Led RGB
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Keo tản nhiệt
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="#"
                                style={{ paddingLeft: "8px", fontSize: "13px" }}
                              >
                                Fan case
                              </a>
                            </li>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-diagram-3"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Linh Kiện Cũ
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "142px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-device-ssd"
                        style={{ padding: "0 7px" }}
                      ></i>
                      SSD - HDD - USB
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "113px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-laptop"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Laptop
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "176px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pc-display-horizontal"
                        style={{ padding: "0 7px" }}
                      ></i>
                      PC Gaming - Học Tập
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "86px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pc-display-horizontal"
                        style={{ padding: "0 7px" }}
                      ></i>
                      PC Văn Phòng - Làm Việc
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "64px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pc-display-horizontal"
                        style={{ padding: "0 7px" }}
                      ></i>
                      PC Đồ Họa - Thiết Kế
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "89px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pc-display"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Màn Hình Máy Tính
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "98px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-usb-symbol"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Phụ kiện & Phần mềm
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "81px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-person-wheelchair"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Bàn, Ghế Gaming
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "112px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-headset"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Phím, Chuột, Tai Nghe
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "83px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pin-map"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Thiết Bị Mạng
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "134px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-pci-card-sound"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Thiết Bị Âm Thanh
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "107px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
                <li>
                  <div className="btn-group dropend" style={{ width: "100%" }}>
                    <button
                      type="button"
                      className="btn btn-secondary "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        background: "white",
                        color: "black",
                        border: "none",
                        textAlign: "left",
                        fontSize: "14px",
                        padding: "5px 5px",
                      }}
                    >
                      <i
                        className="bi bi-camera"
                        style={{ padding: "0 7px" }}
                      ></i>
                      Camera, Webcam, Máy in
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "63px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-6"
              style={{
                flex: "1 1 50%",
                boxSizing: "border-box",
                padding: "0 6px",
              }}
            >
              <Slider {...settings}>
                <div>
                  <img
                    src={bn5}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      marginTop: "4px",
                    }}
                    alt="bn5"
                  />
                </div>
                <div>
                  <img
                    src={bn14}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      marginTop: "4px",
                    }}
                    alt="bn14"
                  />
                </div>
                <div>
                  <img
                    src={bn15}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      marginTop: "4px",
                    }}
                    alt="bn15"
                  />
                </div>
              </Slider>
            </div>
            <div
              className="col-3"
              style={{
                flex: "1 1 25%",
                boxSizing: "border-box",
                padding: "0 6px",
              }}
            >
              <img
                src={bn6}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "3px",
                }}
                alt="bn6"
              />
              <img
                src={bn7}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  paddingTop: "7px",
                }}
                alt="bn7"
              />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row align-items-center" style={{ marginTop: "5px" }}>
            <div className="col-3">One of three columns</div>
            <div className="col-3">
              <img
                src={bn8}
                style={{
                  maxWidth: "100%",
                }}
                alt="bn8"
              />
            </div>
            <div className="col-3">
              <img
                src={bn9}
                style={{
                  maxWidth: "100%",
                }}
                alt="bn9"
              />
            </div>
            <div className="col-3" style={{ marginLeft: "-6px" }}>
              <img
                src={bn10}
                style={{
                  maxWidth: "100%",
                }}
                alt="bn10"
              />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div
            className="row align-items-start"
            style={{ margin: "5px -13px" }}
          >
            <div className="col-3">
              <img
                src={bn1}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn1"
              />
            </div>
            <div className="col-3">
              <img
                src={bn2}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn2"
              />
            </div>
            <div className="col-3">
              <img
                src={bn3}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn3"
              />
            </div>
            <div className="col-3">
              <img
                src={bn4}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn4"
              />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-4">
              <img
                src={bn11}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn11"
              />
            </div>
            <div className="col-4">
              <img
                src={bn12}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn12"
              />
            </div>
            <div className="col-4">
              <img
                src={bn13}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="bn13"
              />
            </div>
          </div>
        </div>
      </div>
      <ProductsPage />

      <div className="container text-center">
        <div
          className="row align-items-start"
          style={{
            paddingLeft: "0",
            boxSizing: "border-box",
            height: "auto",
            marginTop: "380px",
            borderRadius: "3px",
            background: "white",
          }}
        >
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginLeft: "-6px",
                }}
              >
                ƯU ĐÃI HOT{" "}
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                  marginLeft: "-25px",
                }}
              ></i>
            </div>
          </div>
          <a
            href=""
            className="col-6"
            style={{
              textDecoration: "none",
              marginTop: "10px",
              fontSize: "15px",
              paddingLeft: "450px",
              color: "black",
            }}
          >
            XEM TẤT CẢ
          </a>
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col-4">
                <img src={blog1} style={{ maxWidth: "100%", height: "auto" }} />
                <h1
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                    padding: "10px 20px 2px 20px",
                    fontWeight: "normal",
                  }}
                >
                  ĐÓN LỄ CUỒNG NHIỆT - GIÁ GIẢM KỊCH LIỆT
                </h1>
                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "left",
                    padding: "0 20px",
                  }}
                >
                  <i>
                    SIÊU SALE GIẢI PHÓNG - GIẢM ĐẾN 59% Xem chương trình tại đây
                    Tưng bừng đón Đại lễ 30/04 và Quốc tế Lao Động 01/05, STAR
                    tung chương trình siêu sale...
                  </i>
                </p>
                <div
                  style={{
                    marginLeft: "290px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      color: "#E02027",
                      textDecoration: "none",
                    }}
                  >
                    Xem thêm
                  </a>
                  <i
                    className="bi bi-chevron-double-right"
                    style={{ color: "red" }}
                  ></i>
                </div>
              </div>
              <div className="col-4">
                <img src={blog2} style={{ maxWidth: "100%", height: "auto" }} />
                <h1
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                    padding: "10px 20px 2px 20px",
                    fontWeight: "normal",
                  }}
                >
                  TRỢ GIÁ LINH KIỆN NGÀY HỘI GAME FPS
                </h1>
                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "left",
                    padding: "0 20px",
                  }}
                >
                  <i>
                    ĐẾN STAR CHIẾN GAME, KHÔNG LO VỀ GIÁ Săn ngay
                    https://tinhocngoisao.com/NH-FPS Hàng trăm siêu phẩm chiến
                    game FPS với ưu đãi trợ giá đến #14triệu với đa dạng các sản
                    phẩm như:...
                  </i>
                </p>
                <div
                  style={{
                    marginLeft: "290px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      color: "#E02027",
                      textDecoration: "none",
                    }}
                  >
                    Xem thêm
                  </a>
                  <i
                    className="bi bi-chevron-double-right"
                    style={{ color: "red" }}
                  ></i>
                </div>
              </div>
              <div className="col-4">
                <img src={blog3} style={{ maxWidth: "100%", height: "auto" }} />
                <h1
                  style={{
                    fontSize: "15px",
                    textAlign: "left",
                    padding: "10px 20px 2px 20px",
                    fontWeight: "normal",
                  }}
                >
                  TOP SELLER - GIÁ RẺ BẤT NGỜ{" "}
                </h1>
                <p
                  style={{
                    fontSize: "13px",
                    textAlign: "left",
                    padding: "0 20px",
                  }}
                >
                  <i>
                    Ưu đãi HOT đánh bay nắng nóng, #GIÁ_THẬT_GIẢM_THẬT giảm đến
                    #PHÂN_NỬA_GIÁ ở #tất_cả_các_ngành_hàng: Tặng combo chuột
                    Logitech + lót chuột/phần mềm Windows #chỉ_từ 1790K Gear,
                    ghế - SIÊU RẺ ...
                  </i>
                </p>
                <div
                  style={{
                    marginLeft: "290px",
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "10px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      color: "#E02027",
                      textDecoration: "none",
                    }}
                  >
                    Xem thêm
                  </a>
                  <i
                    className="bi bi-chevron-double-right"
                    style={{ color: "red" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
