import React, { useState, ReactNode } from 'react';
import './App.css';

interface ComponentProps {
  children?: ReactNode;
}

/* Class component example */
export class ClassComponent extends React.Component<ComponentProps> {
  render() {
    return     <div>
        Class component styling...
        <FunctionalComponent>{this.props.children}</FunctionalComponent>
      </div>
  }
}

/* Functional component example */
function FunctionalComponent({ children }: ComponentProps) {
  return (
  <div>
    Class component styling...
    {children}
  </div>
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent> 
          <div>Child of <code className="App-code">FuncitonalComponent</code>.</div>
        </FunctionalComponent>
        <ClassComponent> 
          <div>Child of <code className="App-code">ClassComponent</code>.</div>
        </ClassComponent>
      </header>
    </div>
  );
}

export default App;