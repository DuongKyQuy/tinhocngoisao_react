import React, { useState, useRef, useEffect } from "react";
import "./HeaderComponent.scss";
import logoHeader from "../../assets/images/logo.png";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleMouseLeave(event) {
      // Kiểm tra nếu con trỏ chuột không nằm trong dropdown menu hoặc nút "Bảng giá", thì ẩn dropdown menu
      if (!dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container">

        <div className="container text-center align-items-center">
          <div className="row align-items-start">
            <div className="col-3">
              <img
                src={logoHeader}
                style={{ width: "100px", marginRight: "30px" }}
              />
            </div>
            <div className="col-5 align-self-center">
              <div className="input-group" style={{ height: "32px" }}>
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Bạn tìm gì..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                  style={{ background: "#EDEDED", fontSize: "14px" }}
                />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-mdb-ripple-init
                  style={{
                    background: "#E02027",
                    color: "white",
                    border: "none",
                    fontSize: "14px",
                  }}
                >
                  <i className="bi bi-search" style={{ color: "white" }}></i>{" "}
                  Tìm kiếm
                </button>
              </div>
            </div>
            <a href="/login"
              className="col-2"
              style={{ marginRight: "-40px", marginLeft: "30px" }}
            >
              <div className="dropdown" style={{ marginTop: "27px" }}>
                <i
                  className="bi bi-person-fill"
                  style={{
                    fontSize: "30px",
                    color: "#7C7575",
                  }}
                ></i>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    background: "white",
                    color: "grey",
                    fontSize: "14px",
                    border: "none",
                    textAlign: "left",
                    marginBottom: "14px",
                  }}
                >
                  Đăng ký/Đăng nhập
                  <br />
                  <b>Tài khoản</b>
                </button>

                <ul
                  className="dropdown-menu"
                  style={{
                    marginLeft: "-75px",
                    marginTop: "-5px",
                    width: "210px",
                  }}
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textAlign: "center",
                        background: "#FDD835",
                        borderRadius: "3px",
                        width: "200px",
                        margin: "0 4px",
                        fontSize: "14px",
                        height: "35px",
                        alignContent: "center",
                        color: "black",
                      }}
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textAlign: "center",
                        background: "#FDD835",
                        borderRadius: "3px",
                        width: "200px",
                        margin: "5px 4px",
                        fontSize: "14px",
                        height: "35px",
                        alignContent: "center",
                        color: "black",
                      }}
                    >
                      Tạo tài khoản
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        background: "#3B5998",
                        borderRadius: "3px",
                        width: "200px",
                        margin: "5px 4px",
                        fontSize: "14px",
                        color: "white",
                        height: "35px",
                        alignContent: "center",
                      }}
                    >
                      <i
                        className="bi bi-facebook"
                        style={{ paddingRight: "3px" }}
                      ></i>
                      Đăng nhập bằng Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{
                        boxSizing: "border-box",
                        textAlign: "center",
                        background: "#DF4A32",
                        borderRadius: "3px",
                        width: "200px",
                        margin: "5px 4px",
                        fontSize: "14px",
                        height: "35px",
                        color: "white",
                        alignContent: "center",
                      }}
                    >
                      <i
                        className="bi bi-google"
                        style={{ paddingRight: "5px" }}
                      ></i>
                      Đăng nhập bằng Google
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <div className="col-2 align-self-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <a href="/cart" style={{ textDecoration: "none" }}>
                  <i
                    className="bi bi-cart3"
                    style={{
                      fontSize: "30px",
                      paddingLeft: "10px",
                      color: "#D8D8D8",
                      verticalAlign: "middle", // Căn giữa theo chiều dọc
                    }}
                  ></i>
                </a>
                <span
                  className="badge"
                  style={{
                    position: "absolute",
                    top: "30%",
                    right: "0",
                    transform: "translate(50%, -50%)",
                    backgroundColor: "#D31311",
                    borderRadius: "50%",
                    padding: "5px 8px", // Điều chỉnh khoảng cách giữa chữ và viền
                  }}
                >
                  0
                </span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#7C7575",
                  marginLeft: "10px", // Điều chỉnh khoảng cách giữa biểu tượng và chữ
                  verticalAlign: "middle", // Căn giữa theo chiều dọc
                }}
              >
                Giỏ hàng
              </span>
            </div>
          </div>
        </div>
        
        <div className="row g-0">
          <div className="col-3 p-1">
            <div className="dropdown ">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  background: "#505050",
                  width: "100%",
                  padding: "9px 0",
                }}
              >
                <i className="bi bi-list" style={{ padding: "5px" }}></i>
                DANH MỤC SẢN PHẨM
              </button>
              <ul
                className="dropdown-menu " 
                style={{  width: "100%", color: "black" }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    style={{ fontSize: "14px", padding:'5px 5px' }}
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
                        padding:'5px 5px'
                      }}
                    >
                      <i className="bi bi-cpu" style={{ padding: "0 7px" }}></i>
                      Linh Kiện Mới
                      <i
                        className="bi bi-chevron-right"
                        style={{ paddingLeft: "135px", fontSize: "10px" }}
                      ></i>
                    </button>
                    <ul className="dropdown-menu" >
                      <div className=" text-center" >
                        <div className="row align-items-start" style={{width:'870px'}}>
                          <div className="col-3" style={{ textAlign: "left"}}>
                            <p style={{paddingLeft:'10px',fontWeight:'bold',fontSize:'13px'}}>CPU-Bộ vi xử lý</p>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Intel thế hệ 14
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                Intel thế hệ 13
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                Intel thế hệ 12
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                Intel thế hệ 11
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                Intel thế hệ 10
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                AMD 8000 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                AMD 7000 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                AMD 5000 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
                                AMD 4000 Series
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px',fontSize:'13px'}}>
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
                                  fontSize:'13px'
                                }}
                              >
                                CPU Tray-No Box
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  fontSize:'13px'
                                }}
                              >
                                CPU Intel
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none"
                                  ,fontSize:'13px'
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
                          <div className="col-3" style={{ textAlign: "left"}}>
                            <p style={{paddingLeft:'7px',fontWeight:'bold',fontSize:'13px'}}>Mainboard-Bo mạch chủ</p>
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
                                  border: "none",fontSize:'13px'
                               
                                }}
                              >
                                Mainboard Intel
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
                                }}
                              >
                                Mainboard AMD
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
                                }}
                              >
                                Mainboard theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
                                }}
                              >
                                Mainboard theo socket
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
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

                          <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{paddingLeft:'8px',fontWeight:'bold',fontSize:'13px'}}>SSD-HDD</p> 
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                SSD 120GB - 128GB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                SSD 240GB - 256GB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                SSD 480GB - 512GB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                SSD 1TB - 2TB - 4TB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                M.2 NVMe Gen 3
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
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
                                  paddingLeft:'10px', fontSize:'13px'
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
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
                                HDD 1TB - 2TB - 4TB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{fontSize:'13px'}}>
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
                                  paddingLeft:'10px', fontSize:'13px'
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
                          <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{paddingLeft:'8px',fontWeight:'bold',fontSize:'13px'}}>Case-Thùng máy</p>
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
                                  paddingLeft:'10px', fontSize:'13px'
                                }}
                              >
                                Case theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  paddingLeft:'10px', fontSize:'13px'
                                }}
                              >
                                
                                Case theo nhu cầu
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  paddingLeft:'10px', fontSize:'13px'
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
                          <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{padding:'10px 0 0 6px',fontWeight:'bold',fontSize:'13px'}}>PSU-Nguồn máy tính</p> 
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
                                  border: "none",fontSize:'13px'
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
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 400W đến 550W
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 550W đến 650W
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 650W đến 800W
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 800W đến 1000W
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn trên 1000W
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 80 Plus Bronze
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 80 Plus Gold
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Nguồn 80 Plus Platinum
                              </a>
                            </li>
                            </div>
                          <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{padding:'10px 0 0 6px',fontWeight:'bold',fontSize:'13px'}}>Bộ nhớ RAM</p>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Ram DDR5
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Ram DDR4 8GB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Ram DDR4 16GB - 32GB 
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
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
                                  fontSize:'13px'
                                }}
                              >
                                Ram theo hãng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
                                }}
                              >
                                Ram theo dung lượng
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
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
                            <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{padding:'10px 0 0 6px',fontWeight:'bold',fontSize:'13px'}}>VGA-Card màn hình</p> 
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
                                  fontSize:'13px'
                                }}
                              >
                                VGA NVIDIA GeForce
                                <i
                                  className="bi bi-chevron-right"
                                  style={{ paddingLeft: "3px" }}
                                ></i>
                              </button>
                              <ul className="dropdown-menu"></ul>
                            </div><br></br>
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
                                  border: "none",fontSize:'13px'
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
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
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
                                  border: "none", fontSize:'13px'
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
                            <div className="col-3" style={{textAlign:'left'}}>
                            <p style={{padding:'10px 0 0 6px',fontWeight:'bold',fontSize:'13px'}}>Tản nhiệt PC</p> 
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
                                  border: "none", fontSize:'13px'
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
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Tản nhiệt khí
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Tản AIO 240
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Tản AIO 280 
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Tản AIO 360 
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Fan Led RGB
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
                                Keo tản nhiệt
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" style={{paddingLeft:'8px', fontSize:'13px'}}>
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
                      }}
                    >
                      <i className="bi bi-laptop" style={{ padding: "0 7px" }}></i>
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
                      }}
                    >
                      <i className="bi bi-headset" style={{ padding: "0 7px" }}></i>
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
                        padding:'5px 5px'
                      }}
                    >
                      <i className="bi bi-pin-map" style={{ padding: "0 7px" }}></i>
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
                        padding:'5px 5px'
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
                        padding:'5px 5px'
                      }}
                    >
                      <i className="bi bi-camera" style={{ padding: "0 7px" }}></i>
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
          </div>
          <div className="col-12 col-lg-9 p-1"> {/* Adjusted column class for responsiveness */}
  <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#9F9F9F", borderRadius: "3px" }}>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> {/* Added navbar toggler button for smaller screens */}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav" style={{ fontSize: "15px" }}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>
              <i className="bi bi-wrench-adjustable" style={{ padding: "5px" }}></i>
              Lắp đặt phòng net
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "10px" }}>
            <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>
              <i className="bi bi-currency-dollar"></i>
              Trả góp
            </a>
          </li>
          <div onMouseEnter={() => setShowDropdown(true)} ref={dropdownRef}>
      <a className="nav-link" href="#" style={{ color: "white" }}>
        <i className="bi bi-cash-coin" style={{ paddingLeft: "9px", paddingRight:'3px' }}></i>
        Bảng giá
      </a>
      {showDropdown && (
        <ul className="dropdown-menu show" style={{ fontSize: "13px", marginTop: "5px", width:'150px' }}>
          <li>
            <a className="dropdown-item specific-class" href="#" style={{ boxSizing: "border-box", marginTop: "-5px", borderBottom:"1px solid #ccc"}}>Bảng giá mua cũ</a>
          </li>
          <li>
            <a className="dropdown-item specific-class" href="#" style={{ boxSizing: "border-box", borderBottom:"1px solid #ccc" }}>Bảng giá bán</a>
          </li>
          <li>
            <a className="dropdown-item specific-class" href="#" style={{ boxSizing: "border-box", marginBottom:'-5px' }}>Bảng giá outlet</a>
          </li>
        </ul>
      )}
    </div>

          <li className="nav-item" style={{ paddingLeft: "10px" }}>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <i className="bi bi-sliders2" style={{ padding: "2px" }}></i>
              Xây dựng cấu hình
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "10px" }}>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <i className="bi bi-shield" style={{ padding: "2px" }}></i>
              Chính sách bảo hành
            </a>
          </li>
          <li className="nav-item" style={{ paddingLeft: "10px" }}>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <i className="bi bi-database-check" style={{ padding: "2px" }}></i>
              Thiết bị mining
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

        </div>

    </div>
    
  );
};

export default HeaderComponent;
