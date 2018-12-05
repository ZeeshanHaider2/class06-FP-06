import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mentors: []
    }
  }

   getAllMentors= async () => {

    console.log(`${window.location.origin}/api/mentors`);
    
    const mentors = await fetch(`${window.location.origin}/api/mentors`);

    this.setState(prevState => ({
      ...prevState, mentors: mentors
    }), console.log('Mentors fetched and added to state')
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getAllMentors}>Get ALL the mentors!</button>
        {this.state.mentors.map(mentor => (
            <div key={mentor.id}>
              <p><b>Name:</b>{mentor.first_name}</p>
              <p><b>Last name:</b>{mentor.last_name}</p>
              <p><b>Github:</b><a href={mentor.slack_nickname}>{mentor.slack_nickname}</a></p>
            </div>
        )
          )}
      </div>
    );
  }
}

export default App;
