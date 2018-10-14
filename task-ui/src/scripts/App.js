import React from 'react';
import AppContainer from './AppContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            error: null,
            isLoading: true
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/transactions')
        .then(response => {
          return response.json();
        })
        .then( result => {
          this.setState({transactions: result, isLoading: false })
        }, error => {
          this.setState({transactions: [], isLoading: false, error : {message: 'Sorry .. unable to load your transactions'}})
        } );
        
    }
    render() {
      const { error, transactions, isLoading } = this.state;
      if (error) {
        return  <div> {error.message} </div> 
      }
      if (isLoading) {
        return <div> loading... </div>
      }
      return <AppContainer data={transactions} />
    }
}
export default App;
