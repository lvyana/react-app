## 1. 安装依赖

```
yarn add react-router-dom@6
```

## 2. 基本使用

  ### 1. BrowserRouter

```
    import { StrictMode } from "react";
    import * as ReactDOMClient from "react-dom/client";
    import { BrowserRouter } from "react-router-dom";

    import App from "./App";

    const rootElement = document.getElementById("root");
    const root = ReactDOMClient.createRoot(rootElement);

    root.render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    );
```

`BrowserRouter` : 是最常用的路由方式，即浏览器路由。官方文档也建BrowserRouter 组件用于 Web 应用程序。除了这种方式，React Router 其他几种路由方式：

`HashRouter`：在路径前加入#成为一个哈希值，Hash 模式的好处是不会因页面而找不到对应路径；

`MemoryRouter`：不存储 history，路由过程保存在内存中，适用于 ReaNative 这种非浏览器环境；

`NativeRouter`：配合 React Native 使用，多用于移动端；

`StaticRouter`：主要用于服务端渲染时。

&nbsp;

### 2. NavLink
它是一个导航链接组件，类似于 HTML 中的a标签。NavLink 组件使用 to 需要跳转的链接：
```
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="">首页</NavLink>
        <NavLink to="product">产品</NavLink>
        <NavLink to="about">关于</NavLink>
      </nav>
    </div>
  );
}
```

&nbsp;

### 3. Link

在 react-router-dom 中，可以使用 Link 组件来创建常规链接。Link 组件NavLink 组件非常相似，唯一的区别就是 NavLink 存在 active 状态，而 Lin没有

Link 组件和 NavLink 组件的使用方式类似，例如在产品页面有一个返回首页钮，需要传递给 to 需要跳转的路径：

```
import { Link } from "react-router-dom"
export default function Product() {
  return (
    <div className="product">
      <header>
        <Link to="/">返回首页</Link>
      </header>
    </div>
  );
}
```

如果需要对 Link 进行更多控制，也可以传递给 to 一个对象，在这个对象中以通过 search 属性来添加查询字符串或通过 hash 属性来传递 hash值，例如：

```
import { Link } from "react-router-dom"
export default function Settings() {
  return (
    <div className="settings">
      <header>
        <h1>Hello World</h1>
        <Link
          to={{
            pathname: "/settings",
            search: "?sort=date",
            hash: "#hash"
          }}
        >
          设置
        </Link>
      </header>
    </div>
  );
}
```

&nbsp;

### 4. Routes
下面来看看如何将路由映射为对应的页面（组件）。首先需要react-router-dom 中导入一个名为 Routes 的组件，它将包含可以在页面特分显示的所有不同的路由。

我们需要在 Routes 组件中使用 Route 组件来定义所有路由。该组件接受两props

path：页面 URL 应导航到的路径，类似于 NavLink 组件的 to

element：页面导航到该路由时加载的元素

Route 组件用于将应用的位置映射到不同的 React 组件。例如，当用户导航到product 路径时呈现 Product 组件，可以这样来写

```
import { NavLink, Routes, Route } from "react-router-dom";
import Product from "./Product";
import About from "./About";
import Home from "./Home";
import Error from "./Error"
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="">首页</NavLink>
        <NavLink to="product">产品</NavLink>
        <NavLink to="about">关于</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
```

&nbsp;

## 3. 编程式导航

React Router 提供了两种不同的编程式导航方式：

声明式导航组件：<Navigate> 组件

命令式导航方法：useNavigate Hook

我们可以使用这两种编程的方式来跳转到指定的路由，也可以实现路由的重定向，比如在浏览器的地址栏输入个 URL 并进行跳转时，如果应用中没有定义该路由，就跳转到应用的首页。

&nbsp;

### 1. Navigate

`<Navigate />`组件是一种声明式的导航方式。使用 Navigate 组件时，首先需要从 react-router-dom 入 Navigate 组件。然后在 Navigate 组件中通过 to props 来指定要跳转的路径：

```
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Product from "./Product";
import About from "./About";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink to="">首页</NavLink>
        <NavLink to="product">产品</NavLink>
        <NavLink to="about">关于</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
```

这样，当在浏览器地址栏输入一个未定义的路由时，就会要转到首页。

&nbsp;

### 2. useNavigate

useNavigate Hook是一种命令式导航方式。使用这个 Hook 时，首先需要从 react-router-dom 中导出useNavigate，然后传递给它需要跳转的路由即可。假如在提交完表单之后，跳转到主页，可以这样实现：
```
import { useNavigate } from 'react-router-dom

function Register () {
  const navigate = useNavigate()

  return (
    <div>
      <Form afterSubmit={() => navigate('/')} />
    </div>
  )
}
```

&nbsp;

## 4. 通过路由传递状态
在 react-router-dom 中可以通过以下三种方式来传递状态：

使用Link 组件

使用Navigate 组件

使用useNavigate 钩子

&nbsp;

### 1. Link

下面来使用 Link 组件通过 state props 来将数据从产品页面传递到主页：

```
import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <header>产品页面</header>
      <Link to="/" state={"From Product"}>
        返回
      </Link>
    </div>
  );
}
export default Contact;
```

现在我们就将需要的数据传递出来了，那该如何在首页获取从产品页面传递出来的数据呢？可以在接收信息的面（首页）中使用一个名为 useLocation 的钩子来获取数据：

```
import { useLocation } from "react-router-dom";
export default function Settings() {
  let location = useLocation();
  return (
    <div className="App">
      <header>首页</header>
      <p>{location.state}</p>
    </div>
  );
}
```

&nbsp;

### 2. Navigate

Navigate 组件也可以在 react-router-dom 中传递状态，其使用方式和 Link 组件类似。假如当点击关于钮时，跳转到首页，并告诉首页该跳转是从哪个页面来的：

```
<Route path="/about" element={<Navigate to="/" state={"From About"} />} />
```

在首页中仍然是使用 useLocation 钩子来获取状态值：

```
import { useLocation } from "react-router-dom";
export default function Settings() {
  let location = useLocation();
  return (
    <div className="App">
      <header>首页</header>
      <p>{location.state}</p>
    </div>
  );
}
```

&nbsp;

### 3. useNavigate

上面我们介绍了如何使用 useNavigate 钩子来进行重定向，在调用 navigate() 函数时，给它传递了一个数，即要重定向的路径。实际上，navigate() 函数接受两个参数，第一个参数就是跳转的路径，第二个参数包含状态的对象。可以借助  useNavigate Hook 来实现状态传递：

```
import { useNavigate } from 'react-router-dom
function Register () {
  const navigate = useNavigate()
  return (
    <div>
      <Form afterSubmit={() => navigate('/', { state: "From the About Page"})} />
    </div>
  )
}
```

在首页中仍然是使用 useLocation 钩子来获取状态值，和上面两种方式一样，这里不再多介绍。

&nbsp;

## 5. 动态路由

一个很常见的场景，在维基百科进行搜索时，URL 的模式始终是一样的，如下：

`https://zh.wikipedia.org/wiki/{keyword}`

这里的 keyword 就是我们在维基百科中搜索的内容，这个内容是不固定的，并且有很多很多，我们不可能为每个关键词都创建一个路由。其实，只需要声明一个带有 keyword 占位符的路由即可。对于上面的例子，只需要将 Route 组件的 path props 声明为这样：

```
<Route path="/wiki/:keyword" element={<Wiki />} />
```

这时，无论是访问/wiki/javascript还是/wiki/react，都会加载 Wiki 组件。

那我们该如何在组件中访问 URL 中的动态部分呢？从 v5.1 开始，React Router 就提供了一个 useParams Hook，它返回一个对象，该对象具有 URL 参数及其值之间的映射。使用方式如下：

```
import React from 'react'
import {useParams} from 'react-router';

function Wiki() {
  const { keyword } = useParams()
  
  return (
    <div>{ keyword }</div>
  )
}
```

这样，通过获取到的 URL 参数，就可以请求页面对应的数据。

&nbsp;

## 6. 嵌套路由

嵌套路由允许父路由充当包装器并控制子路由的渲染。比如，在应用中点击消息时，会跳转到 /messages 路由，并显示所有的通知列表。当点击某一条消息时，就会跳转到 /messages/:id 路由，这时就能看到指定 id 的消息详情，同时消息列表是显示在左侧的。这个场景就要依赖嵌套路由来实现。下面来看看如何使用 React Router 实现这种嵌套路由模式。

从最基础的结构开始定义：

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
```

现在，我们希望 Messages 能够控制渲染子路由，那能不能直接在 Messages 组件中来定义子路由呢？就像这样：

```
function Messages() {
  return (
    <div>
      <Conversations />
      <Routes>
        <Route path=":id" element={<MessagesDetails />} />
      </Routes>
    </div>
  );
}
```

现在，当用户导航到 /messages 时， React Router 会呈现 Messages 组件。Messages 组件中通过 Conversations 组件来显示消息列表，然后使用将 /messages/:id 映射到 Chat 组件的 Route 来渲染另一个 Routes。

注意： 这里不必在嵌套路由中包含完整的 /messages/:id 路径，因为 Routes 是很智能的，当省略了前导 /，就会认为这条路径是相对于父级 /messages 的。

这样，只有在跳转到/Messages时才会渲染消息列表。当访问与 /messages/:id 模式匹配的路由时，消息列表就消失了，嵌套路由永远不被会渲染。

为了解决这个问题，我们需要告诉 React Router 想要在路由为 /messages 时或者为任何其他匹配 /messages/* 模式的路由时要渲染消息列表。

那如果只是将路径修改为 /messages/*会怎样呢？
```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages/*" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
```
通过将 /* 附加到 /messages 路径的末尾，实际上是在告诉 React Router，Messages 有一个嵌套的 Routes 组件。并且父路径应该匹配 /messages 以及与 /messages/* 匹配的任何其他路由。

当我们希望在子 Route 控制渲染嵌套路由时，这是有效的。但是如果我们希望在 App 组件包含创建嵌套路由所需的所有信息，而不是必须在 Messages 组件中定义呢？React Router 也是支持这种创建嵌套路由的方式：
```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />}>
        <Route path=":id" element={<MessagesDetails />} />
      </Route>
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
```
这里以声明式的方式将子 Route 嵌套为父 Route 的子级。和上面一样，子路由是相对于父路由的，因此不需要包含父 (/messages) 路径。

现在，只需要告诉 React Router 应该在父路由（Messges）中的哪个位置渲染子路由（MessagesDetails）。这就就需要使用 React Router 的 Outlet 组件：
```
import { Outlet } from "react-router-dom";

function Messages() {
  return (
    <div>
      <Conversations />
      <Outlet />
    </div>
  );
}
```
如果应用的路由与嵌套 Route 的路径匹配，Outlet 组件就会渲染 Route 的元素。根据上面的 Routes，如果在当前的路由是 /messages，Outlet 组件将渲染为 null；如果当前的路由是 /messages/1，Outlet 组件将渲染 `<MessagesDetails />` 组件。

&nbsp;

## 7.  查询参数
在 React Router 中，如何从 URL 中获取参数呢？例如以下 URL：
`twitter.com/search?q=react&src=typed_query&f=live`
从 v6 开始，React Router  使用 URLSearchParams API 来处理查询字符串，URLSearchParams 内置于所有浏览器（IE 除外）中，并提供了处理查询字符串的实用方法。当创建 URLSearchParams 实例时，需要向它传递一个查询字符串：
```
const queryString = "?q=react&src=typed_query&f=live";
const sp = new URLSearchParams(queryString);

sp.has("q"); // true
sp.get("q"); // react
sp.getAll("src"); // ["typed_query"]
sp.get("nope"); // null

sp.append("sort", "ascending");
sp.toString(); // "?q=react&src=typed_query&f=live&sort=ascending"

sp.set("q", "bytes.dev");
sp.toString(); // "?q=bytes.dev&src=typed_query&f=live&sort=ascending"

sp.delete("sort");
sp.toString(); // "?q=bytes.dev&src=typed_query&f=live"
```
React Router 提供了一个自定义的 useSearchParams Hook，它是基于 URLSearchParams 进行的封装。useSearchParams 返回一个数组，该数组第一个元素是 URLSearchParams 的实例，第二个元素是更新查询参数的一个方法。

对于上面的 URL，使用 useSearchParams 从查询字符串中获取值：
```
import { useSearchParams } from 'react-router-dom'

const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q')
  const src = searchParams.get('src')
  const f = searchParams.get('f')

  return (
    // ...
  )
}
```
如果需要更新查询字符串，可以使用 setSearchParams，向它传递一个对象，该对象的key/value 对将作为 &key=value 添加到 url：
```
const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q')
  const src = searchParams.get('src')
  const f = searchParams.get('f')

  const updateOrder = (sort) => {
    setSearchParams({ sort })
  }

  return (
    ...
  )
}
```

## 8. Route 配置
React Router v6 内置了一个 useRoutes Hook，它在功能上等同于 `<Routes>`，但它是使用 JavaScript 对象而不是 `<Route>` 元素来定义路由。这个对象具有与普通 `<Route>` 元素相同的属性，但它们不需要使用 JSX 来编写。

useRoutes 的返回值要么是一个有效的 React 元素（可以使用它来渲染路由树），如果没有匹配项，则返回 null。

假如应用中有以下路径：
```
/
/invoices
  :id
  pending
  complete
```
使用 `<Route>` 组件来定义路由将会是这样的：
```
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":id" element={<Invoice />} />
          <Route path="pending" element={<Pending />} />
          <Route path="complete" element={<Complete />} />
        </Route>
      </Routes>
    </div>
  );
}
```
而 useRoutes 是利用 JavaScript 对象完成的，而不是使用 React 元素 (JSX) 来声明路由。定义形式如下：
```
import { useRoutes } from "react-router-dom";

const routes = useRoutes([
  { path: "/", element: <Home /> },
  {
    path: "/invoices",
    element: <Invoices />,
    children: [
      { path: ":id", element: <Invoice /> },
      { path: "/pending", element: <Pending /> },
      { path: "/complete", element: <Complete /> },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
}
```