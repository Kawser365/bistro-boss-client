"use client";

import { Grid } from "antd";

const { useBreakpoint } = Grid;
interface TProps {
  header: string;
  subheader: string;
}
const SectionTitle = ({ header, subheader }: TProps) => {
  const { lg } = useBreakpoint();
  return (
    <div
      style={
        lg
          ? {
              margin: "auto",
              textAlign: "center",
              width: "33.333333%",
            }
          : {
              margin: "auto",
              textAlign: "center",
              width: "100%",
            }
      }
    >
      <p style={{ color: "#fbb034" }}>--- {subheader} ---</p>
      <h1
        style={{
          textTransform: "uppercase",
          borderTop: "1px solid #f3f4f7",
          borderBottom: "1px solid #f3f4f7",
          padding: "10px 0px",
        }}
      >
        {header}
      </h1>
    </div>
  );
};

export default SectionTitle;
