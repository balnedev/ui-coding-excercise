import React from 'react';
import util from '../../../task-library/src/util';
import mappings from './mappings';
import PropTypes from 'prop-types';

const Search = props => {

  return (
      <div className="searchContainer">
          <label > Search transactions by account name: </label>
           <input className='searchInputText' type = "text" onChange= {props.onChange}/>
      </div>    
  )
}

Search.propTypes = {
  onChange: PropTypes.func
};

const TableHeader = ({tableHeadings,onHeaderSelection}) => {
  if (!tableHeadings) return null;
   return ( <tr>
      {Object.keys(tableHeadings).map(key => <th key={`header_for_${key}`} name={key} 
      onClick={() => onHeaderSelection(key)}>  {key} </th>) }
   </tr> );
}

TableHeader.propTypes = {
  tableHeadings: PropTypes.object,
  onHeaderSelection: PropTypes.func
};

const TableBody = ({data}) => {
  if (!data) return null;
   return ( <tr>
    { Object.keys(data).map(key => <td key = {`rowKey_${data[key]}`}> {mappings.formatLabel(key,data[key])} </td>) }
  </tr>);
}

TableBody.propTypes = {
  data: PropTypes.object
};

class AppContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = { data : props.data};
      this.headings = props.data[0];
      
      this.handleSearch = this.handleSearch.bind(this);
      this.handleHeaderSelection = this.handleHeaderSelection.bind(this);
  }

  handleHeaderSelection(sortByField) {
    this.setState({isLoading: true});
    const data = util.sortTransactions(this.state.data, sortByField);
    this.setState({data, isLoading: false});
    
  }

  handleSearch(e) {
    if (!e.target.value) {
      this.setState({data: this.props.data});
    } else {
        const data = util.findTransactions(this.state.data, 'name', e.target.value);
        this.setState({data: data});
    }
  }

  render() {
    const {data} = this.state;
    
    return (
    <div className="appContainer">
        <Search onChange={this.handleSearch}/> 
        <table >
            <thead>
              <TableHeader tableHeadings={this.headings} onHeaderSelection={this.handleHeaderSelection} />
            </thead>
            <tbody>
              { data && data.map(transaction => {
                return <TableBody  key={`row_${transaction['id']}`}  data= {transaction} />
              })}
            </tbody>
        </table>
        {data && data.length == 0 && <div className="noRecordsMsg"> no records found </div>}
     </div>)
  }
}

AppContainer.propTypes = {
  handleHeaderSelection: PropTypes.func,
  handleHeaderSelection: PropTypes.func
};

export { Search, TableBody, TableHeader};

export default AppContainer;