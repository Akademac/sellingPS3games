import "../styles/footer.css";
const logo = window.location.origin + "/sellingPS3games/assets/Logoes/ps__logo.png";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <img src={logo} alt="PS Logo" />
      <div className="footer__sm">
        <i className="fab fa-brands fa-instagram"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
      <div className="all__rights">
          <p>@ 2024, WEBELDES, All rights reserved...</p>
      </div>
    </div>
  );
};

export default Footer;
