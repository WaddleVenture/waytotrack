import Button from "../components/Button";
import Card from "../components/Card";
import CardLarge from "../components/CardLarge";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Login from "../components/Login";
import Search from "../components/Search";
import "./App.scss";

// First take on the first page (it should be named something else)
// Needs to change tsx and scss

// A place to test all of my components

const handleClick = () => {
  console.log("It was clicked");
};

const generateCardsData = (numCards: number) => {
  const cardsData = [];

  for (let i = 1; i <= numCards; i++) {
    cardsData.push({
      image: `https://imgr.gameblog.fr/images/jeux/26633/OuterWilds_PS4_Jaquette_001.jpg?imgeng=/cmpr_10/w_230/m_letterbox&ver=1`,
      title: `Card ${i}`,
      subtitle: `Description of Card ${i}`,
      action: true,
    });
  }

  return cardsData;
};

const numCards = 20;
const cardsData = generateCardsData(numCards);

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
  };

  const handleSearch = (search: string) => {
    console.log("Search : ", search);
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

          <Card
            image="https://imgr.gameblog.fr/images/jeux/26633/OuterWilds_PS4_Jaquette_001.jpg?imgeng=/cmpr_10/w_230/m_letterbox&ver=1"
            title="Outer Wilds"
            subtitle="Mobius Digital"
            action={true}
            onClickCard={() => console.log("Card clicked!")}
          />
        </div>
        <Search onSearch={handleSearch} />
        <CardLarge
          image="https://imgr.gameblog.fr/images/jeux/26633/OuterWilds_PS4_Jaquette_001.jpg?imgeng=/cmpr_10/w_230/m_letterbox&ver=1"
          title="Outer Wilds"
          action="+"
          onClickCard={() => console.log("Card Large clicked!")}
          onAction={() => console.log("Action Large clicked!")}
          description="Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop. "
        />
        <Carousel cards={cardsData} />
      </div>
    </div>
  );
}

export default App;
