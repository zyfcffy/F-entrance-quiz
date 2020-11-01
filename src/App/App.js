import React, { Component } from 'react';
import './App.scss';
import Student from './components/Student/Student';
import Team from './components/Student/Team/Team';

// TODO GTB-1: * 页面没有样式，且很多行为未满足需求描述
// TODO GTB-1: * 完成分组列表，学员列表及添加学员及其请求，分组学员每次刷新就会重新分组
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表，但可以进一步抽象组件并复用（如学员item）
// TODO GTB-3: * 未使用语义化标签
// TODO GTB-3: * 写了一点css并有写flex，但css并没有被引用进来
// TODO GTB-3: * 运用了ES6+语法及fetch
// TODO GTB-3: * 运用React相关知识点
// TODO GTB-4: * 小步提交做的还可以
// TODO GTB-4: * Team和Students组件为什么一个有folder一个没有folder
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 有一定层度的组件拆分，但可以加强
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Team />
        <Student />
      </div>
    );
  }
}

export default App;
