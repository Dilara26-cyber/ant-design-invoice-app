
import { Table } from "antd";
import { data, columns } from "../data";
import "antd/dist/antd.css";
const TableComponent = () => {
    const rowSelection = {
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };

  return (
    <>
      <Table columns={columns} dataSource={data} rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}/>
    </>
  );
};

export default TableComponent;
