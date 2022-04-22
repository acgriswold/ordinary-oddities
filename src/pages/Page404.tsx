import { Link } from "react-router-dom";
import "../styles/App.css";

function Page404() {
  return (
    <header className="App-header">
      <p>Whooops... You seem lost..</p>
      <Link to="/ordinary-oddities">Let's get you back home.</Link>
    </header>
  );
}

export default Page404;
