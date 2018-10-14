import React from 'react';
import {shallow, mount} from 'enzyme';
import AppContainer, {Search, TableHeader, TableBody} from '../AppContainer';
import mockData from '../../../../task-library/mock-data/mockData';

describe('AppContainer', () => {
    let shallowComponent, mountComponent = null, searchComponent = null, tableHeaderComp = null, tableBodyComp = null;
    let globalProps = {
        handleHeaderSelection: jest.fn(),
        onChange: jest.fn()
    };

    beforeEach(() => {
        shallowComponent = shallow(<AppContainer data = {mockData.transactions} {...globalProps} />);
        mountComponent = mount(<AppContainer  data = {mockData.transactions} {...globalProps}/> );
        searchComponent = shallow(<Search {...globalProps} />);
        tableHeaderComp = shallow(<TableHeader tableHeadings={mockData.transactions[0]} />);
        tableBodyComp = shallow(<TableBody data={mockData.transactions[0]}/>);
        
    })

    it('renders without fail', () => {
        expect(shallowComponent).toBeDefined();
        expect(mountComponent).toBeDefined();
        expect(shallowComponent.find('.appContainer')).toHaveLength(1);
    });

    it('shows empty records message when no data ', () => {
        const emptyContainer = shallow(<AppContainer data = {[]} />);
        expect(emptyContainer.find('.noRecordsMsg')).toHaveLength(1);
        expect(emptyContainer.find('.noRecordsMsg').text()).toBe(' no records found ');
    })   
    it('searches for given name and returns relavent records', () => {
        expect(mountComponent.state().data.length).toBe(4);
        const searchInput = mountComponent.find('.searchInputText');
        searchInput.simulate('change', {target : { value: 'Savings'} });
        expect(mountComponent.state().data.length).toBe(1);
     });

     it('sorts the trasactions by amount in ascending order', () => {
        expect(mountComponent.state().data[0]['amount']).toBe(Number('1181.08'));
        mountComponent.instance().handleHeaderSelection('amount');
        expect(mountComponent.state().data[0]['amount']).toBe(Number('248.96'));
     });

    describe('Search', () => {
     it('Renders the search compoent ', () => {
       expect(mountComponent.find('Search')).toBeDefined();
       expect(mountComponent.find('.searchContainer')).toHaveLength(1);
       
       
     });

     it('calls search functon onChange', () => {    
        const searchInput = searchComponent.find('.searchInputText');
        searchInput.simulate('change', {target : { value: 'Savings'} });
        expect(globalProps.onChange).toBeCalled();
     })

    });

    describe('TableHead', () => {
        it('Renders the table head compoent ', () => {
          expect(mountComponent.find('TableHead')).toBeDefined();
        })
        it('return an table row with table heading when an object is passed', () => {
            expect(tableHeaderComp.html()).toEqual("<tr><th name=\"id\">  id </th><th name=\"amount\">  amount </th><th name=\"date\">  date </th><th name=\"business\">  business </th><th name=\"name\">  name </th><th name=\"type\">  type </th><th name=\"account\">  account </th></tr>");
        });
    });

    describe('TableBody', () => {
        it('Renders the table body compoent ', () => {
          expect(mountComponent.find('TableBody')).toBeDefined();
        })
        it('return an table row markup with table data elements when an object is passed', () => {
          expect(tableBodyComp.html()).toBe( "<tr><td> 689 </td><td> 1181.08 </td><td> 2012-2-2 </td><td> Dickinson, Koch and Harris </td><td> Home Loan Account 3987 </td><td> invoice </td><td> 02123544 </td></tr>");  
        })
    });

});