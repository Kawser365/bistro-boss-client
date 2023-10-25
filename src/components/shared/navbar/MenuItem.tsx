import { Grid, Menu } from "antd";
const { useBreakpoint } = Grid;

const MenuItem = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="menu">
        <a href="">our menu</a>
      </Menu.Item>
      <Menu.Item key="shop">
        <a href="">our shop</a>
      </Menu.Item>
      <Menu.Item key="dashboard">
        <a href="">dashboard</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="">Contact Us</a>
      </Menu.Item>
      <Menu.Item key="login">
        <a href="">login</a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuItem;
