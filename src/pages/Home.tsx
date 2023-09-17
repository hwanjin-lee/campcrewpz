import discordLogo from "../assets/discord.svg";
import campCrewLogo from "../assets/campcrew.png";
import kofiLogo from "../assets/kofi.png";
import "../styles/Home.css";

const Home = () => {
  const battlemetricsBannerChoice = () => {
    if (window.innerWidth > 600) {
      return "https://cdn.battlemetrics.com/b/horizontal500x80px/23587144.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700";
    } else {
      return "https://cdn.battlemetrics.com/b/standardVertical/23587144.png?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&maxPlayersHeight=300";
    }
  };

  return (
    <div>
      <h1>Camp Crew PZ</h1>
      <h2>Project Zomboid Gaming Community</h2>
      <p>24/7 | PVE | Economy | Player Shops | Light Mods</p>
      <a href="/">
        <img src={campCrewLogo} className="logo" alt="CampCrew logo" />
      </a>
      <h2>172.107.182.31 : 28000</h2>
      <img src={battlemetricsBannerChoice()} alt="battlemetrics banner" />
      <div className="buttonsOfLinks">
        <div className="joinButtonContainer">
          <a
            href="https://discord.gg/UAxdrPNdbj"
            className="joinButton"
            target="_blank"
          >
            <div>Join Discord</div>
            <img src={discordLogo} className="logoInButton" alt="logo" />
          </a>
        </div>
        <div className="joinButtonContainer">
          <a
            href="https://ko-fi.com/campcrewpz"
            className="joinButton"
            target="_blank"
          >
            <div>Support Us</div>
            <img src={kofiLogo} className="logoInButton" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
