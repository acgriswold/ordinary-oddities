import React, { useState, ReactNode } from 'react';
import './App.css';

interface ComponentProps {
  children?: ReactNode;
}

/* Class component example */
export class UnderConstructionMessage extends React.Component<ComponentProps> {
  render() {
    let startDate = new Date('2022-02-15T14:04:15.524486Z');
    let now = new Date();

    return (
      <div>
        <div>Construction of site started {' '}
          <span className='App-code'>
            {startDate.toLocaleDateString()}{' '}
          </span>
        </div>
        <div>
          It's been
          <span className='App-code'>{' '}{(now.getDate() - startDate.getDate())}{' '}</span>
          days and 
          <span className='App-code'>{' '}{(now.getMinutes() - startDate.getMinutes())}{' '}</span>
          minutes spent not finishing project...
        </div>
      </div>
    )
  }
}

/* Functional component example */
function GreetingsMessage({ children }: ComponentProps) {
  return (
  <h1>
    Ordinary oddities
    {children}
  </h1>
  );
}

function App() {
  return (
    <div className={'App container'}>
      <header className="App-header">
        <GreetingsMessage /> 

        <UnderConstructionMessage> 
          <div>Child of <code className="App-code">ClassComponent</code>.</div>
        </UnderConstructionMessage>
      </header>
    </div>
  );
}

export default App;