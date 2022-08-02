import "./Footer.scss";

const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company">
          <span className="company-name">P2E Analytics</span>
          <span className="company-motto"> | Your GameFi Hub</span>
        </div>
        <div className="financial-advice">This is not financial advice</div>
      </div>
    </div>
  );
};

export default Footer;
