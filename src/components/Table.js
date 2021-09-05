import { useState } from "react";
import {
  Table,
  Select,
  Input,
  Button,
  Row,
  Col,
  Popover,
  Space,
  Tag,
} from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import { data, columns } from "../data";
import "antd/dist/antd.css";

const filterSelection = ["Servis", "Tarih", "Tutar", "Durum"];
const equalityData = {
  Servis: ["Eşittir", "Eşit Değildir"],
  Tarih: [
    "Eşittir",
    "Eşit Değildir",
    "Büyüktür",
    "Küçüktür",
    "Büyük veya Eşittir",
    "Küçük veya Eşittir",
  ],
  Tutar: [
    "Eşittir",
    "Eşit Değildir",
    "Büyüktür",
    "Küçüktür",
    "Büyük veya Eşittir",
    "Küçük veya Eşittir",
  ],
  Durum: ["Eşittir", "Eşit Değildir"],
};
const valueData = {
  Servis: ["DSP", "DMP", "Exchange", "SSP", "Verification"],
  Tarih: [...data.map((d) => d.date)],
  Tutar: [100, 200, 300, 400, 500],
  Durum: ["Odendi", "Odenmedi", "Bekliyor"],
};
const TableComponent = () => {
  const { Option } = Select;
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = ({ target }) => setSearchTerm(target.value);
  const [selection, setSelection] = useState(equalityData[filterSelection[0]]);
  const [secondSelection, setSecondSelection] = useState(
    equalityData[filterSelection[0]][0]
  );
  const [lastly, setLastly] = useState(valueData[filterSelection[0]]);
  const [last, setLast] = useState(valueData[filterSelection[0]][0]);
  const [renderValue, setRenderValue] = useState();
  const handleProvinceChange = (value) => {
    setSelection(equalityData[value]);
    setSecondSelection(equalityData[value][0]);
    setLastly(valueData[value]);
    setLast(valueData[value][0]);
    setRenderValue(value);
  };

  const onSecondChange = (value) => setSecondSelection(value);
  const onLastChange = (value) => setLast(value);
  const filteredData =
  searchTerm === "" ? 
    secondSelection === "Eşittir"
      ? data.filter((d) => Object.values(d).includes(last))
      : secondSelection === "Eşit Değildir"
      ? data.filter((d) => Object.values(d).indexOf(last) === -1)
      : secondSelection === "Büyüktür" && renderValue === "Tarih"
      ? data.filter((d) => Date.parse(d.date) > Date.parse(last))
      : secondSelection === "Küçüktür" && renderValue === "Tarih"
      ? data.filter((d) => Date.parse(d.date) < Date.parse(last))
      : secondSelection === "Büyük veya Eşittir" && renderValue === "Tarih"
      ? data.filter((d) => Date.parse(d.date) >= Date.parse(last))
      : secondSelection === "Küçük veya Eşittir" && renderValue === "Tarih"
      ? data.filter((d) => Date.parse(d.date) <= Date.parse(last))
      : secondSelection === "Küçük veya Eşittir" && renderValue === "Tutar"
      ? data.filter((d) => d.amount <= last)
      : secondSelection === "Büyük veya Eşittir" && renderValue === "Tutar"
      ? data.filter((d) => d.amount >= last)
      : secondSelection === "Büyüktür" && renderValue === "Tutar"
      ? data.filter((d) => d.amount > last)
      : secondSelection === "Küçüktür" && renderValue === "Tutar"
      ? data.filter((d) => d.amount < last)
      : data.filter((d) => d.service.toLowerCase().includes(searchTerm)) : data
console.log(searchTerm)
  const content = (
    <>
      <Select
        defaultValue={filterSelection[0]}
        style={{ width: 100, marginRight: 10 }}
        onChange={handleProvinceChange}
      >
        {filterSelection.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Select
        style={{ width: 100, marginRight: 10 }}
        value={secondSelection}
        onChange={onSecondChange}
      >
        {selection.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Select style={{ width: 100 }} value={last} onChange={onLastChange}>
        {lastly.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Row justify="end" style={{marginTop: 10}}>
         <Button onClick={() => setShow(false)} size={"small"} style={{marginRight:10}}>İptal</Button>
      <Button type="primary" onClick={() => setShow(true)} size={"small"}>Ekle</Button>
      </Row>
     
    </>
  );
  const equalitySign =
    secondSelection === "Eşittir"
      ? "="
      : secondSelection === "Eşit Değildir"
      ? "!=="
      : secondSelection === "Küçüktür"
      ? "<"
      : secondSelection === "Büyüktür"
      ? ">"
      : secondSelection === "Küçük veya Eşittir"
      ? "<="
      : secondSelection === "Büyük veya Eşittir"
      ? ">="
      : "";
  return (
    <>
      <Row justify="space-between" style={{ margin: "2em 0" }}>
        <Col>
          <Input.Search
            style={{ width: "320px" }}
            placeholder="Fatura Ara"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Popover
            content={content}
            placement="left"
            title="Filtre Ekle"
            trigger="hover"
          >
            <Button icon={<FilterOutlined />}></Button>
          </Popover>
          <Button icon={<DownloadOutlined />} style={{ marginLeft: "1em" }} />
        </Col>
      </Row>
      {show && (
        <Space
          style={{ padding: "1em 0.5em", background: "white", width: "100%" }}
        >
          <Tag closable onClose={(e) => e.preventDefault()}>{`${renderValue} ${equalitySign} ${last}`}</Tag>
        </Space>
      )}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowSelection={true}
        pagination={{ pageSize: 8 }}
      />
    </>
  );
};

export default TableComponent;
