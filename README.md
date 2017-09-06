图说APP

## 安装

*
### 安装ionic和cordova:
```bash
npm i -g ionic cordova
npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

### 安装依赖包:
```bash
npm install
```

### 在浏览器中运行:
```bash
ionic serve
```

### 生成IOS APP:
需要在MAC系统下使用Xcode编译生成APP安装到Iphone
1.添加ios版
```bash
ionic cordova platform add ios
```

2.编译ios项目
```bash
ionic cordova build ios
```

3.用Xcode打开platforms\ios项目编译生成APP安装到Iphone

### 生成Android APP:
0.需要首先安装Android运行环境
1.添加android版
```bash
ionic cordova platform add android
```

2.编译生成android app并安装运行
```bash
ionic cordova run android
```
