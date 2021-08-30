import React from "react";
import { Table, Radio, Divider } from "antd";
import {data} from "../data"
import "antd/dist/antd.css";
const TableComponent = () => {
    console.log(data)
  const columns = [
    {
      title: "Servis Adı",
      dataIndex: "service",
    },
    {
      title: "Fatura Numarası",
      dataIndex: "invoice_id",
    },
    {
      title: "Tarih",
      dataIndex: "date",
    },
    {
      title: "Tutar",
      dataIndex: "amount",
    },
    {
      title: "Durum",
      dataIndex: "status",
    },
  ];

  return <>
      <Table
        columns={columns}
        dataSource={data}
      />
  </>;
};

export default TableComponent;
