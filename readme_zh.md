# 前言

快速使用阿里云 Funcraft 工具

# 测试

template.yaml

```
FunDemo:
  Component: fun
  Provider: alibaba
  Access: release
  Properties:
    Region: cn-hangzhou
    Config: s
```


# 完整配置

```
FunDemo:
  Component: fun
  Provider: alibaba
  Access: release
  Properties:
    Region: cn-hangzhou
    Config: s
```

# 参数详情

| 参数名 |  必填  |  类型  |  参数描述  |
| --- |  ---  |  ---  |  ---  |
| Region | True | Enum | 地域 |
| Config | True | Enum | 基础配置 |
| Template | False | String | Fun的配置文件，默认为`template.yaml` |

# 操作与Fun相关配置

详细参考： [https://github.com/alibaba/funcraft/blob/master/docs/specs/2018-04-03.md](https://github.com/alibaba/funcraft/blob/master/docs/specs/2018-04-03.md)