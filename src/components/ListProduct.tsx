import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "antd";
import ProductItem from "./ProductItem";
import { actFetchData } from "./../duck/action";
import { RootState } from "./../store";
import { Product } from "./../duck/types";
import SkeletonCmp from "./SkeletonCmp";

const arrSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ListProduct() {
  const props = useSelector((state: RootState) => state.productReducer);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const renderListProduct = () => {
    const { loading, data } = props;
    if (loading)
      return arrSkeleton.map((item: number) => <SkeletonCmp key={item} />);

    return data?.map((product: Product) => (
      <ProductItem key={product.id} product={product} />
    ));
  };

  return (
    <div className="container">
      <Row>{renderListProduct()}</Row>
    </div>
  );
}
