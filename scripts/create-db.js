const faker = require('faker')
const db = {
  transactions: [...Array(1000)].map((_, i) => {
    const transaction = {id:i+1, ...faker.helpers.createTransaction()}
    transaction.amount = +transaction.amount
    return transaction
  })
}
console.log(JSON.stringify(db, null, 2))
