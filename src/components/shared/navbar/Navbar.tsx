import { MenuFoldOutlined } from "@ant-design/icons";
import { Drawer, Grid, Layout } from "antd";
import { useState } from "react";
import MenuItem from "./MenuItem";
const { Header } = Layout;
const { useBreakpoint } = Grid;
const Navbar = () => {
  const { md } = useBreakpoint();
  const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="" style={{ textDecoration: "none", color: "#fbb034" }}>
          Bistro Boss
        </a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <MenuItem />
        </div>
        {md ? (
          ""
        ) : (
          <>
            <MenuFoldOutlined
              className="barsMenu"
              style={{ color: "#fbb034" }}
              onClick={showDrawer}
            >
              <span className="barsBtn"></span>
            </MenuFoldOutlined>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              width={250}
            >
              <MenuItem />
            </Drawer>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
