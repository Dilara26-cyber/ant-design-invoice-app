import { useState } from "react";
import { Table, Space, Input, Button, Row, Col } from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import { data, columns } from "../data";
import "antd/dist/antd.css";
const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = ({ target }) => setSearchTerm(target.value);
  console.log(data.filter((d) => d.service.includes("a")));
  return (
    <>

        <Row justify="space-between">
          <Col >
            <Input.Search
              style={{ width: "320px" }}
              placeholder="Fatura Ara"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Button icon={<FilterOutlined />}></Button>
            <Button icon={<DownloadOutlined />} style={{marginLeft: "1em"}}/>
          </Col>
        </Row>
      <Table
        columns={columns}
        dataSource={
          searchTerm === ""
            ? data
            : data.filter((d) => d.service.toLowerCase().includes(searchTerm))
        }
        rowSelection={true}
        pagination={{ pageSize: 8 }}
        filters={true}
      />
    </>
  );
};

export default TableComponent;
