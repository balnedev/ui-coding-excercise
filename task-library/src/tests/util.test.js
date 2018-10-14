import es6Util from '../util';
import mockData from '../../mock-data/mockData';
import deepFreeze from 'deep-freeze';

const util = require('../util').default;    

describe("Util", () => {

    describe("test and modules Setup shoudld be OK", () => {
        
        it("Test setup successful ", () => {
            expect(true).toBe(true);
        });

        it('access util modules through require', () => {
            expect(util).toBeDefined();
        });

        it('should have a function sortTransactions', () => {
            expect(util.sortTransactions).toBeDefined();
        });
      
        it('should have a function findTransactions', () => {
          expect(util.findTransactions).toBeDefined();
        })
        
        it('module setup is OK', () => {
            expect(es6Util).toBeDefined();
        });

        it('can access sortTransaction method ', () => {
            expect(es6Util.sortTransactions).toBeDefined();
        });

        it('can access findTransaction method ', () => {
            expect(es6Util.findTransactions).toBeDefined();
        });
    
    });

    describe('util.sortTranaction', () => {

       it('sorts the transaction based on amount in Ascending order', () => {
        deepFreeze(mockData.transactions);
        expect(util.sortTransactions(mockData.transactions, 'amount')).toEqual(mockData.sortedTransactionInAsc);
       });
       it('sorts the transaction based on amount in Ascending order is not equal to other order', () => {
        expect(util.sortTransactions(mockData.transactions, 'amount')).toEqual(
            expect.not.arrayContaining([{name: "test",amount: 123}, {name: "test1",amount: 1234}    ])
        );
       });

    });

    describe('util.findTranaction', () => {

        it('finds the transaction with given name', () => {
         expect(util.findTransactions(mockData.transactions, 'name','Savings Account 2900')).toEqual([{
            "id": 690,
            "amount": 716,
            "date": "2012-02-02T00:00:00.000Z",
            "business": "Dickens, Metz and Reichel",
            "name": "Savings Account 2900",
            "type": "payment",
            "account": "38846659"
          }]);
        });

        it('returns undefined if transaction with given name not found', () => {
            expect(util.findTransactions(mockData.transactions, 'name','failing scenario')).toHaveLength(0);
        });
        
     });
})