---
  路径总和 II
---

# 路径总和 II

## 题目描述

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

示例1：

![](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

[查看原题](https://leetcode.cn/problems/path-sum-ii/)


## 解法一: 深度优先

```js
var pathSum = function(root, targetSum) {
  const res = []

  function run(root, target, list) {
    if (!root) return
    const nextTarget = target - root.val

    list.push(root.val)

    run(root.left, nextTarget, [...list])
    run(root.right, nextTarget, [...list])

    if (!root.left && !root.right && nextTarget == 0) {
      // 叶子节点
      res.push(list)
      return
    }
  }

  run(root, targetSum, [])

  return res
};
```

## 解法二：广度优先

```js
var pathSum = function(root, targetSum) {
  const res = []

  function run(root, target) {
    if (!root) return
    const nextTarget = target - root.val

    if (root.left) {
      root.left.parent = root
      run(root.left, nextTarget)
    }
    if (root.right) {
      root.right.parent = root
      run(root.right, nextTarget)
    }

    if (!root.left && !root.right && nextTarget == 0) {
      // 叶子节点
      pushRes(root)
    }
  }

  function pushRes(root) {
    const t = []
    while(root.parent) {
      t.unshift(root.val)
      root = root.parent
    }
    t.unshift(root.val)
    res.push(t)
  }

  run(root, targetSum)

  return res
};
```