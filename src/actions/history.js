import actions from './index';
// 路由跳转
export const QKhistory = (url) => {
  actions.setGlobalState({ url });
};
