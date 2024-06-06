import React, { useState } from "react";
import pro from "../../assets/images/pro.png";
import dmsp1 from "../../assets/images/dmsp1.png";
import "./ProductsPage.scss";
const ProductsPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-24px",
                }}
              >
                PC GAMING
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: "7px" }}>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Gaming Standard
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Thiết kế/Đồ họa
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Giả lập NOX
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-24px",
                }}
              >
                PC VĂN PHÒNG
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-24px",
                }}
              >
                LAPTOP GAMING
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-24px",
                }}
              >
                LAPTOP VĂN PHÒNG
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                MÀN HÌNH
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                CPU INTEL
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                CPU AMD
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                MAINBOARD
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                CARD MÀN HÌNH - VGA
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                RAM
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "20px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                Ổ CỨNG SSD/HDD VÀ THIẾT BỊ LƯU TRỮ
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div
            className="col-6"
            style={{ marginTop: "7px", paddingLeft: "182px" }}
          >
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ văn phòng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Máy bộ hãng
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{}}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              paddingTop: "30px",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "50px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                THÙNG MÁY - CASE{" "}
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: "7px" }}>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Gaming Standard
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Thiết kế/Đồ họa
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Giả lập NOX
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div className="card" style={{ width: "19rem" }}>
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "19rem" }}>
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "50px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                NGUỒN MÁY TÍNH - PSU
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-24px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: "7px" }}>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Gaming Standard
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Thiết kế/Đồ họa
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Giả lập NOX
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "50px",
          borderRadius: "3px",
          background: "white",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                GEAR & BÀN GHẾ GAMING
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: "7px" }}>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Gaming Standard
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Thiết kế/Đồ họa
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              PC Giả lập NOX
            </a>
            <a
              href="#"
              className="btn btn-outline-dark"
              style={{
                padding: "5px 15px",
                margin: "0 5px",
                border: "1px solid #ccc",
                borderRadius: "30px",
                fontSize: "13px",
              }}
            >
              Xem tất cả
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row align-items-start">
          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{
              width: "19rem",
              borderStyle: "none",
              borderRight: "1px solid #ccc",
              borderRadius: "0",
            }}
          >
            <img
              src={pro}
              className="card-img-top"
              style={{ paddingTop: "6px" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                PC Gaming STAR CHICKEN MINI | GT 1030, Intel
              </h5>
              <p style={{ color: "red", fontSize: "13px", paddingTop: "10px" }}>
                6,999,000₫
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{
          paddingLeft: "0",
          boxSizing: "border-box",
          height: "45px",
          marginTop: "50px",
          borderRadius: "3px",
          background: "white",
          marginBottom: "120px",
        }}
      >
        <div className="row">
          <div className="col-6">
            <div style={{ display: "flex", alignItems: "start" }}>
              <a
                href="#"
                className="btn btn-danger"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginRight: "-25px",
                }}
              >
                DANH MỤC SẢN PHẨM
              </a>
              <i
                className="bi bi-caret-right-fill"
                style={{
                  fontSize: "60px",
                  marginTop: "-25px",
                  color: "#DC3545",
                  width: "30px",
                }}
              ></i>
            </div>
          </div>
          <div className="col-6"></div>
          <div
            className="container"
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div
              className="row"
              style={{
                marginLeft: "0",
                background: "white",
                fontSize: "14px",
              }}
            >
              <div
                className={`col ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="col-content">
                  <img src={dmsp1} alt="dmsp1" />
                  <p>VGA</p>
                </div>
              </div>
              <div
                className="col-content"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Mainboard - Bo mạch chủ</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>CPU - Bộ vi xử lý</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Ram máy tính</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Tản nhiệt PC</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Laptop</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>PC - Máy tính</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Màn hình</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Ổ cứng PC</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Case - Thùng máy</p>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div
              className="row"
              style={{
                marginLeft: "0",
                background: "white",
                fontSize: "14px",
              }}
            >
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>PSU - Nguồn máy tính</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Bàn phím</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Chuột</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Tai nghe</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Ghế</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Loa máy tính</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Thiết bị mạng</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Thiết bị văn phòng</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Phần mềm - Key</p>
              </div>
              <div
                className="col"
                style={{
                  flex: "1",
                  borderRight: "1px solid #F5F5F5",
                  borderBottom: "1px solid #F5F5F5",
                }}
              >
                <img src={dmsp1} style={{ width: "100%" }} />
                <p>Camera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
