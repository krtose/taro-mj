

# 环境
node v16.9.0<br/>
pnpm 8.6.6

# 运行步骤
pnpm install
pnpm dev:weapp

# 打包
1. build和dev的区别是dev有--watch，会监听代码改动
2. 打包结果在dist文件夹下
3. 打包微信小程序运行build:weapp, 打包抖音运行build:tt，打包结果在dist，每次打包会覆盖之前的结果
```
    "build:weapp": "taro build --type weapp",
    "build:swan": "taro build --type swan",
    "build:alipay": "taro build --type alipay",
    "build:tt": "taro build --type tt",
    "build:h5": "taro build --type h5",
    "build:rn": "taro build --type rn",
    "build:qq": "taro build --type qq",
    "build:jd": "taro build --type jd",
    "build:quickapp": "taro build --type quickapp",
    "dev:weapp": "npm run build:weapp -- --watch",
    "dev:swan": "npm run build:swan -- --watch",
    "dev:alipay": "npm run build:alipay -- --watch",
    "dev:tt": "npm run build:tt -- --watch",
    "dev:h5": "npm run build:h5 -- --watch",
    "dev:rn": "npm run build:rn -- --watch",
    "dev:qq": "npm run build:qq -- --watch",
    "dev:jd": "npm run build:jd -- --watch",
    "dev:quickapp": "npm run build:quickapp -- --watch"
```


# 广告
AD需要在小程序后台配置unitID
https://developers.weixin.qq.com/miniprogram/dev/component/ad.html

# 状态表
|       | 原图未上传                  | 原图上传中                  | 原图上传成功             | 原图上传失败                 |
|-------|------------------------|------------------------|--------------------|------------------------|
| 原图预览框 | 显示+号，可点击上传图片，进入原图上传中状态 | Loading，结束后进入上传成功或失败状态 | 显示x号，点击恢复至未上传状态    | 显示失败原因，显示x号，点击恢复至未上传状态 |
| 生成按钮  | 点击提示请上传图片              | 点击提示请等待图片上传            | 点击调用生成接口，进入结果生成中状态 | 点击提示请重新上传图片            |

|       | 结果图未生成      | 结果图生成中      | 结果图生成成功     | 结果图生成失败     |
|-------|-------------|-------------|-------------|-------------|
| 生成按钮  | 点击进入结果生成中状态 | 被弹框遮挡，啥也不用做 | 点击进入结果生成中状态 | 点击进入结果生成中状态 |
| 结果展示框 | -           | -           | 显示结果图       | 显示失败原因      |
| 弹框广告  | 不显示         | 显示          | 可关闭         | 可关闭         |