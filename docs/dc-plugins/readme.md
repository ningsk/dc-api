# DC-Plugins 🌎

## 简介

> DC-Plugins 基于 DC-SDK 开发的插件库，主要包含动画、效果、材质、热区图层、聚合图层、Mapv

## 安装

```
CDN
<script src="https://cdn.jsdelivr.net/npm/@dvgis/dc-plugins@1.10.1/dist/dc.plugins.min.js"></script>
```

`NPM / YARN`  `(推荐使用)`

```text
yarn add @dvgis/dc-plugins
npm install @dvgis/dc-plugins
import DcPlugins from 'dvgis/dc-plugins/dist/dc.plugins.min' //插件包
DC.use(DcPlugins)
```



::: warning

dc-plugins 依赖于 dc-sdk，使用前请确认 dc-sdk 已导入

:::

## DC.ClusterLayer

> 聚合图层，继承于[Layer](https://resource.dvgis.cn/dc-api/dc-sdk/#layer)

### example

```js
let layer = new DC.ClusterLayer('id')
viewer.addLayer(layer)
```

### creation

- constructor(id,[options])

  DC.ClusterLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{Object} options`：属性配置
  - 返回值：`clusterLayer`

```json
// 属性参数(可选)
{
  "size": 48, //聚合的尺寸
  "pixelRange": 40, //像素范围
  "gradient": {
    "0.0001": DC.Color.DEEPSKYBLUE,
    "0.001": DC.Color.GREEN,
    "0.01": DC.Color.ORANGE,
    "0.1": DC.Color.RED
  }, // 幅度颜色设置
  "style": "circle", // circle 和 clustering
  "fontSize": 12, // 字体大小
  "fontColor": DC.Color.BLACK // 字体颜色
}
```

## DC.HeatLayer

> 热区图层，继承于[Layer](https://resource.dvgis.cn/dc-api/dc-sdk/#layer)

### example

```js
let bounds = [new DC.Position(100, 20), new DC.Position(150, 26)]
let layer = new DC.HeatLayer('id', bound)
viewer.addLayer(layer)
```

### creation

- constructor(id,bounds,[options])

  DC.HeatLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{Array<DC.Position>} bounds`：热区范围，有长度为 2 的数组组成，第一个为西南坐标，第二个为东北坐标
    - `{Object} options`：属性配置
  - 返回值：`heatLayer`

```json
//属性参数(可选)
{
  "maxOpacity": 0.8, // 最大透明度
  "minOpacity": 0.1, // 最小透明度
  "blur": 0.85, // 模糊度
  "gradient": {
    "0.5": "blue",
    "0.8": "red",
    "0.95": "white",
    "0.6": "yellow",
    "0.5": "green"
  }, //颜色设置
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

### methods

- setPositions(positions)

  设置点位

  - 参数
    - `{Array<Object>} positions`：点位信息
  - 返回值：`heatLayer`

  ```json
  //点位信息参数
  {
    "lng": "", //经度
    "lat": "" //纬度
  }
  ```

## DC.WindLayer

> 风向图层，继承于[Layer](https://resource.dvgis.cn/dc-api/dc-sdk/#layer)

### example

```js
let layer = new DC.WindLayer('id')
viewer.addLayer(layer)
```

### creation

- constructor(id,[options])

  DC.WindLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{Object} options`：属性配置
  - 返回值：`windLayer`

```json
//属性参数(可选)
{
  "globalAlpha": 0.9, //透明度
  "lineWidth": 1, // 线宽
  "colorScale": "#fff", //颜色
  "velocityScale": 1 / 25,
  "maxAge": 90,
  "paths": 800, // 路径数
  "frameRate": 20,
  "useCoordsDraw": true,
  "gpet": true
}
```

### methods

- setData(data)

  设置风向数据

  - 参数
    - `{Object} data`：风向数据
  - 返回值：`windLayer`

- ***setOptions(options)\***

  设置风向数据

  - 参数
    - `{Object} options`：配置信息，参考构造函数的配置信息
  - 返回值：`windLayer`

## DC.Weather

> 天气效果

### example

```js
let weather = new DC.Weather()
viewer.use(weather)
```

### creation

- constructor()

  DC.Weather 构造函数

  - 返回值：`weather`

### properties

- [`{Rain} rain`](https://resource.dvgis.cn/dc-api/dc-plugins/#rain)：雨天 ***`readonly`\***
- [`{Snow} snow`](https://resource.dvgis.cn/dc-api/dc-plugins/#snow)：雪天 ***`readonly`\***
- [`{Fog} snow`](https://resource.dvgis.cn/dc-api/dc-plugins/#fog)：雾天 ***`readonly`\***
- [`{Cloud} cloud`](https://resource.dvgis.cn/dc-api/dc-plugins/#cloud)：云 ***`readonly`\***

## Rain

> 雨天效果

### example

```js
viewer.weather.rain.enable = true
viewer.weather.rain.speed = 2
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} speed`：速度

## Snow

> 雪天效果

### example

```js
viewer.weather.snow.enable = true
viewer.weather.snow.speed = 2
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} speed`：速度

## Fog

> 雾天效果

### example

```js
viewer.weather.fog.enable = true
viewer.weather.fog.fogColor = DC.Color.BLACK
```

### properties

- `{Boolean} enable`：是否启用
- `{Color} fogColor`：颜色，
- `{Object} fogByDistance`：距离可见，默认： { near: 10, nearValue: 0, far: 2000, farValue: 1.0 }

## Cloud

> 云效果

### example

```js
viewer.weather.cloud.enable = true
viewer.weather.cloud.rotateAmount = 0.02
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} rotateAmount`：移动增量，可为负数

## DC.Effect

> 效果类

### example

```js
let effect = new DC.Effect()
viewer.use(effect)
```

### creation

- constructor()

  DC.Effect 效果函数

  - 返回值：`effect`

### properties

- [`{BlackAndWhite} blackAndWhite`](https://resource.dvgis.cn/dc-api/dc-plugins/#blackandwhite)：黑白 ***`readonly`\***
- [`{Bloom} bloom`](https://resource.dvgis.cn/dc-api/dc-plugins/#bloom)：泛光 ***`readonly`\***
- [`{Brightness} brightness`](https://resource.dvgis.cn/dc-api/dc-plugins/#brightness)：明亮 ***`readonly`\***
- [`{DepthOfField} depthOfField`](https://resource.dvgis.cn/dc-api/dc-plugins/#depthoffield)：景深 ***`readonly`\***
- [`{LensFlare} lensFlare`](https://resource.dvgis.cn/dc-api/dc-plugins/#lensflare)：镜头耀斑 ***`readonly`\***
- [`{Night} night`](https://resource.dvgis.cn/dc-api/dc-plugins/#night)：夜视 ***`readonly`\***
- [`{Silhouette} silhouette`](https://resource.dvgis.cn/dc-api/dc-plugins/#silhouette)：描边 ***`readonly`\***

## BlackAndWhite

> 黑白效果

### example

```js
viewer.effect.blackAndWhite.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} gradations`：强度
- `{Array} selected`：设置后期作用的覆盖物

## Bloom

> 泛光效果

### example

```js
viewer.effect.bloom.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} contrast`：对比度
- `{Number} brightness`：亮度
- `{Number} glowOnly`：只发光
- `{Number} delta`：Delta
- `{Number} sigma`：Sigma
- `{Number} stepSize`：StepSize
- `{Array} selected`：设置后期作用的覆盖物

## Brightness

> 明亮效果

### example

```js
viewer.effect.brightness.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Number} intensity`：强度
- `{Array} selected`：设置后期作用的覆盖物

## DepthOfField

> 景深效果

### example

```js
viewer.effect.depthOfField.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Number}} focalDistance`：焦距
- `{Number} delta`：Delta
- `{Number} sigma`：Sigma
- `{Number} stepSize`：StepSize
- `{Array} selected`：设置后期作用的覆盖物

## LensFlare

> 镜头耀斑效果

### example

```js
viewer.effect.lensFlare.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Number}} intensity`：强度
- `{Number} distortion`：扭曲度
- `{Number} dirtAmount`：分散度
- `{Number} haloWidth`：光圈宽度
- `{Array} selected`：设置后期作用的覆盖物

## Night

> 夜视效果

### example

```js
viewer.effect.night.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Array} selected`：设置后期作用的覆盖物

## Silhouette

> 描边效果

### example

```js
viewer.effect.silhouette.enable = true
```

### properties

- `{Boolean} enable`：是否启用
- `{Color} color`：颜色
- `{Number} length`：长度
- `{Array} selected`：设置后期作用的覆盖物

## Animation

> 场景动画基类

WARNING

该类无法实例化

### methods

- start()

  开始动画

  - 返回值：`this`

- stop()

  停止动画

  - 返回值：`this`

## DC.AroundPoint

> 点位环绕,继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let aroundPoint = new DC.AroundPoint(viewer, '120.121, 31.12')
aroundPoint.start()
```

### creation

- constructor(viewer,position,options)

  DC.AroundPoint 构造函数

  - 参数
    - `{Viewer} viewer`：3D 场景
    - `{Position|String|Array} position`：点位
    - `{Object} options`：配置参数
  - 返回值：`aroundPoint`

```json
//配置参数（可选）
{
  "heading": 0, //偏移角度
  "pitch": 0, //翻转角度
  "range": 0, //距离
  "duration": 0, //间隔，单位：秒,当此值大于0时，callback才会生效
  "callback": null, //完成回调函数
  "context": null //回调函数执行上下文
}
```

## DC.AroundView

> 相机环绕，继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let aroundView = new DC.AroundView(viewer)
aroundView.start()
```

### creation

- constructor(viewer,options)

  DC.AroundView 构造函数

  - 参数
    - `{Viewer} viewer`：3D 场景
    - `{Object} options`：配置参数
  - 返回值：`aroundView`

```json
//配置参数（可选）
{
  "heading": 0, //偏移角度
  "duration": 0, //间隔，单位：秒，当此值大于0时，callback才会生效
  "callback": null, //完成回调函数
  "context": null //回调函数执行上下文
}
```

## DC.CircleScan

> 扫描圈，继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let circleScan = new DC.CircleScan(viewer, '120, 20', 200)
circleScan.start()
```

### creation

- constructor(viewer,position,radius,options)

  DC.CircleScan 构造函数

  - 参数
    - `{Viewer} viewer`：场景
    - `{DC.Position} position`：位置
    - `{Number} radius`：半径
    - `{Object} options`：属性
  - 返回值：`circleScan`

```json
// 属性参数（可选）
{
  "color": DC.Color.BLUE, // 颜色
  "duration": 5 // 间隔
}
```

## DC.Flying

> 定点巡航，继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let flying = new DC.Flying(viewer)
flying.positions = ['121.234,21.212,0,-29', '121.435,21.212,0,-29']
circleScan.start()
```

### creation

- constructor(viewer,options)

  DC.Flying 构造函数

  - 参数
    - `{Viewer} viewer`：场景
    - `{Object} options`：配置参数
  - 返回值：`flying`

```json
// 属性参数（可选）
{
  "loop": false, //是否循环,
  "dwellTime": 3, //驻留时间
  "callback": null //回调函数
}
```

### properties

- `{Array} positions`：点位
- `{Array} durations`：每个点位的飞行间隔时间，当数组长度为 1 时，每个间隔时间相同，如果不为 1 时，长度必须和点位长度相等

### methods

- start()

  开始动画

  - 返回值：`this`

- pause()

  暂停

  - 返回值：`this`

- ***restore()\***

  继续

  - 返回值：`this`

## DC.GlobeRotate

> 地球自转，继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let globeRotate = new DC.GlobeRotate(viewer, {
  duration: 5,
  speed: 1000,
  callback: () => {},
})
globeRotate.start()
```

### creation

- ***constructor(viewer,[options])\***

  DC.GlobeRotate 构造函数

  - 参数
    - `{DC.Viewer} viewer`：3D 场景
    - `{Object} options`：配置参数
  - 返回值：`globeRotate`

```json
//配置参数（可选）
{
  "speed": 12 * 1000, //速度
  "duration": 0, //持续时间,当此值大于0时，callback才会生效
  "callback": null, //执行完成的回调函数
  "context": null //回调函数执行上下文
}
```

## DC.RadarScan

> 雷达扫描，继承于[Animation](https://resource.dvgis.cn/dc-api/dc-plugins/#animation)

### example

```js
let radarScan = new DC.RadarScan(viewer, '120, 20', 200)
radarScan.start()
```

### creation

- constructor(viewer,position,radius,options)

  DC.RadarScan 构造函数

  - 参数
    - `{Viewer} viewer`：场景
    - `{DC.Position} position`：位置
    - `{Number} radius`：半径
    - `{Object} options`：属性
  - 返回值：`radarScan`

```json
// 属性参数（可选）
{
  "color": DC.Color.BLUE, // 颜色
  "duration": 5 // 间隔
}
```

## DC.RoamingController

> 漫游控制

### example

```js
let rc = new DC.RoamingController(viewer)
```

### creation

- constructor(viewer)

  DC.RoamingController 构造函数

  - 参数
    - `{Viewer} viewer`：3D 场景
  - 返回值：`roamingController`

### properties

- `{JulianDate} startTime`：开始时间 ***`readonly`\***
- `{Number} duration`：间隔，单位：秒 ***`readonly`\***

### methods

- setStartTime(startTime)

  设置开始时间

  - 参数
    - `{Date} startTime`：开始时间
  - 返回值：`this`

- play()

  播放所有路径

  - 返回值：`this`

- pause()

  暂停所有路径

  - 返回值：`this`

- restore()

  继续播放所有路径

  - 返回值：`this`

- changeSpeed(speed)

  改变播放速度

  - 参数
    - `{Number} speed`：速度
  - 返回值：`this`

- ***addPath(path)\***

  添加路径

  - 参数
    - `{DC.RoamingPath} path`：路径
  - 返回值：`this`

- ***getPath(id)\***

  根据唯一标识获取路径

  - 参数
    - `{String} id`：唯一标识
  - 返回值：`path`

- ***removePath(path)\***

  移除路径

  - 参数
    - `{RoamingPath} path`：路径
  - 返回值：`path`

- ***clearPath()\***

  移除所有路径

  - 返回值：`this`

- ***trackedPath(path)\***

  跟踪某一条路径

  - 参数
    - `{RoamingPath} path`：路径
  - 返回值：`this`

- releasePath(path)

  取消跟踪某一条路径

  - 参数
    - `{RoamingPath} path`：路径
  - 返回值：`this`

- releaseCamera()

  释放相机

  - 返回值：`this`

## DC.RoamingPath

> 漫游路径

### example

```js
let path = new DC.RoamingPath('path1', 20， (position,isLast) => {}, {
  showPath: true,
})
```

### creation

- constructor(id, duration, callback, options)

  DC.RoamingPath 构造函数

  - 参数
    - `{String} id`：唯一标识
    - `{Number} duration`：间隔时间，单位：秒
    - `{Function} callback`：每一个点位到达回调函数，参数有：position(位置信息),isLast(是否为最后的点位)
    - `{Object} options`：配置参数
  - 返回值：`roamingPath`

```json
//配置参数（可选）
{
  "showPath": false, //显示路径
  "pathWidth": 1, //路径宽度
  "pathMaterial": DC.Color.ORANGE.withAlpha(0.8), //路径材质
  "pathLeadTime": 1 // 路径提前时间
}
```

### properties

- `{String} id`：唯一标识 ***`readonly`\***
- `{String} state`：状态 ***`readonly`\***
- `{Date} startTime`：开始时间，设置后会独立于控制器的开始时间
- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- ***setMode(mode)\***

  设置路径模式

  - 参数
    - `{String} mode`：模式，speed:匀速，distance:根据距离设置时间
  - 返回值：`this`

- ***setModel(modelUrl,style)\***

  设置模型

  - 参数
    - `{String} modelPath`：模型路径
    - `{Object} style`：样式，详情参考：[DC.Model](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-model)
  - 返回值：`this`

- ***setBillboard(icon,style)\***

  设置图标

  - 参数
    - `{String} icon`：图标路径
    - `{Object} style`：样式，参考：[DC.Billboard](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-billboard)
  - 返回值：`this`

- ***setLabel(text,style)\***

  设置文本

  - 参数
    - `{String} text`：文本
    - `{Object} style`：样式，参考：[DC.label](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-label)
  - 返回值：`this`

- ***setPositions(positions)\*** `deprecated`

  设置坐标串

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`this`

## MaterialProperty

::: warning

在真实世界里，每个物体会对光产生不同的反应。钢看起来比陶瓷花瓶更闪闪发光，一个木头箱子不会像钢箱子一样对光产生很强的反射。每个物体对镜面高光也有不同的反应。有些物体不会散射(Scatter)很多光却会反射(Reflect)很多光，结果看起来就有一个较小的高光点(Highlight)，有些物体散射了很多，它们就会产生一个半径更大的高光。如果我们想要在 OpenGL 中模拟多种类型的物体，我们必须为每个物体分别定义材质(Material)属性。

:::

## DC.ColorMaterialProperty

> 颜色材质

### example

```js
let material = new DC.ColorMaterialProperty(DC.Color.RED)
```

### creation

- constructor(color)

  DC.ColorMaterialProperty 构造函数

  - 参数
    - `{DC.Color} color`：颜色
  - 返回值：`material`

## DC.ImageMaterialProperty

> 图片材质

### example

```js
let material = new DC.ImageMaterialProperty({
  image: '**/**.png',
  transparent: true,
})
```

### creation

- ***constructor(options)\***

  DC.ImageMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "image": "", // 图片地址
  "repeat": { "x": 1, "y": 1 }, // 图片重复
  "color": DC.Color.WHITE, // 图片颜色
  "transparent": false // 材质是否透明
}
```

### properties

- `{String} image`：图片地址
- `{Object} repeat`：图片重复
- `{DC.Color} color`：图片颜色
- `{Boolean} transparent`：材质是否透明

## DC.PolylineDashMaterialProperty

> 虚线材质

### example

```js
let material = new DC.PolylineDashMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- ***constructor(options)\***

  DC.PolylineDashMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 虚线颜色
  "gapColor": DC.Color.TRANSPARENT, // 间隔颜色
  "dashLength": 16.0 // 虚线片段长度
}
```

### properties

- `{DC.Color} color`：虚线颜色
- `{DC.Color} gapColor`：间隔颜色
- `{Number} dashLength`：虚线片段长度

## DC.PolylineArrowMaterialProperty

> 箭头材质

### example

```js
let material = new DC.PolylineArrowMaterialProperty(DC.Color.WHITE)
```

### creation

- ***constructor(color)\***

  DC.PolylineArrowMaterialProperty 构造函数

  - 参数
    - `{DC.Color} color`：箭头颜色
  - 返回值：`material`

### properties

- `{DC.Color} color`：箭头颜色

## DC.PolylineOutlineMaterialProperty

> 边线材质

### example

```js
let material = new DC.PolylineOutlineMaterialProperty({
  color: DC.Color.WHITE,
  outlineColor: DC.Color.BLACK,
})
```

### creation

- constructor(options)

  DC.PolylineOutlineMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "outlineColor": DC.Color.BLACK, // 边线颜色
  "outlineWidth": 1 // 边线宽度
}
```

### properties

- `{DC.Color} color`：颜色
- `{DC.Color} outlineColor`：边线颜色
- `{Number} outlineWidth`：边线宽度

## DC.PolylineGlowMaterialProperty

> 光晕材质

### example

```js
let material = new DC.PolylineGlowMaterialProperty({
  color: DC.Color.WHITE,
  glowPower: 0.25,
})
```

### creation

- constructor(options)

  DC.PolylineGlowMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "glowPower": 0.25, // 发光强度，以总线宽的百分比表示
  "taperPower": 1 // 渐缩效果的强度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} glowPower`：发光强度
- `{Number} taperPower`：渐缩效果的强度

## DC.PolylineFlowMaterialProperty

> 流动线材质

### example

```js
let material = new DC.PolylineFlowMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- constructor(options)

  DC.PolylineFlowMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10, // 速度,
  "percent": 0.3, // 比例
  "gradient": 0.1 // 透明程度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度
- `{Number} percent`：比例,
- `{Number} gradient`：透明程度,

## DC.PolylineTrailMaterialProperty

> 颜色轨迹线材质

### example

```js
let material = new DC.PolylineTrailMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- constructor(options)

  DC.PolylineTrailMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度

## DC.PolylineImageTrailMaterialProperty

> 图片轨迹线材质

### example

```js
let material = new DC.PolylineImageTrailMaterialProperty({
  color: DC.Color.WHITE,
  image: '**/*.png',
  repeat: { x: 10, y: 1 },
})
```

### creation

- ***constructor(options)\***

  DC.PolylineImageTrailMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10, // 速度
  "image": "**/*.png", // 图片地址
  "repeat": { "x": 10, "y": 1 } //重复规则
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度
- `{String} image`：图片地址
- `{Object} repeat`：重复规则

## DC.WaterMaterialProperty

> 流动水材质

### example

```js
let material = new DC.WaterMaterialProperty({
  baseWaterColor: DC.Color.WHITE,
  normalMap: '**/**.png',
})
```

### creation

- ***constructor(options)\***

  DC.WaterMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "baseWaterColor": DC.Color.WHITE, // 水体颜色
  "blendColor": DC.Color.WHITE, // 混合颜色
  "specularMap": "", // 镜面图
  "normalMap": "", // 法线图
  "frequency": 1000, //波纹数量
  "animationSpeed": 0.03, // 动画速度
  "amplitude": 10, //水波振幅
  "specularIntensity": 10 //镜面反射强度
}
```

### properties

- `{DC.Color} baseWaterColor`：颜色
- `{DC.Color} blendColor`：混合颜色
- `{String} normalMap`：法线图
- `{String} specularMap`：镜面图

## DC.CircleFadeMaterialProperty

> 圆逐渐消逝材质

### example

```js
let material = new DC.CircleFadeMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- ***constructor(options)\***

  DC.CircleFadeMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度

## DC.CircleScanMaterialProperty

> 圆扫描材质

### example

```js
let material = new DC.CircleScanMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- ***constructor(options)\***

  DC.CircleScanMaterialProperty 构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度

## DC.CircleWaveMaterialProperty

> 圆波纹材质

### example

```js
let material = new DC.CircleWaveMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- ***constructor(options)\***

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10, // 速度
  "count": 5, //数量
  "gradient": 0.1 //强度
}
```

### properties

- `{Color} color`：颜色
- `{Number} speed`：速度
- `{Number} count`：数量
- `{Number} gradient`：强度

## DC.WallTrailMaterialProperty

> 流动墙材质

### example

```js
let material = new DC.WallTrailMaterialProperty({
  color: DC.Color.WHITE,
})
```

### creation

- ***constructor(options)\***

  构造函数

  - 参数
    - `{Object} options`：属性
  - 返回值：`material`

```json
// 属性参数（可选）
{
  "color": DC.Color.WHITE, // 颜色
  "speed": 10 // 速度
}
```

### properties

- `{DC.Color} color`：颜色
- `{Number} speed`：速度

