# DC-Plot 🌎

## 简介

> DC-Plot 是基于 DC-SDK 开发的标绘模块，如点、线、面绘制和一些军事图标的绘制

## 安装

```
CDN
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-plot@1.1.0/dist/dc.plot.min.js"></script>
```

`NPM / YARN` `(推荐使用)`

```text
 yarn add  @dvgis/dc-plot
 npm install @dvgis/dc-plot
import DcPlot from 'dvgis/dc-plot/dist/dc.plot.min'
DC.use(DcPlot)
```

::: warning

dc-plot 依赖于 dc-sdk 和 dc-overlay，使用前请确认 dc-sdk 和 dc-overlay 已导入

:::

## DC.Plot

> 标绘类

### example

```js
let plot = new DC.Plot(viewer, {})
plot.draw(DC.OverlayType.POINT, (overlay) => {}, {})
```

### creation

- constructor(viewer,options)

  DC.Plot 构造函数

  - 参数
    - `{Viewer} viewer`：场景
    - `{Object} options`：属性
  - 返回值：`plot`

```json
//属性参数(可选)
{
  "icon_center": "**.png", // 自定义的中心点图标
  "icon_anchor": "**.png", //自定义的锚点图标
  "icon_midAnchor": "**.png", //自定义的中心锚点图标
  "icon_size": [12, 12] //自定义的中心锚点大小
}
```

### methods

- draw(type,callback,style)

标绘

- 参数
  - `{String} type`：覆盖物类型，参照 [OverlayType](https://resource.dvgis.cn/dc-api/dc-sdk/#overlaytype)
  - `{Function} callback`：标绘完成的回调函数，参数为覆盖物
  - `{Object} style`：标绘的覆盖物样式设置
- 返回值：`this`
- edit(overlay,callback)

编辑

- 参数
  - `{Overlay} overlay`：覆盖物
  - `{Function} callback`：编辑完成的回调函数，参数为覆盖物
- 返回值：`this`

