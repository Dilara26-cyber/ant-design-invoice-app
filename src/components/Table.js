import React from "react";
import { Table, Radio, Divider } from "antd";
import { data, columns } from "../data";
import "antd/dist/antd.css";
const TableComponent = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableComponent;
