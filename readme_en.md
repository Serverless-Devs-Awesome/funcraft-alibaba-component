# Preface
  
  Quick use of alicloud funcraft tool

# Test

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


# Complete configuration

```
FunDemo:
  Component: fun
  Provider: alibaba
  Access: release
  Properties:
    Region: cn-hangzhou
    Config: s
```

# Parameter details

| Name |  Required  |  Type  |  Description  |
| --- |  ---  |  ---  |  ---  |
| Region | True | Enum | Region |
| Config | True | Enum | Base config |
| Template | False | String | The config file for Fun，default is `template.yaml` |

# Operation and fun related configuration

Detailed reference： [https://github.com/alibaba/funcraft/blob/master/docs/specs/2018-04-03-zh-cn.md](https://github.com/alibaba/funcraft/blob/master/docs/specs/2018-04-03-zh-cn.md)