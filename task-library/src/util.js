const sortTransactions = (transactions, sortBy= 'amount', sortOder = 'ASC') => {
  
    if (!transactions) return transactions;
  
    const localCopy = [...transactions];
    
    if (sortOder === 'ASC') {
      localCopy.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0));
    } else {
      localCopy.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : b[sortBy] < a[sortBy] ? -1 : 0));
    }
  
    return localCopy;
  };
  
  const findTransactions = (transactions, searchField, searchFieldValue) => {
   
    if (!transactions || !searchField) return transactions;
    const result = transactions.filter(transaction => transaction[searchField].includes(searchFieldValue)) ;
    return result;
    
  };
  
  export default  {
      sortTransactions,
      findTransactions
  };