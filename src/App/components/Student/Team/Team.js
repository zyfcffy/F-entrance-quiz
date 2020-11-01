import React, { Component } from 'react';

class Team extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    teamList: [],
  };

  componentDidMount() {
    this.getTeams();
  }

  getTeams = () => {
    fetch('http://localhost:8080/teams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          teamList: data,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    return (
      // TODO GTB-4: - 加强语义化标签的使用
      <div className="team">
        <div className="team-header">
          <h1>分组列表</h1>
          <button className="team-button" type="button">
            分组学员
          </button>
        </div>
        {this.state.teamList.map((team, index) => {
          return (
            // TODO GTB-4: - 不推荐使用index作为key，可以使用id等
            <div className="team-container" key={index}>
              <div className="team-name">{team.name}</div>
              <div className="team-content">
                {team.studentList.map((student) => {
                  return (
                    <div className="team-student" key={student.id}>
                      {student.id}.{student.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Team;
