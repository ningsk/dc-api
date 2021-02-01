# DC-Overlay 🌎

## 简介

> DC-Overlay 是基于 DC-SDK 开发的不常用覆盖物模块，主要包括盒、走廊、圆柱、墙体、水面等

::: warning

dc-overlay 依赖于 dc-sdk，使用前请确认 dc-sdk 已导入

:::

## DC.Box

> 盒要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20)
let box = new DC.Box(position, 20, 30, 40)
```

### creation

- constructor(position, length, width, height)

  构造函数

  - 参数
    - `{Position} position`：坐标
    - `{Number} length`：长度
    - `{Number} width`：宽度
    - `{Number} height`：高度
  - 返回值：`box`

### properties

- `{Position} position`：坐标
- `{Number} length`：长度
- `{Number} width`：宽度
- `{Number} height`：高度

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BoxGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## DC.Corridor

> 走廊要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let corridor = new DC.Corridor('120,20;120,30')
corridor.setStyle({
  width: 10,
})
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`corridor`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[CorridorGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "width": 1, //线宽
  "height": 0, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "cornerType": 0, //转角类别，0：圆角、1：直角、2：斜角
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

- fromEntity(entity)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值：`corridor`

## DC.Cylinder

> 圆柱要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20)
let cylinder = new DC.Cylinder(position, 20, 30, 40)
```

### creation

- constructor(position, length, topRadius, bottomRadius)

  构造函数

  - 参数
    - `{Position} position`：坐标
    - `{Number} length`：长度
    - `{Number} topRadius`：上半径
    - `{Number} bottomRadius`：下半径
  - 返回值：`cylinder`

### properties

- `{Position} position`：坐标
- `{Number} length`：长度
- `{Number} topRadius`：上半径
- `{Number} bottomRadius`：下半径

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[CylinderGraphics](https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## DC.Ellipse

> 椭圆要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20)
let ellipse = new DC.Ellipse(position, 20, 30)
```

### creation

- constructor(position, semiMajorAxis, semiMinorAxis)

  构造函数

  - 参数
    - `{Position} position`：坐标
    - `{Number} semiMajorAxis`：长半轴
    - `{Number} semiMinorAxis`：短半轴
  - 返回值：`ellipse`

### properties

- `{Position} position`：坐标
- `{Number} semiMajorAxis`：长半轴
- `{Number} semiMinorAxis`：短半轴

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[EllipseGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "rotation": 0, //顺时针旋转角度
  "stRotation": 0, //逆时针旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## DC.Ellipsoid

> 球体要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20)
let ellipsoid = new DC.Ellipsoid(position, { x: 30, y: 30, z: 30 })
```

### creation

- constructor(position, radius)

  构造函数

  - 参数
    - `{Position} position`：坐标
    - `{Object} radius`：半径，格式是：{x: 30, y: 30, z: 30}
  - 返回值：`ellipsoid`

### properties

- `{Position} position`：坐标
- `{Object} radius`：半径，格式是：{x: 30, y: 30, z: 30}

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[EllipsoidGraphics](https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## DC.Plane

> 平面要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20)
let plane = new DC.Plane(position, 20, 30, { normal: 'x' })
```

### creation

- constructor(position, width, height, direction)

  构造函数

  - 参数
    - `{Position} position`：坐标
    - `{Number} width`：宽度
    - `{Number} height`：高度
    - `{Object} plane`：面板格式
  - 返回值：`plane`

```json
// 面板参数(可选)
{
  "normal": "x", // 法线,x,y,z其中一个
  "distance": 0 // 距离
}
```

### properties

- `{Position} position`：坐标
- `{Number} width`：宽度
- `{Number} height`：高度
- `{Number} distance`：距离

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PlaneGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

## DC.PolylineVolume

> 管道要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
function computeCircle(radius) {
  var positions = []
  for (var i = 0; i < 360; i++) {
    var radians = DC.Math.toRadians(i)
    positions.push({
      x: radius * Math.cos(radians),
      y: radius * Math.sin(radians),
    })
  }
  return positions
}

let polylineVolume = new DC.PolylineVolume(
  '-90.0,32.0,0.0;-90.0,36.0,100000.0;-94.0,36.0,0.0;',
  computeCircle(60000)
)
```

### creation

- constructor(positions, shape)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
    - `{Array} shape`：形状
  - 返回值：`polylineVolume`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串
- `{Array} shape`：形状

### methods

- ***setStyle(style)\***

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "cornerType": 0, //转角类别，0：圆角、1：直角、2：斜角
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  } //根据距离设置可见
}
```

- fromEntity(entity)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值：`polylineVolume`

## DC.Rectangle

> 矩形要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let rectangle = new DC.Rectangle('-90.0,32.0;-94.0,36.0;')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`rectangle`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[RectangleGraphics](https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "height": 1, //高度
  "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
  "extrudedHeight": 0, //拉升高度
  "rotation": 0, //顺时针旋转角度
  "stRotation": 0, //逆时针旋转角度
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
  "zIndex": 0 //层级
}
```

## DC.Wall

> 墙体要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let wall = new DC.Wall('-90.0,32.0,1000;-94.0,36.0,1000;')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`wall`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[WallGraphics](https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html)
  - 返回值：`this`

```json
// 样式参数(可选)
{
  "fill": true, //是否用提供的材料填充多边形。
  "material": DC.Color.WHITE, //材质
  "outline": false, //是否显示边框
  "outlineColor": DC.Color.BLACK, //边框颜色
  "outlineWidth": 0, //边框宽度
  "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
  "distanceDisplayCondition": {
    "near": 0, //最近距离
    "far": Number.MAX_VALUE //最远距离
  }, //根据距离设置可见
  "classificationType": 2 //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
}
```

- fromEntity(entity)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值：`wall`

## DC.AttackArrow

> 攻击箭头要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let attackArrow = new DC.AttackArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`attackArrow`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-polygon)
  - 返回值：`this`

## DC.DoubleArrow

> 双箭头要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let doubleArrow = new DC.DoubleArrow('-90.0,32.0;-94.0,36.0;-94.0,38.0')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`doubleArrow`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-polygon)
  - 返回值：`this`

## DC.FineArrow

> 直箭头要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let fineArrow = new DC.FineArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`fineArrow`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-polygon)
  - 返回值：`this`

## DC.GatheringPlace

> 聚集地要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let gatheringPlace = new DC.GatheringPlace('-90.0,32.0;-94.0,36.0')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`gatheringPlace`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-polygon)
  - 返回值：`this`

## DC.TailedAttackArrow

> 聚集地要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let tailedAttackArrow = new DC.TailedAttackArrow('-90.0,32.0;-94.0,36.0')
```

### creation

- constructor(positions)

  构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`tailedAttackArrow`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[Polygon](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-polygon)
  - 返回值：`this`

## DC.ElecEllipsoidPrimitive

> 电弧球图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let elecEllipsoid = new DC.ElecEllipsoidPrimitive('120,20',{x:2000,y:2000:z:2000})
```

### creation

- constructor(center,radius)

  DC.WaterPrimitive 构造函数

  - 参数
    - `{String|Position|Array} center`：中心点
    - `{Object} radius`:球半径
  - 返回值：`elecEllipsoidPrimitive`

### properties

- `{String|Position|Array} center`：中心点,
- `{Object} radius`:球半径

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "speed": 5, //速度
    "color": DC.Color.WHITE //颜色
  }
  ```

## DC.FlowLinePrimitive

> 流动线图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let flowLinePrimitive = new DC.FlowLinePrimitive('120,20;120,30;122,30')
```

### creation

- constructor(positions,[asynchronous])

  DC.FlowLinePrimitive 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`flowLinePrimitive`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "speed": 5, //速度
    "color": DC.Color.WHITE, //颜色
    "percent": 0.3, // 比例
    "gradient": 0.1 // 透明程度
  }
  ```

## DC.ScanCirclePrimitive

> 扫描圆图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let scanCirclePrimitive = new DC.ScanCirclePrimitive('120,20', 1000)
```

### creation

- constructor(position,radius)

  DC.ScanCirclePrimitive 构造函数

  - 参数
    - `{String|Position|Array} position`：圆心
    - `{Number} radius`：半径
  - 返回值：`scanCirclePrimitive`

### properties

- `{String|Position|Array} position`：圆心
- `{Number} radius`：半径

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "speed": 5, //速度
    "color": DC.Color.WHITE //颜色
  }
  ```

## DC.TrailLinePrimitive

> 轨迹线图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let trailLinePrimitive = new DC.TrailLinePrimitive('120,20;120,30;122,30')
```

### creation

- constructor(positions,[asynchronous])

  DC.TrailLinePrimitive 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`trailLinePrimitive`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "speed": 5, //速度
    "color": DC.Color.WHITE //颜色
  }
  ```

## DC.WaterPrimitive

> 水面图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let waterPrimitive = new DC.WaterPrimitive('120,20;120,30;122,30')
water.setStyle({
  baseWaterColor: DC.Color.AQUA.withAlpha(0.3),
  normalMap: 'examples/images/icon/waterNormalsSmall.jpg',
  frequency: 1000.0,
  animationSpeed: 0.01,
  amplitude: 10,
  specularIntensity: 10,
})
```

### creation

- constructor(positions,[asynchronous])

  DC.WaterPrimitive 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
    - `{Boolean} asynchronous`:异步创建，默认值：true
  - 返回值：`waterPrimitive`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "height": 1, //高度
    "extrudedHeight": 0, //拉升高度
    "stRotation": 0, //旋转角度
    "outline": false, //是否显示边框
    "closeTop": true, //顶面是否闭合
    "closeBottom": true, //底面是否闭合
    "classificationType": 2, //分类 是否影响地形，3D切片或同时影响这两者。0:地形、1:3D切片、2：两者
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

## DC.VideoPrimitive

> 视频图元，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let videoEl = new document.getElementById('video')
let waterPrimitive = new DC.VideoPrimitive('120,20;120,30;122,30', videoEl)
```

### creation

- constructor(positions,video)

  DC.WaterPrimitive 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
    - `{Element} video`：视频节点
  - 返回值：`polygon`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串
- `{Element} video`：视频节点

