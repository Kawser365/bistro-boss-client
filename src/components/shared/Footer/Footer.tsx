import { CopyrightOutlined } from "@ant-design/icons";
import { Col, Grid, Row } from "antd";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const { useBreakpoint } = Grid;
const Footer = () => {
  const { lg } = useBreakpoint();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div style={{ textAlign: "center", color: "#ffffff" }}>
      <Row>
        <Col
          span={12}
          style={
            lg
              ? { padding: "50px", backgroundColor: "#1F2937" }
              : { padding: "30px", backgroundColor: "#1F2937" }
          }
        >
          <h3>Contact US</h3>
          <div style={{ marginTop: "20px" }}>
            <p>123 ABS Street, Uni 121 Bangladesh</p>
            <p>+880 123546</p>
            <p>Mon-Fri: 08:00-10:00</p>
            <p>Sat-Sun: 09:00-11:00</p>
          </div>
        </Col>
        <Col
          span={12}
          style={
            lg
              ? { padding: "50px", backgroundColor: "#111827" }
              : { padding: "30px", backgroundColor: "#111827" }
          }
        >
          <h3>Follow US</h3>
          <p style={{ margin: "20px 0px" }}>Join us on social media</p>
          <div>
            <FaFacebookF
              style={{ height: "20px", width: "20px", color: "#ffffff" }}
            ></FaFacebookF>
            <FiInstagram
              style={{
                height: "20px",
                width: "20px",
                margin: "0px 10px",
                color: "#ffffff",
              }}
            ></FiInstagram>
            <AiOutlineTwitter
              style={{ height: "20px", width: "20px", color: "#ffffff" }}
            ></AiOutlineTwitter>
          </div>
        </Col>
      </Row>
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#000000",
          color: "#dfdfdf",
        }}
      >
        <p style={{ margin: "10px" }}>
          <CopyrightOutlined /> {currentYear} Bistro Boss all rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
