import { Tag } from "antd";

const today = new Date();
const endDay = new Date();

function randomDate(start, end) {
  let date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  let day = date.getDate();
  let month = date.toLocaleString("en-us", { month: "long" });
  let year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

function randomAmount(min, max) {
  const number = Math.floor(Math.random() * (max - min) + min) / 10;
  return number.toFixed(2);
}

export const data = [
  {
    id: 1,
    key: "1",
    service: "DMP",
    invoice_id: 561,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 2,
    key: "2",
    service: "DMP",
    invoice_id: 562,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 3,
    key: "3",
    service: "DMP",
    invoice_id: 563,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 4,
    key: "4",
    service: "SSP",
    invoice_id: 564,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 5,
    key: "5",
    service: "SSP",
    invoice_id: 565,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 6,
    key: "6",
    service: "SSP",
    invoice_id: 566,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 7,
    key: "7",
    service: "Exchange",
    invoice_id: 567,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 8,
    key: "8",
    service: "DMP",
    invoice_id: 568,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 9,
    key: "9",
    service: "DMP",
    invoice_id: 569,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 10,
    key: "10",
    service: "DMP",
    invoice_id: 570,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 11,
    key: "11",
    service: "DMP",
    invoice_id: 571,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 12,
    key: "12",
    service: "Exchange",
    invoice_id: 572,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 13,
    key: "13",
    service: "Verification",
    invoice_id: 573,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 14,
    key: "14",
    service: "Verification",
    invoice_id: 574,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 15,
    key: "15",
    service: "DMP",
    invoice_id: 575,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 16,
    key: "16",
    service: "SSP",
    invoice_id: 576,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 17,
    key: "17",
    service: "Verification",
    invoice_id: 577,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 18,
    key: "18",
    service: "SSP",
    invoice_id: 578,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 19,
    key: "19",
    service: "SSP",
    invoice_id: 579,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 20,
    key: "20",
    service: "Exchange",
    invoice_id: 580,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 21,
    key: "21",
    service: "SSP",
    invoice_id: 581,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 22,
    key: "22",
    service: "DSP",
    invoice_id: 582,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 23,
    key: "23",
    service: "SSP",
    invoice_id: 583,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 24,
    key: "24",
    service: "DSP",
    invoice_id: 624,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 25,
    key: "25",
    service: "DSP",
    invoice_id: 625,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 26,
    key: "26",
    service: "DSP",
    invoice_id: 626,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 27,
    key: "27",
    service: "DSP",
    invoice_id: 627,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 28,
    key: "28",
    service: "Exchange",
    invoice_id: 728,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 29,
    key: "29",
    service: "Exchange",
    invoice_id: 729,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 30,
    key: "30",
    service: "Exchange",
    invoice_id: 730,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 31,
    key: "31",
    service: "Verification",
    invoice_id: 731,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 32,
    key: "32",
    service: "DSP",
    invoice_id: 732,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 33,
    key: "33",
    service: "Verification",
    invoice_id: 733,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 34,
    key: "34",
    service: "Verification",
    invoice_id: 734,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 35,
    key: "35",
    service: "SSP",
    invoice_id: 735,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 36,
    key: "36",
    service: "Exchange",
    invoice_id: 836,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odenmedi",
  },
  {
    id: 37,
    key: "37",
    service: "Exchange",
    invoice_id: 837,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 38,
    key: "38",
    service: "Verification",
    invoice_id: 838,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
  {
    id: 39,
    key: "39",
    service: "DSP",
    invoice_id: 839,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Bekliyor",
  },
  {
    id: 40,
    key: "40",
    service: "DMP",
    invoice_id: 840,
    date: randomDate(
      new Date(today),
      new Date(endDay.setDate(today.getDate() + 7))
    ),
    amount: randomAmount(1000, 5000),
    status: "Odendi",
  },
];

export const columns = [
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
    render: (tag) => {
      const color = tag.includes("Odendi")
        ? "green"
        : tag.includes("Odenmedi")
        ? "red"
        : "orange";
      return (
        <Tag color={color} key={tag}>
          {tag}
        </Tag>
      );
    },
  },
];
