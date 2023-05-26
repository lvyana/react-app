# 1、useState在组件式编程里的基本用处
useState 是一个组件定义状态信息,所谓“状态”,就是该组件任意时刻都存放的各种数据

&nbsp;

# 2、useState更新
1. 1、当组件更新state时,会触发组件的重新渲染,可以认为发生了局部刷新

2. 2、在函数内多次更新,会合并处理

3. 3、18之前手动合并处理unstable_batchedUpdates,18之后自动合并处理就不需要了

&nbsp;

# 3、代码示例
```
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
};
```