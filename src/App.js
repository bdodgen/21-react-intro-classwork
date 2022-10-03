import logo from './logo.svg';
import './App.css';

const Hello = () => {
  return (
    <h2>The demons will eat ur sooouuuulllll, h1!</h2>
  )
}

function App() {
  const amazingClassName = "myApp";
  const badassClassName = "someoneElsesApp";

  return (
    <div className={amazingClassName + " " + badassClassName}>
      <h1>AAAAAHHHHHHHH! HELP MEEEEE! I'M TRAPPED IN THE POOTER! SOS</h1>
      {Hello()}
    </div>
  );
}

export default App;
