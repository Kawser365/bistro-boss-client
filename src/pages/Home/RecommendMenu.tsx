import { Button, Card } from "antd";
import Image from "next/image";
const { Meta } = Card;
const RecommendMenu = ({ item }: any) => {
  const { name, image, recipe } = item;
  return (
    <div>
      <Card
        style={{ width: "100%" }}
        cover={
          <Image
            alt="example"
            height={280}
            width={340}
            src={image}
            style={{ objectFit: "cover" }}
          />
        }
      >
        <Meta
          style={{ textAlign: "center" }}
          title={name}
          description={recipe}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          <Button
            type="primary"
            style={{
              backgroundColor: "#fbb034",
              color: "#fff",
              height: "35px",
            }}
          >
            Add to cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default RecommendMenu;
