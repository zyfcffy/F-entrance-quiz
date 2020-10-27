import React, { Component } from 'react';

class Student extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    studentList: [],
  };

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    fetch('http://localhost:8080/students', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          studentList: data,
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="student-list">
        <h1>学员列表</h1>
        <div className="students">
          {this.state.studentList.map((student) => {
            return (
              <div key={student.id} className="student-item">
                <span>
                  {student.id}.{student.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Student;
