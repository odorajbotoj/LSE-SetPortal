# LSE-SetPortal
LSE-SetPortal LeviLamina(JS)插件 设置末地折跃门的传送目标点

## 使用方式
`setportal <BlockPos: x y z> <ExitPortal: x y z>` 指定BlockPos位置的折跃门的传送出口为ExitPortal。

## 注意事项
+ 仅op以上权限可以执行。
+ 坐标均为整型坐标。
+ 若传送出口设在空中，则游戏会自动向下偏移传送点或生成末地石平台。
