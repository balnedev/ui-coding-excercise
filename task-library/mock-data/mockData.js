const transactions = [
    {
        "id": 689,
        "amount": 1181.08,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickinson, Koch and Harris",
        "name": "Home Loan Account 3987",
        "type": "invoice",
        "account": "02123544"
      },
      {
        "id": 690,
        "amount": 716,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickens, Metz and Reichel",
        "name": "Savings Account 2900",
        "type": "payment",
        "account": "38846659"
      },
      {
        "id": 691,
        "amount": 248.96,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Will, Konopelski and Mosciski",
        "name": "Home Loan Account 6109",
        "type": "deposit",
        "account": "63003294"
      },
      {
        "id": 692,
        "amount": 717.03,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Morissette, Ryan and Price",
        "name": "Auto Loan Account 1694",
        "type": "deposit",
        "account": "77682377"
      }
];

const sortedTransactionInAsc = [
      {
        "id": 691,
        "amount": 248.96,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Will, Konopelski and Mosciski",
        "name": "Home Loan Account 6109",
        "type": "deposit",
        "account": "63003294"
      },
      {
        "id": 690,
        "amount": 716,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickens, Metz and Reichel",
        "name": "Savings Account 2900",
        "type": "payment",
        "account": "38846659"
      },
      
      {
        "id": 692,
        "amount": 717.03,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Morissette, Ryan and Price",
        "name": "Auto Loan Account 1694",
        "type": "deposit",
        "account": "77682377"
      },
      {
        "id": 689,
        "amount": 1181.08,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickinson, Koch and Harris",
        "name": "Home Loan Account 3987",
        "type": "invoice",
        "account": "02123544"
      }
];


const sortedTransactionInDsc = [
    {
        "id": 692,
        "amount": 717.03,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Morissette, Ryan and Price",
        "name": "Auto Loan Account 1694",
        "type": "deposit",
        "account": "77682377"
    },
    {
        "id": 690,
        "amount": 716,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickens, Metz and Reichel",
        "name": "Savings Account 2900",
        "type": "payment",
        "account": "38846659"
    },
    {
        "id": 691,
        "amount": 248.96,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Will, Konopelski and Mosciski",
        "name": "Home Loan Account 6109",
        "type": "deposit",
        "account": "63003294"
      },
    {
        "id": 689,
        "amount": 181.08,
        "date": "2012-02-02T00:00:00.000Z",
        "business": "Dickinson, Koch and Harris",
        "name": "Home Loan Account 3987",
        "type": "invoice",
        "account": "02123544"
      }
];
export default {transactions, sortedTransactionInAsc, sortedTransactionInDsc};