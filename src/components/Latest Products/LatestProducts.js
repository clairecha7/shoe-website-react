import React from "react";
import CardContainer from "../Card/CardContainer";
import { data } from "../../helper/data";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LatestProducts() {
  return (
    <>
      <h1 className="latest-title p-5">LATEST PRODUCTS</h1>
      <Row className="justify-content-center">
        {data.map((item) => (
          <Col sm={12} md={6} lg={4} xl={3} key={item.id} className="mb-3">
            {/* <Link to={`/shoe/${item.id}`}> */}
            <CardContainer product={item} />
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default LatestProducts;
