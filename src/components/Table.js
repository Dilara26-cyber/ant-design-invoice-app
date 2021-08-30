import { Table } from "antd";
import { data, columns } from "../data";
import "antd/dist/antd.css";
const TableComponent = () => {

  return (
    <>
      <Table columns={columns} dataSource={data} rowSelection={true} />
    </>
  );
};

export default TableComponent;
