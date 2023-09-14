import discordLogo from './assets/discord.svg'
import campCrewLogo from './assets/campcrew.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Camp Crew PZ</h1>
        <p>Project Zomboid Gaming Community</p>
        <p>24/7 | PVE | Economy | Player Shops | Light Mods</p>
        <a href="/">
          <img src={campCrewLogo} className="logo" alt="CampCrew logo" />
        </a>
      </div>
      <h2>172.107.182.31 : 28000</h2>
      <img src="https://cdn.battlemetrics.com/b/horizontal500x80px/23587144.png?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700" />
      <div className="card">
        <div className="joinButtonContainer">
          <a href="https://discord.gg/UAxdrPNdbj" className="joinButton" target="_blank">
            <div>Join Discord</div>
            <img src={discordLogo} className="logoDiscord" alt="logo" />
          </a>
        </div>
      </div>
      <p className="read-the-docs">
        website under construction
      </p>
    </>
  )
}

export default App
