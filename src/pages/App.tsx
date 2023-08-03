import Button from "../components/button";
import "./App.scss";

// First take on the first page (it should be named something else)
const handleClick = () => {
  console.log("It was clicked");
};

function App() {
  return (
    <div className="app-container">
      <h1>Let's track your games</h1>
      <h1>and discover new ones along the way</h1>
      <div className="buttons">
        <p>
          Track your games, preserve your gaming journey, and uncover new
          adventures with our user-friendly application.
        </p>
        <Button label="Sign Up" theme="primary" onClick={handleClick} />
        <Button label="Learn More" theme="secondary" />
      </div>
    </div>
  );
}

export default App;
