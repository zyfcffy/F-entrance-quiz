### 完成度：

- 页面没有样式，且很多行为未满足需求描述
- 完成分组列表，学员列表及添加学员及其请求，分组学员每次刷新就会重新分组

**Details:**

### 测试：

- 没有测试

**Details:**

### 知识点：

- 有划分分组列表和学员列表，但可以进一步抽象组件并复用（如学员 item）
- 未使用语义化标签
- 写了一点 css 并有写 flex，但 css 并没有被引用进来
- 运用了 ES6+语法及 fetch
- 运用 React 相关知识点

**Details:**

- \- 注意引入 import css
- \- 列表建议使用 ul li 标签
- \- 下面花括号中直接写 this.addStudent 即可
- \- justify-content 与 align-items 应该出现在 display: flex;这一层上

### 工程实践：

- 小步提交做的还可以
- Team 和 Students 组件为什么一个有 folder 一个没有 folder
- 没有抽出 Api 请求层
- 有一定层度的组件拆分，但可以加强

**Details:**

- \- 非特殊枪框不建议使用 eslint-disable-next-line
- \- 可以将 API 请求层抽取，接耦请求与页面数据渲染
- \- 加强语义化标签的使用
- \- 加强语义化标签的使用
- \- 不推荐使用 index 作为 key，可以使用 id 等
