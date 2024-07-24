import { Col, Row, Slider, Typography } from "antd";
import { TablePokemon } from "../components/Table";
import { useState } from "react";

export function HomePage() {
  const [items, setItems] = useState(2);
  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 10 }}>
          <h1>Hello Pokemon!</h1>
        </Col>
        <Col md={{ span: 12, offset: 6 }}>
        <Typography.Title level={4}>Number of items per page:</Typography.Title>
        <Slider min={1} max={5} defaultValue={items} onChange={setItems}/>
          <TablePokemon items={items}/>
        </Col>
      </Row>
    </>
  );
}
