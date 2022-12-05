import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section
          id="footer"
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="/" className="me-4 link-secondary">
              <FacebookIcon />
            </a>
            <a href="/" className="me-4 link-secondary">
              <TwitterIcon />
            </a>
            <a href="/" className="me-4 link-secondary">
              <GoogleIcon />
            </a>
            <a href="/" className="me-4 link-secondary">
              <InstagramIcon />
            </a>
            <a href="/" className="me-4 link-secondary">
              <LinkedInIcon />
            </a>
            <a href="/" className="me-4 link-secondary">
              <GitHubIcon />
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i> COMPANY
                  INFO
                </h6>
                <p>
                  <a href="#!" className="text-reset">
                    Как это работает
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Защита покупателя
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Условия оплаты
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Условия использования
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Buyers</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Как сделать заказ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Способы оплаты
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Возврат денежных средств
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Доставка
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i>{" "}
                  Kyrgyzstan, Bishkek
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +996 778
                  889 556
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> +996 554
                  667 332
                </p>
              </div>
            </div>
          </div>
        </section>
        <div id="footer" className="text-center p-4">
          © 2021 Copyright:
        </div>
      </footer>
    </div>
  );
};
export default Footer;
