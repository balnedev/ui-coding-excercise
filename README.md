# DES Channels UI coding exercise

> The intention of this exercise is to assess a candidate's ability to design and develop loosely coupled user interface systems. We pay attention to general JavaScript knowledge, as well as *React 16* and the *node* and *npm* ecosystem.

## Overview

You need to perform two tasks involving _transforming_ and _rendering_ data with a given format.

## Ground Rules

* You can **only** write code in the `task-lib` and `task-ui` directories
* You are allowed to use any `devDependency` you want
* You are only allowed to use `react` and `react-dom` as runtime dependencies. This means that you can only import code from `react` or `react-dom` in your UI task, and you can't import code from any library in your library task.
* You can use any testing framework or building tools you want to.
* You must use the `package.json` files given in `task-lib` and `task-ui` as part of this exercise. You can add more configuration to them but **you can't remove anything from them**.

## Part 1: Library Project

> You should develop this exercise  in the `task-library` directory.

Given an array of **transactions** as specified below, create a library that exports all the functions specified below.

### Requirements

* Write a function that sorts an `Array` of transactions by `amount`
* Write a function that searches over `name` in an `Array` of transactions

### Acceptance criteria

* You must be able to import each function in a node project using the CommonJS module format.
* You must be able to import each function in a web based project using standard JavaScript modules.
* Your project must have unit tests.
* Your project must have a `README.md` file that explains how to build it and run the tests.

## Part 2: UI project

> You should develop this exercise in the `task-ui` directory.

Using the **Test Server** described below, write a user interface that renders a **grid** of transactions.

### Requirements

* Write a react component that takes an `Array` of **transactions** and render it as a table. The table must have headers for each column.
* Using the library from the previous task, add a **search** functionality to the table to allow users to search over the `name` field of the transactions list.
* Using the library from the previous task, add a **sort** functionality to the table to allow users to sort over the `amount` field of the transactions list.
* Write a react application that fetches a list of **transactions** from the test server described below and uses the component from the previous point to render the list of **transactions**

### Acceptance criteria

* Your project must have unit tests.
* All your code should be written using standard JavaScript modules
* Your application must run in the latest version of Google Chrome
* Your project must have a README.md file that explains how to build it, run the tests and explains how test your project in a browser.

## Test Server

As part of the exercise you're given a test service that provides data in the appropriate format. You're given a list of **transactions** as follows:

```json
[
    {
      "id": 1,
      "amount": 85.91,
      "date": "2012-02-02T00:00:00.000Z",
      "business": "Bode - Kreiger",
      "name": "Savings Account 6670",
      "type": "withdrawal",
      "account": "86389677"
    }
]
```


Start the server:

```bash
npm run server
```

> Every time you start the server you'll get 1000 new transactions. Old server states are not persisted between restarts.

Listing all transactions:

```bash
curl http://localhost:3000/api/transactions
```

Getting the transaction with `id=1`:

```bash
curl http://localhost:3000/api/transactions/1
```

Creating a new transaction:

```bash
curl http://localhost:3000/api/transactions \
  -X POST -H "Content-Type:application/json" \
  -d '{"amount": 85.91,"date": "2012-02-02T00:00:00.000Z","business": "Bode - Kreiger","name": "Savings Account 6670","type": "withdrawal","account": "86389677"}'
```

See the [json-server](https://github.com/typicode/json-server) documentation for reference on the underlying server.

