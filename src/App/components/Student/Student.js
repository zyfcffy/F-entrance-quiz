import React, { Component } from 'react';
// TODO GTB-3: - 注意引入import css

class Student extends Component {
  // TODO GTB-4: - 非特殊枪框不建议使用eslint-disable-next-line
  // eslint-disable-next-line react/state-in-constructor
  state = {
    studentList: [],
  };

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList = () => {
    // TODO GTB-4: - 可以将API请求层抽取，接耦请求与页面数据渲染
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

  addStudent = (e) => {
    if (e.keyCode === 13) {
      const name = e.target.value;
      fetch('http://localhost:8080/student', {
        method: 'POST',
        body: name,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(alert('添加成功！'));
    }
  };

  render() {
    return (
      // TODO GTB-4: - 加强语义化标签的使用
      <div className="student-list">
        <h1>学员列表</h1>
        {/* TODO GTB-3: - 列表建议使用ul li标签 */}
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
          {/* TODO GTB-3: - 下面花括号中直接写 this.addStudent 即可 */}
          <input type="text" placeholder="+添加学员" onKeyDown={(e) => this.addStudent(e)} />
        </div>
      </div>
    );
  }
}

export default Student;
