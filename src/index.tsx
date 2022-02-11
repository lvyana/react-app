import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './views/expenses';
import Invoices from './views/invoices';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import actions from './actions';
// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function render(props: any) {
  // const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter
        basename={
          (window as any).__POWERED_BY_QIANKUN__
            ? 'qiankun/child/sub-react'
            : '/'
        }
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="app" element={<Expenses />} />
          <Route path="about" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  actions.setActions(props); //注入actions实例

  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
}
