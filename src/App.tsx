import React from 'react';
import logo from './logo.svg';

const _DELETE_ME = {
  cards: [
    {
      "name": "Some Card",
      "use": "Groceries",
      "limit": 1250.00,
      "ledger": [
        {
          "amount": 1.25,
          "note": "Pear"
        },
        {
          "amount": 2.25,
          "note": "Bananas"
        },
        {
          "amount": 9.95,
          "note": "Steak"
        }
      ]
    }
  ]
};

function App() {
  return (
    <div>
      {_DELETE_ME.cards.map(({ name, use, limit, ledger }) => (
        <React.Fragment key={name}>
          <header>
            <h1>{name}</h1>
            <h4>Use: {use}</h4>
          </header>
          <p>Balance: {ledger.map(({ amount }) => amount).reduce((a, c) => a + c)}</p>
          <p>Limit: {limit}</p>
          <div>
            {ledger.map(({ amount, note }, index) => (
              <div key={`${name}-${index}`}>
                <div>{amount}</div>
                <div>{note}</div>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
