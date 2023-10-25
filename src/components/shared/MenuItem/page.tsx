"use client";
import { Flex } from "antd";
import Image from "next/image";

const MenuItem = ({ item }: any) => {
  const { name, image, recipe, price } = item;
  return (
    <Flex gap="large">
      <Image
        src={image}
        style={{ borderRadius: "0px 200px 200px 200px", objectFit: "cover" }}
        height={104}
        width={118}
        alt=""
      />
      <div>
        <h1>{name}----------</h1>
        <p>{recipe}</p>
      </div>
      <p style={{ fontSize: "16px", color: "#fbb034" }}>${price}</p>
    </Flex>
  );
};

export default MenuItem;
