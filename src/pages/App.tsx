import Button from "../components/Button";
import Header from "../components/Header";
import Login from "../components/Login";
import "./App.scss";

// First take on the first page (it should be named something else)
// Needs to change tsx and scss

// A place to test all of my components

const handleClick = () => {
  console.log("It was clicked");
};

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
  };

  return (
    <div className="app-container">
      <Header
        title="waytotrack"
        pages={["GitHub", "About", "Contact"]}
        buttonText="Login"
      />
      <div className="content">
        <div className="text-container">
          <h1>Let's track your games</h1>
          <h1>and discover new ones along the way</h1>
          <p>
            Track your games, preserve your gaming journey, and uncover new
            adventures with our user-friendly application.
          </p>
          <div className="buttons">
            <Button label="Sign Up" theme="primary" onClick={handleClick} />
            <Button label="Learn More" theme="secondary" />
          </div>
          <Login onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default App;
