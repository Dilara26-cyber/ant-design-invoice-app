import { useState, useEffect } from "react";
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
  Typography,
} from "antd";
import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import {
  data,
  columns,
  filterSelection,
  equalityData,
  valueData,
} from "../data";
import "antd/dist/antd.css";

const TableComponent = ({theme}) => {
  // Ant Design Deconstruction
  const { Option } = Select;
  const { Text } = Typography;
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  //Change select options based on first selected option
  const [selection, setSelection] = useState(equalityData[filterSelection[0]]);
  const [secondSelection, setSecondSelection] = useState(
    equalityData[filterSelection[0]][0]
  );
  const [lastly, setLastly] = useState(valueData[filterSelection[0]]);
  const [last, setLast] = useState(valueData[filterSelection[0]][0]);
  const [renderValue, setRenderValue] = useState("Seçiniz");
  //Set filter text coming from search input
  const handleChange = ({ target }) => setSearchTerm(target.value);
  //Set selected filter with select option change
  const handleSelectChange = (value) => {
    setSelection(equalityData[value]);
    setSecondSelection(equalityData[value][0]);
    setLastly(valueData[value]);
    setLast(valueData[value][0]);
    setRenderValue(value);
  };
  const onSecondChange = (value) => setSecondSelection(value);
  const onLastChange = (value) => setLast(value);

  //Close event for tag
  const onClose = () => {
    setShow(false);
    setRenderValue("Seçiniz")
  };

  //Filter data according to state of select and search input, useEffect works as componentDidUpdate
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    searchTerm.length > 0 && renderValue === "Seçiniz"
      ? setFilteredData(
          data.filter((d) => d.service.toLowerCase().includes(searchTerm))
        )
      : secondSelection === "Eşittir"
      ? setFilteredData(data.filter((d) => Object.values(d).includes(last)))
      : secondSelection === "Eşit Değildir"
      ? setFilteredData(
          data.filter((d) => Object.values(d).indexOf(last) === -1)
        )
      : secondSelection === "Büyüktür" && renderValue === "Tarih"
      ? setFilteredData(
          data.filter((d) => Date.parse(d.date) > Date.parse(last))
        )
      : secondSelection === "Küçüktür" && renderValue === "Tarih"
      ? setFilteredData(
          data.filter((d) => Date.parse(d.date) < Date.parse(last))
        )
      : secondSelection === "Büyük veya Eşittir" && renderValue === "Tarih"
      ? setFilteredData(
          data.filter((d) => Date.parse(d.date) >= Date.parse(last))
        )
      : secondSelection === "Küçük veya Eşittir" && renderValue === "Tarih"
      ? setFilteredData(
          data.filter((d) => Date.parse(d.date) <= Date.parse(last))
        )
      : secondSelection === "Küçük veya Eşittir" && renderValue === "Tutar"
      ? setFilteredData(data.filter((d) => d.amount <= last))
      : secondSelection === "Büyük veya Eşittir" && renderValue === "Tutar"
      ? setFilteredData(data.filter((d) => d.amount >= last))
      : secondSelection === "Büyüktür" && renderValue === "Tutar"
      ? setFilteredData(data.filter((d) => d.amount > last))
      : secondSelection === "Küçüktür" && renderValue === "Tutar"
      ? setFilteredData(data.filter((d) => d.amount < last))
      : setFilteredData(data);
  }, [searchTerm, last, secondSelection, renderValue]);

  //Content of Popover
  const content = (
    <>
      <Text strong>Başlık</Text>
      <Select
        defaultValue={renderValue}
        style={{ width: 100, marginRight: 10 }}
        onChange={handleSelectChange}
      >
        {filterSelection.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Text strong>Koşul</Text>
      <Select
        style={{ width: 100, marginRight: 10 }}
        value={secondSelection}
        onChange={onSecondChange}
      >
        {selection.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Text strong>Değer</Text>
      <Select style={{ width: 100 }} value={last} onChange={onLastChange}>
        {lastly.map((select) => (
          <Option key={select}>{select}</Option>
        ))}
      </Select>
      <Row justify="end" style={{ marginTop: 10 }}>
        <Button
          onClick={() => setShow(false)}
          size={"small"}
          style={{ marginRight: 10 }}
        >
          İptal
        </Button>
        <Button type="primary" onClick={() => setShow(true)} size={"small"}>
          Ekle
        </Button>
      </Row>
    </>
  );

  //For Tag Text
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
            trigger="click"
          >
            <Button icon={<FilterOutlined />}></Button>
          </Popover>
          <Button icon={<DownloadOutlined />} style={{ marginLeft: "1em" }} />
        </Col>
      </Row>
      {show && (
        <Space
          style={{ padding: "1em 0.5em",width: "100%" }}
          className={theme === "light" ? "light space" : "dark space"}
        >
          <Tag
            closable
            onClose={onClose}
          >{`${renderValue} ${equalitySign} ${last}`}</Tag>
        </Space>
      )}
      <Table
        columns={columns}
        dataSource={show === false && searchTerm === "" ? data : filteredData}
        rowSelection={true}
        pagination={{ pageSize: 8 }}
      />
    </>
  );
};

export default TableComponent;
