import { Col, Card } from "antd";
import { Product } from "./../duck/types";

const { Meta } = Card;

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const { name, description, image } = product;
  return (
    <Col span={8} className="p-3">
      <Card hoverable cover={<img alt="example" src={image} />}>
        <Meta title={name} description={description} />
      </Card>
    </Col>
  );
}
