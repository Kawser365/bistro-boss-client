"use client";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Flex, Grid } from "antd";
import RecommendMenu from "./RecomedMenu/RecommendMenu";
const { useBreakpoint } = Grid;
const menu = [
  {
    _id: "642c155b2c4774f05c36eeaa",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "salad",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36eeb9",
    name: "Haddock",
    recipe:
      "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
    category: "drinks",
    price: 14.7,
  },
  {
    _id: "642c155b2c4774f05c36ee7c",
    name: "Escalope de Veau",
    recipe:
      "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    image:
      "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
    category: "popular",
    price: 14.5,
  },
];
const CheffRecommend = () => {
  const { lg } = useBreakpoint();
  return (
    <section style={{ marginTop: "50px" }}>
      <SectionTitle
        header="cheff recommends"
        subheader="Should try"
      ></SectionTitle>
      {lg ? (
        <Flex gap="large">
          {menu.map((item: any) => (
            <RecommendMenu key={item?._id} item={item} />
          ))}
        </Flex>
      ) : (
        <Flex gap="large" vertical>
          {menu.map((item: any) => (
            <RecommendMenu key={item?._id} item={item} />
          ))}
        </Flex>
      )}
    </section>
  );
};

export default CheffRecommend;
