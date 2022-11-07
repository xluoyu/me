---
  title: '常用的字符串方法'
---

## 组件名称转换

`ElButton` => `el-button`

```js
function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}
```

## 正则提取

提取字符串两者之前的内容，不包含相邻内容

`(?<=xxxx)` 表示所需内容之前
`(?=xxxx)` 表示所需内容之后

```js
function getComponentName(path: string) {
  const reg = /(?<=(packages\/fighting-design\/)).*(?=(\/src))/g
  const res = path.match(reg)

  if (res) {
    return res[0]
  }
  return null
}
```