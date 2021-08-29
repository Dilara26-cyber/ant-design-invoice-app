const today = new Date();
const endDay = new Date();

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function randomAmount(min, max) {
  const number = Math.floor(Math.random() * (max - min) + min) / 10;
  return number.toFixed(2);
}

export const data = [
  {
    id: 1,
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
    service: "DMP",
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
    service: "DMP",
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
    service: "DMP",
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
    service: "DMP",
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
    service: "SSP",
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
    service: "SSP",
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
    service: "Verification",
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
    service: "Verification",
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
