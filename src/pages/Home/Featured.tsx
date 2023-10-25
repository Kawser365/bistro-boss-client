import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button, Flex, Grid } from "antd";
import Image from "next/image";
import featured from "../../assets/home/featured.jpg";
import "./style.css";
const { useBreakpoint } = Grid;
const Featured = () => {
  const { lg } = useBreakpoint();
  return (
    <section className="featured">
      <div style={{ paddingTop: "20px" }}>
        <SectionTitle
          subheader="check it out"
          header="From our menu"
        ></SectionTitle>
      </div>
      {lg ? (
        <Flex
          gap="large"
          align="center"
          style={lg ? { padding: "80px 300px" } : { padding: "80px 0px" }}
          className="featurebg"
        >
          <Image
            alt="Featured"
            src={featured}
            style={{ objectFit: "cover" }}
            height={200}
            width={200}
          />
          <div style={{ color: "#000000" }}>
            <h3>March 20, 2023</h3>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button type="primary">Read More</Button>
          </div>
        </Flex>
      ) : (
        <Flex
          gap="large"
          align="center"
          justify="center"
          style={{ padding: "30px 0px" }}
          className="featurebg"
          vertical
        >
          <Image
            alt="Featured"
            src={featured}
            style={{ objectFit: "cover" }}
            height={200}
            width={200}
          />
          <div style={{ color: "#000000", textAlign: "center" }}>
            <h3>March 20, 2023</h3>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button type="primary">Read More</Button>
          </div>
        </Flex>
      )}
    </section>
  );
};

export default Featured;
