import { useState } from "react";
import { Table, Select, Input, Button, Row, Col, Popover } from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import { data, columns } from "../data";
import "antd/dist/antd.css";

const filterSelection = ["Servis", "Tarih", "Tutar", "Durum"];
const equalityData = {
  Servis: ['Eşittir', 'Eşit Değildir'],
  Tarih: ['Eşittir', 'Eşit Değildir', "Büyüktür", "Küçüktür", "Büyük veya Eşittir", "Küçük veya Eşittir"],
  Tutar: ['Eşittir', 'Eşit Değildir', "Büyüktür", "Küçüktür", "Büyük veya Eşittir", "Küçük veya Eşittir"],
  Durum:['Eşittir', 'Eşit Değildir'],
};
const valueData = {
  Servis: ["DSP", "DMP", "Exchange", "SSP","Verification"],
  Tarih: [...data.map(d => d.date)],
  Tutar: [100, 200,300,400,500],
  Durum:["Odendi", "Odenmedi", "Bekliyor"],
}
const TableComponent = () => {
  const { Option } = Select;
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = ({ target }) => setSearchTerm(target.value);
  const [selection, setSelection] = useState(equalityData[filterSelection[0]]);
  const [secondSelection, setSecondSelection] =useState(equalityData[filterSelection[0]][0]);
  const [lastly, setLastly] = useState(valueData[filterSelection[0]]);
  const [last, setLast] = useState(valueData[filterSelection[0]][0])

  const handleProvinceChange = value => {
    setSelection(equalityData[value]);
    setSecondSelection(equalityData[value][0]);
    setLastly(valueData[value])
    setLast(valueData[value][0])
  };

  const onSecondChange = value => setSecondSelection(value);
  const onLastChange = value => setLast(value)
  const content = (
    <>
     <Select defaultValue={filterSelection[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {filterSelection.map(select => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondSelection} onChange={onSecondChange}>
        {selection.map(select => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={last} onChange={onLastChange}>
        {lastly.map(select => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
  </>
  );
 
  return (
    <>
        <Row justify="space-between" style={{margin: "2em 0"}}>
          <Col >
            <Input.Search
              style={{ width: "320px" }}
              placeholder="Fatura Ara"
              onChange={handleChange}
            />
          </Col>
          <Col>
          <Popover content={content} placement="left" title="Filtre Ekle" trigger="click">
            <Button icon={<FilterOutlined />}></Button>
          </Popover>
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
