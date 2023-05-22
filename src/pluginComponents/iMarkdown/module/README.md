## 演示地址
演示地址: [http://114.132.242.253](http://114.132.242.253)

## 1、使用yarn创建react ts项目
``` 
yarn create react-app antd-demo-ts --template typescript 
```

## 2、使用craco拓展webpack配置
```
yarn add @craco/craco -D
```

## 3、使用eslint stylelint prettier配置代码规范与约束
```
yarn add eslint stylelint prettier -D
```
 
### 3.1、eslint相关依赖
```
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

package.json添加命令
```{
  "script": {
    "lint": "eslint --ext .js,.ts,.tsx src/ --ignore-path .gitignore",
		"lint:fix": "eslint \"src/**/*.{js,ts,tsx}\" --ignore-path .gitignore --fix",
  }
}
```

配置见.eslintrc.js .eslintignore文件

### 3.2、prettier相关依赖
```
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

配置见.prettierrc.js .prettierignore文件

### 3.3、stylelint相关依赖
```
yarn add stylelint-config-standard stylelint-config-css-modules -D
```

package.json添加命令
```{
  "script": {
    	"stylelint": "stylelint \"src/**/*.{css,less,scss}\"",
		"stylelint:fix": "stylelint --fix \"src/**/*.{css,less,scss}\"",
  }
}
```
配置见.stylelintrc.js .stylelintignore文件

## 4、配置lint-staged

有时候我们只想对自己改动的代码进行检查，而忽略项目其他代码。我们可以使用lint-staged，它可以让我们执行检查命令只对 git 缓存区的文件有效。

```
yarn add lint-staged -D
```

package.json添加命令
```{
  "script": {
   		"lint-staged": "lint-staged"
  }
}
```
配置见.lintstagedrc.json文件

## 5、配置husky

前面都是需要手动操作的，husky 可以让我们在 git 提交的时候自动执行命令

```
yarn add husky -D
```

### 5.1、我们在package.json添加命令
```
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

### 5.2、然后执行这条命令
```
yarn prepare，husky
```

执行初始化，可以发现我们的项目目录多了.husky文件夹，代表初始化成功。

### 5.3、接着我们执行
```
npx husky add .husky/pre-commit "yarn run lint-staged"
```

### 5.4、配置commitlint.config.js文件

### 5.5、 配置.husky/pre-commit 文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Run commitlint on staged files
npx --no-install commitlint --edit $1
```

### 5.6、 配置.husky/commit-msg 文件
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn commitlint --edit $1
```

大功告成。之后我们 git 提交的时候会自动执行yarn run lint-staged命令，即检查 git 缓存区的代码问题，若存在问题，lint-staged会终止并报错，git 提交自然不会成功。