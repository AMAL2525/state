import React from "react";
import './App.css';
import Lisa from './Lisa.jpg';


const profile = {
  fullname: "Lisa Simpson",
  bio: "dite « Lisa » est un personnage fictif de la série télévisée d'animation Les Simpson, enfant de la famille Simpson",
  profession: "2nd grade student",
  image: Lisa
}

class App extends React.Component {

  state = {

    show: false,
    digit: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        digit: this.state.digit + 1,

      })
    }, 1000)
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const { fullname, bio, profession, image } = profile
    const { show, digit } = this.state
    return (<div className='App'>

      <button type="button" onClick={this.handleShow}>{show ? "Hide" : "Show"}</button>

      { show ?
        (<div className="profile-container">
          <h1>{fullname}</h1>
          <h2>{profession}</h2>
          <p>{bio}</p>
          <img src={image} alt='lisa' />
        </div>) :
        null
      }

      <div>
        <h1>{digit}</h1>
      </div>

    </div>)

  }
}


export default App;
