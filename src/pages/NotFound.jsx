import styled from "@emotion/styled";
import { ReactComponent as NotFoundImage } from "../assets/NotFoundText.svg";
import Layout from "../components/layout/Layout";

const ImageContainer = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function NotFound() {
  return (
    <Layout>
      <ImageContainer>
        <NotFoundImage />
      </ImageContainer>
    </Layout>
  );
}
