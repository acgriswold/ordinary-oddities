import React, { ReactNode } from "react";
import "./styles/App.css";

import Page404 from "./pages/Page404";
import ArtProjects from "./pages/ArtProjects";
import { Route, Routes } from "react-router-dom";

interface ComponentProps {
  children?: ReactNode;
}

/* Class component example */
export class UnderConstructionMessage extends React.Component<ComponentProps> {
  render() {
    let startDate = new Date("2022-04-15T10:14:04.069Z");
    let now = new Date();
    let msDifference = now.getTime() - startDate.getTime();

    return (
      <div>
        <div>
          Construction of site started{" "}
          <span className="App-code">{startDate.toLocaleDateString()}</span>.
        </div>
        <div>
          I've spent {this.convertMsToTime(msDifference)} not finishing this
          project...
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }

  convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    return (
      <span>
        <span className="App-code">{days}</span> day(s),{" "}
        <span className="App-code">{hours % 24}</span> hour(s),{" "}
        <span className="App-code">{minutes % 60}</span> minutes(s) and,{" "}
        <span className="App-code">{seconds % 60}</span> second(s)
      </span>
    );
  }
}

/* Functional component example */
function GreetingsMessage({ children }: ComponentProps) {
  return (
    <div>
      <h1>Ordinary oddities</h1>
      <h3>{children}</h3>
    </div>
  );
}

function DefaultPage() {
  return (
    <header className="App-header">
      <GreetingsMessage />
      <UnderConstructionMessage />
    </header>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/art/*" element={<ArtProjects />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
