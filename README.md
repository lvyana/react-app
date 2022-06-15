### 添加提交校验

#### 添加 `husky`

-   [husky 官方文档](https://typicode.github.io/husky/#/)

1. 安装 `husky` 并启用 `git hooks`

```
npx husky add .husky/pre-commit "npm run lint"
```

2. 修改 `package.json` 文件

```
// package.json
{
    scripts: {
        ...,
        "lint": "eslint . --ext .js,.ts,.vue --ignore-path .gitignore",
        "prepare": "husky install"
    },
}
```

3. 添加 `commit` 提交内容规范 `git hooks`

```
npx husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
```

4. 添加 `commitlint.config.js` 及相关依赖

```
// 依赖
yarn add @commitlint/cli @commitlint/config-conventional -D
// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
        ],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
    },
};
// commit 的内容，只允许使用下面7个标识。
// feat: 新功能
// fix: 修补bug
// docs: 文档（documentation）
// style: 样式/格式（不影响代码运行的变动）
// refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
// test: 增加测试
// chore: 构建过程或辅助工具的变动
```

#### 添加 `lint-staged`

-   [lint-staged 官方文档](https://www.npmjs.com/package/lint-staged)
-   `lint-staged` 在我们提交代码时，只会对修改的文件进行检查、修复处理，以保证提交的代码没有语法错误，不会影响其他伙伴在更新代码无法运行的问题。

1. 安装

```
yarn add lint-staged -D
```

2. 添加 `.lintstagedrc` 配置文件及依赖

-   [stylelint 规则文档](https://stylelint.io/user-guide/usage/cli)

```
// 依赖
yarn add husky -D
yarn add -D stylelint stylelint-config-standard
// .lintstagedrc
{
  "*.{js,ts,vue}": ["npm run lint"],
  "*.{html,vue,css,scss,sass,less}": ["stylelint --fix"]
}
```

3. 修改 `pre-commit` 文件

```
// .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
- npm run lint
+ yarn lint-staged --allow-empty "$1"
```

#### 测试代码检查及提交规范

-   [VS Code 配置](https://github.com/detanx/Vue3-Element-Plus/blob/main/vscode-setting.json)

1. 代码检查
   ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd4e85d7f8d240108049ef3bc9b59afd~tplv-k3u1fbpfcp-watermark.image)
2. `git` 提交规范
   ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24f9246dee4247039d9afbd416848e78~tplv-k3u1fbpfcp-watermark.image)
