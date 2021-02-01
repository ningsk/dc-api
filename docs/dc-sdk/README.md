# DC-SDK 🌎

`DC`

DC 为框架默认命名空间  
::: danger
开发时尽量不要使用 DC 为变量名或者命名空间，避免框架无法正常使用
:::

`Cesium`

**Cesium** 是一款面向三维 GIS 的世界级的 ES6 开源产品。该产品翻遍个人或团队快速搭建一款无插件的三维 GIS 的 Web 应用，在性能、精度、渲染质量、跨平台上都有很好的保证。开发时如果需要 Cesium 的内部接口可以通过`const { Cesium } = DC.Namespace` 获取 Cesium。

`mapv`

**Mapv** 是一款地理信息可视化开源库，可以用来展示大量地理信息数据，点、线、面的数据，每种数据也有不同的展示类型，如直接打点、热力图、网格、聚合等方式展示数据。开发时如果需要 Mapv 的内部接口可以通过`const { mapv } = DC.Namespace` 获取 mapv。

## 全局函数

### use

> 在 DC 框架中使用第三方模块或框架

```js
let plugin = {
  install: (DC) => {},
};
DC.use(plugin);
```

### mixin

> 在 DC 中添加额外属性或函数

```js
let comp = {
  a: "b",
};
DC.mixin(comp);
DC.a; // b
```

### init

> 该函数为初始化 Cesium 时用，默认使用的时 Cesium 为最新的版本，如果使用自定义的 Cesium 版本，可在 DC 加载其他模块钱修改 Cesium 的引用，从而替换整个 DC 体系中的 Cesium`慎用`

```js
DC.init(() => {
  DC.Namespace["Cesium"] = "<自定义Cesium>"; // 替换框架中默认Cesium引用，需在DC加载其他模块前使用
  DC.use(DcCore);
});
```

### ready

> 框架主入口，使用框架时，必须以这个开始，否则无法构建 3D 场景

```js
global.DC = DC; // 将DC变量设置为全局，方便在工程中使用
DC.use(DcCore);
DC.ready(() => {
  let viewer = new DC.Viewerr(divId);
});
```

## 常量

> 框架内部默认常量

::: warning
开发时，请使用默认常量进行开发
:::

### MouseEventType

`DC.MouseEventType.CLICK`: (场景、覆盖物)鼠标点击事件

`DC.MouseEventType.RIGHT_CLICK`: (场景、覆盖物)鼠标右击事件

`DC.MouseEventType.DB_CLICK`: (场景、覆盖物)鼠标双击事件

`DC.MouseEventType.MOUSE_MOVE`: 场景鼠标移动事件

`DC.MouseEventType.WHEEL`: 场景鼠标滚轮事件

`DC.MouseEventType.MOUSE_OVER`: 覆盖物鼠标移入事件

`DC.MouseEventType.MOUSE_OUT`: 覆盖物鼠标移出事件

### SceneEventType

`DC.SceneEventType.CAMERA_MOVE_END`: 相机移动完成

`DC.SceneEventType.CAMERA_CHANGED`: 相机位置更新完成

`DC.SceneEventType.PRE_UPDATE`: 场景更新前

`DC.SceneEventType.POST_UPDATE`: 场景更新后

`DC.SceneEventType.PRE_RENDER`: 场景渲染前

`DC.SceneEventType.POST_RENDER`: 场景渲染后

`DC.SceneEventType.MORPH_COMPLETE`: 场景模式变换完成

`DC.SceneEventType.CLOCK_TICK`: 时钟跳动

### MouseMode

`DC.MouseMode.LEFT_MIDDLE`: 左键拖动，中键翻转（默认）

`DC.MouseMode.LEFT_RIGHT`: 左键拖动，右键翻转

### ImageryType

`DC.ImageryType.ARCGIS`: arcgis 地图

`DC.ImageryType.SINGLE_TILE` 单图片地图

`DC.ImageryType.WMS`: WMS 地图

`DC.ImageryType.WMTS`: WMTS 地图

`DC.ImageryType.XYZ`: xyz 格式地图

`DC.ImageryType.COORD`: 瓦片坐标地图

`DC.ImageryType.AMAP`: 高德地图

`DC.ImageryType.BAIDU`: 百度地图

`DC.ImageryType.GOOGLE`: 谷歌地图

`DC.ImageryType.TDT`: 天地图

`DC.ImageryType.TECENT`: 腾讯地图

### TerrainType

`DC.TerrainType.NONE`: 无地形

`DC.TerrainType.XYZ`: xyz 格式地形

`DC.TerrainType.GOOGLE`: 谷歌地形

`DC.TerrainType.ARCGIS`: arcgis 地形

`DC.TerrainType.VR`: VR 地形

### LayerType

`DC.LayerType.VECTOR`: 矢量图层

`DC.LayerType.PRIMITIVE`: 图元图层

`DC.LayerType.TILESET`: 3dtiles 图层

`DC.LayerType.HTML`: html 图层

`DC.LayerType.GEOJSON`: GeoJson 图层

`DC.LayerType.CLUSTER`: 聚合图层

`DC.LayerrType.VIDEO`: 视频图层

`DC.LayerType.KML`: kml 图层

`DC.LayerType.CZML`: czml 图层

`DC.LayerType.HEAT`: 热区图层

`DC.LayerType.MAPV`: Mapv 图层

`DC.LayerType.CHART`: echarts 图层

### OverlayType

`DC.OverlayType.POINT`: 点 `可标绘`

`DC.OverlayType.POLYLINE`: 线 `可标绘`

`DC.OverlayType.POLYGON`: 面 `可标绘`

`DC.OverlayType.MODEL`: 模型

`DC.OverlayType.BILLBOARD`: 图标点 `可标绘`

`DC.OverlayType.RECTANGLE`: 矩形 `可标绘`

`DC.OverlayType.CIRCLE`: 圆 `可标绘`

`DC.OverlayType.LABEL`: 标签

`DC.OverlayType.PLANE`: 面板

`DC.OverlayType.TILESET`: 3DTiles

`DC.OverlayType.WALL`: 墙体

`DC.OverlayType.BOX`: 盒

`DC.OverlayType.CORRIDOR`: 走廊

`DC.OverlayType.CYLINDER`: 圆柱

`DC.OverlayType.CUSTOM_BILLBOARD`: 自定义图标

`DC.OverlayType.CUSTOM_LABEL`: 自定义标签

`DC.OverlayType.ATTACK_ARROW`: 攻击箭头 `可标绘`

`DC.OverlayType.DOUBLE_ARROW`: 双箭头 `可标绘`

`DC.OverlayType.FINE_ARROW`: 直箭头 `可标绘`

`DC.OverlayType.GATHERING_PLACE`: 聚集地 `可标绘`

`DC.OverlayType.TAILED_ATTACK_ARROW`: 燕尾攻击箭头 `可标绘`

`DC.OverlayType.WATER_PRIMITIVE`: 水面图元

`DC.OverlayType.VIDEO_PRIMITIVE`: 视频图元

`DC.OverlayType.CAMERA_VIDEO`: 视频融合

`DC.OverlayType.PLAN_VIDEO`: 平面视频

### RoamingViewMode

`DC.RoamingViewMode.FREE`: 自由视角

`DC.RoamingViewMode.FP`: 第一人称视角

`DC.RoamingViewMode.TP`: 第三人称视角

`DC.RoamingViewMode.TRACKED`: 跟随视角

## DC.Viewer

> 3D 场景主要接口，在给定的 DivId 中构建三维场景，也可用 DC.World.

### example

```html
<div id="map-container"></div>
```

```js
let viewer = DC.Viewer("map-container");
global.Viewer = viewer; // 添加到全局变量
```

::: warning  
如果开发使用的是 Vue 这样的 MVVM 框架，请不要将 viewer、layer、overlay 添加到数据模型中。由于 3D 场景中会不停的刷新每一帧，
如果将数据添加到数据模型中，长时间的话会导致服务器的压力增大而崩溃
:::

### creation

- constructor(id, options)
  DC.Viewer 构造函数 - 参数 - `{String} id`: 容器 ID - `{Object} options`: 属性 - 返回值 `viewer`  
  
  ```:json
  // 属性可选
  {
      "contextOptions":{
          "webgl":{
              "alpha":false, // 北京
              "depth":true,
              "stencil":false,
              "antialias":true,
              "powerPreference":"high-performance",
              "premultipliedAlpha":true,
              "preserveDrawingBuffer":false,
              "failIfMajorPerformanceCaveat":false
          },
          "allowTextureFilterAnisotropic":true
      },
      "sceneMode":3 // 1:2.5D 2:2D 3:3D
  }
  ```
  
  

### properties

- `{Element} dcContainer`: 框架自定义容器 `readonly`
- `{Object} scene`: 场景 `readonly`, 详情参考：[Scene](https://cesium.com/docs/cesiumjs-ref-doc/Scene.html)
- `{Object} camera`: 相机 `readonly`, 详情参考：[Camera](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html)
- `{Element} canvas`: canvas 节点 `readonly`
- `{Object} clock`: 时钟，请参考：[Clock](https://cesium.com/docs/cesiumjs-ref-doc/Clock.html)
- `{Object} dataSources`: 数据资源集合，详情参考： [DataSourceCollection](https://cesium.com/docs/cesiumjs-ref-doc/DataSourceCollection.html)

- `{Object} imageryLayers`: 瓦片集合，详情参考：[ImageryLayerCollection](https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayerCollection.html)
- `{Oject} entities`: 实体集合，详情参考：[EntityCollection](https://cesium.com/docs/cesiumjs-ref-doc/EntityCollection.html)
- `{Popup} popup`: 气泡窗口 `readonly`
- `{ContextMenu} contextMenu`: 右击弹框 `readonly`
- `{Tooltip} tooltip`: 提示框 `readonly`
- `{MapSplit} mapSplitt`: 地图分割 `readonly`
- `{Compass} compass`: 罗盘 `readonly`
- `{ZoomController} zoomController`: 罗盘 `readonly`
- `{LocationBar} locationBar`: 坐标信息 `readonly`
- `{DistanceLegend} distanceLegend`: 比例尺 `readonly`
- `{Position} cameraPosition`: 相机位置 `readonly`

### methods

- setOptions(options)
  设置属性

  - 参数
    - `{Object} options`: 属性对象
  - 返回值：`this`

  ```json
  // 属性参数（可选）
  {
    "shadows": false, // 是否开启阴影
    "resolutionScale": 1, // 设置渲染分辨率的缩放比例
    "showAtmosphere": true, //是否显示大气层
    "showSun": true, //是否显示太阳
    "showMoon": true, //是否显示月亮
    "showSkyBox": true, //是否显示天空盒
    "enableFxaa": true, //是否开启抗锯齿
    "cameraController": {
      // 相机控制
      "enableRotate": true, // 是否可以旋转
      "enableTilt": true, // 是否可以翻转
      "enableTranslate": true, // 是否可以平移
      "enableZoom": true, // 是否可以缩放
      "enableCollisionDetection": true, // 是否支持碰撞检测
      "minimumZoomDistance": 1.0, // 最小缩放距离
      "maximumZoomDistance": 40489014.0 // 最大缩放距离
    },
    "globe": {
      "show": true, // 是否显示地球
      "showGroundAtmosphere": true, // 显示地面大气
      "enableLighting": false, //是否开启灯光，开启后地球会根据当前时间启用灯光
      "depthTestAgainstTerrain": false, //是否开启深度检测
      "tileCacheSize": 100, // 默认瓦片缓存大小
      "preloadSiblings": false, //是否应预加载渲染同级图块
      "baseColor": new DC.Color(0, 0, 0.5, 1), //地球默认底色
      "translucency": {
        //地表透明
        "enabled": false, // 是否开启地表透明
        "backFaceAlpha": 1, // 地球背面透明度
        "backFaceAlphaByDistance": null, //根据距离设置地球背面透明度: {near:400,nearValue:0.2,far:800,farValue:1}
        "frontFaceAlpha": 1, // 地球正面透明度
        "frontFaceAlphaByDistance": null //根据距离设置地球正面透明度: {near:400,nearValue:0.2,far:800,farValue:1}
      }
    }
  }
  ```

- setPitchRange(min, max)
  设置翻转角度

  - 参数
    - `{Number} min`: 最小角度
    - `{Number} max`: 最大角度
  - 返回值 `this`

- limitCameraToGround()
  设置限制相机进入地下
- 返回值： `this`
- changeSceneMode(sceneMode, duration)
  改变场景模式

  - 参数
    - `{Number} sceneMode`: 场景模式， 2：2D, 3: 3D, 2.5: 2.5D
    - `{Number} duration`: 间隔时间
  - 返回值： `this`

- changeMouseMode(mouseMode)
  改变鼠标使用模式

  - 参数
    - `{Number} mouseMode`: 鼠标模式，详情参考：`DC.MouseMode`
  - 返回值： `this`

- addBaseLayer(baseLayer, options)
  添加地图

  - 参数
    - `{baseLayer|Array<baseLayer>} baseLayers`: 地图
    - `{Object} options`: 属性
  - 返回值：`this`

  ```json
  // 属性参数
  {
    "name": "电子地图", // 名称
    "iconUrl": "../perview.png" // 缩略图
  }
  ```

- changeBaseLayer(index)
  更改底图

  - 参数
    - `{Number} index`: 地图索引
  - 返回值：`this`

- addTerrain(terrain)
  添加地形

  - 参数
    - `{Terrain} terrain`: 地形
  - 返回值：`this`

- changeTerrain(index)
  变换地形

  - 参数
    - `{Number} index`: 地形索引
  - 返回值：`this`

- removeTerrain()
  移除地形
- 返回值： `this`
- addLayerGroup(layerGroup)
  添加图层组

  - 参数
    - `{LayerGroup} layerGroup`: 图层组
  - 返回值：`this`

- removeLayerGroup(layerGroup)
  移除图层组

  - 参数
    - `{LayerGroup} layerGroup`: 图层组
  - 返回值： `this`

- addLayer(layer)
  添加图层

  - 参数
    - `{Layer} layer`: 图层
  - 返回值：`this`

- removeLayer(layer)
  删除图层

  - 参数
    - `{Layer} layer`: 图层
  - 返回值：`this`

- getLayer(id)
  获取图层

  - 参数
    - `{String} id`: 图层 ID
  - 返回值： `layer`

- getLayers()
  获取所有图层，不包括地图
- 返回值：`layer`
- eachLayer(method, context)
  遍历所有图层

  - 参数
    - `{Function} method`: 回调函数
    - `{Object} context`: 上下文，默认为 this
  - 返回值： `this`

  ```js
  viewer.eachLayer((layer) => {});
  ```

- flyTo(target, duration)
  飞向目标

  - 参数
    - `{VectorLayer|Overlay} target`: 目标
    - `{Number duration}`: 飞到位置时间，单位：秒
  - 返回值： `this`

- zoomTo(target)
  缩放到目标

  - 参数
    - `{VectorLayer|Overlay} target`: 目标
  - 返回值： `this`

- flyToPosition(position, completeCallback, duration)
  飞到具体位置

  - 参数
    - `{Position} position`: 位置
    - `{Function} completeCallback`: 飞完之后触发的回调
    - `{Number} duration`: 飞到位置时间，单位：秒
  - 返回值：`this`

- zoomToPosition(position, completeCallback)
  缩放到具体位置

  - 参数
    - `{DC.Position} position`: 位置
    - `{Function completeCallback}`: 缩放完成后触发的回调
  - 返回值: `this`

- on(type, callback, context)
  事件订阅

  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
  - 返回值：`this`

- once(type, callback, context)

  - 事件订阅(一次)
    - 参数
      - `{Object} type` ：订阅类型
      - `{Function} callback` ：订阅回调
      - `{Object} context` ：上下文
    - 返回值：`this`

- off(type, callback, context)

  - 取消事件订阅
  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
    - 返回值：`this`

- destroy()
  销毁三维场景
- 返回值：`this`
- use(plugin)
  使用插件(慎用)，这个和全局的不同。该函数会将 3D 场景作为参数传入到插件中
  - 参数
    - `{Object} plugin` ：插件
  - 返回值：`this`
  ```js
  let plugin = {
    install: (viewer) => {},
  };
  viewer.use(plugin);
  ```

## Popup

> 气泡窗口

### example

```js
let popup = viewer.popup;
popup.setContent("<div></div>");
```

### properties

- `{String} state`: 状态 `readonly`
- `{String} config`: 配置 `writeOnly`

```json
// 配置参数（可选）
// 配置后会影响全局的popup的显示样式，请慎重。
{
  "position": "center", // popup的位于鼠标的点击位置的方向，有：center，left，right
  "customClass": "custom" // 添加自定义的Css类名到popup中，多个用空格隔开
}
```

### methods

- setPosition(position)
  设置位置

  - 参数
    - `{Cartesian3} position`: 世界坐标
  - 返回值：`this`

- setContent(content)
  设置内容

  - 参数
    - `{String|Element} content`: 内容
  - 返回值：`this`

- setWrapper(wrapper)
  设置容器

  - 参数
    - `{Element} wrapper`: 容器 `一般用于MVVM框架的模板`
  - 返回值：`this`

- showAt(position, content)
  设置内容

  - 参数
    - `{Cartesian3} position`: 世界坐标
    - `{String|Element} content`: 内容
  - 返回值：`this`

- hide()
  隐藏气泡窗口
  - 返回值：`this`

## ContextMenu

> 右击菜单

### example

```js
let contextMenu = viewer.contextMenu;
contextMenu.enable = true;
contextMenu.DEFAULT_MENU = [
  {
    label: "测试",
    callback: (e) => {}, // e 是一个对象包括 windowPosition, position, surfacePosition, overlay
    context: this,
  },
]; // 设置默认的右击菜单，会影响全局右击菜单（慎用）
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`: 状态 `readonly`
- `{Array} DEFAULT_MENU`: 默认菜单，菜单的回调函数作为一个对象 `writeOnly`

### methods

- showAt(position,content)
  设置位置
  - 参数
    - `{Cartesian2} position`: 屏幕坐标
    - `{String|Element} content`: 内容
  - 返回值：`this`

## MapSplit

> 地图分割

### example

```js
let baseLayer_elc = DC.ImageryLayerFactory.createGoogleImageryLayer();
viewer.mapSplit.enable = true;
viewer.mapSplit.addBaseLayer(baseLayer_elc, -1);
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`: 状态 `readonly`

### methods

- addBaseLayer(baseLayer, splitDirection)
  添加地图
  - 参数
    - `{BaseLayer} baseLayer`: 地图
    - `{Number} splitDirection`: 分割方向， -1：左，0：无，1：右
  - 返回值：`this`

## Compass

> 罗盘

### example

```
viewer.compass.enable = true
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`: 状态 `readonly`

## ZoomController

> 缩放控制

### example

```
viewer.zoomController.enable = true
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`：状态 `readonly`

## LocationBar

> 坐标信息

### example

```
viewer.locationBar.enable = true
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`：状态 `readonly`

## DistanceLegend

> 比例尺

### example

```js
viewer.distanceLegend.enable = true;
```

### properties

- `{Boolean} enable`: 是否启用
- `{String} state`：状态 `readonly`

## DC.ImageryLayerFactory

> 地图工厂，用于创建各类地图瓦片

### example

```js
let baseLayer = DC.ImageryLayerFactory.createAmapImageryLayer({
  style: "img",
});
viewer.addBaseLayer(baseLayer, {
  name: "地图",
  iconUrl: "../preview.png",
});
```

### static methods

- createAmapImageryLayer(options)
  创建高德地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createBaiduImageryLayer(options)
  创建百度地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createGoogleImageryLayer(options)
  创建谷歌地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createTdtImageryLayer(options)
  创建天地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createTecentImageryLayer(options)
  创建腾讯地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createArcGisImageryLayer(options)
  创建 Arcgis 地图

  - 参数
    - `{Object} options`: 属性 详情参考：[ArcGis](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html#.ConstructorOptions)
  - 返回值：`baseLayer`

- createSingleTileImageryLayer(options)
  创建单图片地图

  - 参数
    - `{Object} options`: 属性 详情参考：[Single](https://cesium.com/docs/cesiumjs-ref-doc/SingleTileImageryProvider.html#.ConstructorOptions)
  - 返回值：`baseLayer`

- createWMSImageryLayer(options)
  创建 WMS 地图

  - 参数
    - `{Object} options`: 属性 详情参考：[WMS](https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html#.ConstructorOptions)
  - 返回值：`baseLayer`

- createWMTSImageryLayer(options)
  创建 WMTS 地图

  - 参数
    - `{Object} options`: 属性 详情参考：[WMTS](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html#.ConstructorOptions)
  - 返回值：`baseLayer`

- createXYZImageryLayer(options)
  创建 X/Y/Z 地图

  - 参数
    - `{Object} options`: 属性 详情参考：[XYZ](https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html#.ConstructorOptions)
  - 返回值：`baseLayer`

- createCoordImageryLayer(options)
  创建坐标系地图

  - 参数
    - `{Object} options`: 属性
  - 返回值：`baseLayer`

- createImageryLayer(type,options)
  根据类型创建地图
  - 参数
    - `{String type`: 类型 参考 DC.ImageryType
    - `{Object} options`: 属性
  - 返回值：`baseLayer`
  ```json
  //属性参数(可选)
  {
      "url": "", //地址：arcgis/wmts/xyx/single 有效
      "style": "img", //样式：img、elec、ter。百度：normal、middelnight，腾讯：img,1、4
      "key": "", //天地图有效
      "subdomains": [],
      "rectangle": {
          "west": 0,
          "south": 0,
          "east": 0,
          "north":
      } // 瓦片范围，有west，south，east，north 单位为: 弧度，使用经纬度时需将转为弧度
  }
  ```

## DC.TerrainFactory

> 地形工厂，用于创建地形

### example

```js
let terrain = DC.ImageryLayerFactory.createUrlTerrain({
  url: "*****/*****",
});
viewer.addTerrain(terrain);
```

### static methods

- createEllipsoidTerrain()

  创建默认地形

  - 返回值 `terrain`

- createUrlTerrain(options)

  根据 url 创建地形

  - 参数
    - `{Object} options`: 属性
  - 返回值：`terrain`

- createGoogleTerrain(options)

  创建谷歌地形

  - 参数 - `{Object} options`: 属性
  - 返回值：`terrain`

- createArcgisTerrain(options)

  创建 Arcgis 地形

  - 参数 - `{Object} options`: 属性
  - 返回值：`terrain`

- createVRTerrain(options)

  创建 Arcgis 地形

  - 参数 - `{Object} options`: 属性
  - 返回值：`terrain`

- createTerrain(type, options)

  根据类型创建地形

  - 参数 - `{String} type`: 类型，参考`DC.TerrainType` - `{Object} options`: 属性
  - 返回值：`terrain`

  ```js
  // 属性参数（可选）
  {
    "url": "", // 服务地址
  }
  ```

## DC.LayerGroup

> 图层组，将图层按照一定的逻辑分组，方便统一管理

### example

```js
let layerGroup = new DC.LayerGroup("id");
viewer.addLayerGroup(layerGroup);
let layer = new DC.VectorLayer("layer");
layerGroup.addLayer(layer);
```

### creation

- constructor(id)

  DC.LayerGroup 构造函数

  - 参数
    - `{String} id`: 图层组唯一标识
  - 返回值：`layerGroup`

### properties

- `{String} id`：唯一标识 `readonly`
- `{Boolean} show`: 是否显示
- `{String} type`：图层类型 `readonly`

### methods

- addLayer(layer)

  添加图层

  - 参数
    - `{Layer} layer`：图层
  - 返回值：`this`

- removeLayer(layer)

  删除图层

  - 参数
    - `{Layer} layer`：图层
  - 返回值：`this`

- getLayer(id)

  获取图层

  - 参数
    - `{String} id`：图层 ID
  - 返回值：`layer`

- getLayers()

  获取所有图层，不包括地图

  - 返回值：`this`

- remove()

  删除图层组

  - 返回值：`this`

- addTo()

  添加图层到场景

  - 参数

    - `{Viewer|World} viewer`： 场景

  - 返回值：`this`

## Layer

> 图层的基类，其子类是实例化后需添加到三维场景中方可展示各类三维数据

::: warning

该基本类无法被实例化

:::

### properties

- `{String} id`：唯一标识 `readonly`
- `{Boolean} show`：是否显示
- `{Object attr}`：业务属性
- `{String} state`： 图层状态 `readonly`
- `{String} type`：图层类型 `readonly`

### methods

- addOverlay(overlay)

  添加覆盖物

  - 参数
    - `{Overlay} overlay`：覆盖物
  - 返回值：`this`

- addOverlays(overlays)

  添加覆盖物数组

  - 参数 - `{Array<Overlay>} overlays`：覆盖物数组
  - 返回值：`this`

- removeOverlay(overlay)

  删除覆盖物

  - 参数
    - `{Overlay} overlay`：覆盖物
  - 返回值：`this`

- getOverlay(overlayId)

  根据 id 获取覆盖物（`不推荐用`）

  - 参数
    - `{String} overlayId`：覆盖物唯一标识（默认产生）
  - 返回值：`overlay`

- getOverlayById(id)

  根据业务 id 获取覆盖物（`推荐用`）

  - 参数
    - `{String} id`：覆盖物业务唯一标识
  - 返回值：`overlay`

- getOverlaysByAttr(attrName, attrVal)

  根据覆盖物属性获取覆盖物

  - 参数 - `{String} attrName`：属性名称 - `{Object} attrVal`：属性值
  - 返回值：`array`

  ```js
  overlay.attr.name = "test"; // 设置覆盖物的属性
  let arr = layer.getOverlaysByAttr("name", "test"); // 根据属性获取覆盖物
  ```

- getOverlays()

  获取所有覆盖物

  - 返回值：`array`

- eachOverlay(method, context)

  遍历覆盖物

  - 参数
    - `{Function} method`：回调函数，参数为每一个覆盖物
    - `{Object} context`：上下文
  - 返回值：`this`

  ```js
  layer.eachOverlay((item) => {});
  ```

- clear()

  清空图层

  - 返回值：`this`

- remove()

  移除图层

  - 返回值：`this`

- addTo(viewer)

  添加图层到场景

  - 参数
    - `{Viewer|World} viewer`：场景
  - 返回值：`this`

### static methods

- registerType(type)

  注册图层类型

  - 参数
    - `{String} type`：图层类型

- getLayerType()

  获取图层类型

  - 返回值： `string`

## DC.VectorLayer

> 矢量图层，用于添加各类矢量数据（点、线、面等），将矢量数据按照一定的逻辑分组，方便统一管理，继承于[Layer](#Layer)

### example

```js
let layer = new DC.PrimitiveLayer("id");
viewer.addLayer(layer);
```

### creation

- constructor(id)

  DC.VectorLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
  - 返回值：`vectorLayer`

## DC.PrimitiveLayer

> 图元图层，用于添加各类图元数据，将图元数据按一定的逻辑分组，方便统一管理，继承于[Layer](#Layer)

### example

```js
let layer = new DC.PrimitiveLayer("id");
viewer.addLayer(layer);
```

### creation

- constructor(id)

  DC.VectorLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
  - 返回值：`vectorLayer`

## DC.GeojsonLayer

> GeoJson 图层，用于加载 GeoJson 格式数据，继承于[Layer](#Layer)

```js
let layer = new DC.GeoJsonLayer("id", "**/**.geojson");
layer.eachOverlay((item) => {
  // item 为一个entity
  if (item.polyline) {
    //todo
    let polyline = DC.Polyline.fromEntity(item);
  }
  if (item.polygon) {
    //todo
    let polygon = DC.Polygon.fromEntity(item);
  }
  if (item.billboard) {
    //todo
    let point = DC.Point.fromEntity(item);
    let divIcon = DC.DivIcon.fromEntity(item);
    let billboard = DC.Billboard.fromEntity(item);
  }
});
```

### creation

- constructor(id, url,[options])

  DC.GeoJsonLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{String} url`：数据地址
    - `{Object} options`： 属性配置，详情参考：[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)
  - 返回值：`geojsonLayer`

### methods

- toVectorLayer()

  转换为矢量图层

  - 返回值：`vectorLayer`

- toModelLayer(modelUrl)

  转换为模型图层

  - 参数
    - `{String} modelUrl`： 模型地址
  - 返回值：`vectorLayer`

## DC.TopoJsonLayer

> Topojson 图层，用于加载 TopoJson 格式数据，继承于[Layer](#Layer)

### example

```js
let layer = new DC.TopoJsonLayer("id", "**/**.geojson");
layer.eachOverlay((item) => {
  // item 为一个entity
  if (item.polyline) {
    //todo
    let polyline = DC.Polyline.fromEntity(item);
  }
  if (item.polygon) {
    //todo
    let polygon = DC.Polygon.fromEntity(item);
  }
  if (item.billboard) {
    // todo
    let point = DC.Point.fromEntity(item);
    let divIcon = DC.DivIcon.fromEntity(item);
    let billboard = DC.Billboard.fromEntity(item);
  }
});
```

### creation

- constructor(id, url, [options])

  DC.TopoJsonLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{String} url`：数据地址
    - `{Object} options`：属性配置，详情参考：[GeoJsonDataSource](https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html)
  - 返回值：`topoJsonLayer`

### methods

- toVectorLayer()

  转换为矢量图层

  - 返回值：`vectorLayer`

- toModelLayer(modelUrl)

  转换为模型图层

  - 参数
    - `{String} modelUrl`：模型地址
  - 返回值：`vectorLayer`

## DC.HtmlLayer

> Html 图层，用于加载 DivIcon 节点，继承于[Layer](#Layer)

### example

```js
let layer = new DC.HtmlLayer("dom");
viewer.addLayer(layer);
```

### creation

- constructor(id)

  DC.HtmlLayer 构造函数

  - 参数：
    - `{String} id`：图层唯一标识
  - 返回值：`htmlLayer`

## DC.CzmlLayer

> Czml 图层，用于加载 Czml 数据，继承于[Layer](#Layer)

### example

```js
let layer = new DC.CzmlLayer("id", "**/**.czml");
layer.eachOverlay((item) => {
  if (item.polyline) {
    // todo
  }
  if (item.polygon) {
    // todo
  }
  if (item.billboard) {
    // todo
  }
});
```

### creation

- constructor(id, url, [options])

  DC.CzmlLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{String} url`：数据地址
    - `{Object} options`：属性配置，详情参考：[CzmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html)
  - 返回值：`czmlLayer`

## DC.KmlLayer

> Kml 图层，用于加载 Kml 数据，继承于[Layer](#Layer)

### example

```js
let layer = new DC.KmlLayer("id", "**/**.kml");
layer.eachOverlay((item) => {
  if (item.polyline) {
    // todo
  }
  if (item.polygon) {
    // todo
  }
  if (item.billboard) {
    // todo
  }
});
```

### creation

- constructor(id, url, [options])

  DC.KmlLayer 构造函数

  - 参数
    - `{String} id`：图层唯一标识
    - `{String} url`：数据地址
    - `{Object} options`：属性配置，详情参考：[KmlDataSource](https://cesium.com/docs/cesiumjs-ref-doc/KmlDataSource.html)
  - 返回值：`kmlLayer`

## DC.Position

> 坐标类，用来描述物体在场景中的具体位置，采用右手标准

### example

```js
let position = new DC.Position(120, 22, l02);
let position1 = new DC.Position.fromCoordString("120,22,102");
let position2 = new DC.Position.fromCoordArray([120, 22, 102]);
```

### creation

- constructor(lng, lat, alt, heading, pitch,roll)

  DC.Position 构造函数

  - 参数
    - `{Number} lng`：经度
    - `{Number} lat`： 纬度
    - `{Number} alt`：高度，单位：米，默认：0
    - `{Number} heading`：偏航角度，可能其他框架叫做 yaw,表示绕 z 轴旋转。默认：0
    - `{Number} pitch`： 俯仰角度，表示绕 y 轴旋转，默认：0
    - `{Number} roll`：翻转角度，表示绕 x 轴旋转。默认：0
  - 返回值：`position`

### properties

- `{Number} lng`：经度
- `{Number} lat`： 纬度
- `{Number} alt`：高度，单位：米，默认：0
- `{Number} heading`：偏航角度，可能其他框架叫做 yaw,表示绕 z 轴旋转。默认：0
- `{Number} pitch`： 俯仰角度，表示绕 y 轴旋转，默认：0
- `{Number} roll`：翻转角度，表示绕 x 轴旋转。默认：0

### methods

- serialize()

  序列化

  - 返回值：`string`

- copy()

  复制到一个新的位置

- toString()

  将坐标字符化

  - 返回值：`string`

- toArray()

  将坐标数组化

  - 返回值：`array`

- toObject()

  将坐标对象化

  - 返回值：`object`

### static methods

- fromString(str)

  将字符化坐标转化为坐标对象

  - 参数
    - `{String} str`：字符化坐标
    - `{Array} array`：数组化坐标
  - 返回值：`position`

- fromArray(array)

  将数组化坐标转化为坐标对象

  - 参数
    - `{Array} array`：数组化坐标
  - 返回值：`position`

- fromObject(obj)

  将 json 对象坐标转换为坐标对象

  - 参数
    - `{Object} obj`：Json 对象坐标
  - 返回值： `position`

- fromCoordString(str) `deprecated`

  将字符坐标串转换为坐标对象

  - 参数
    - `{String} str`：字符坐标串
  - 返回值：`position`

- fromCoordArray(array) `deprecated`

  坐标数组转换为坐标对象

  - 参数
    - `{Array<String|Number>} array`：坐标数组
  - 返回值：`position`

- deserialize(valStr)

  反序列化

  - 参数
  - `{String} valStr`：序列化对象
  - 返回值：`position`

## DC.Color

> 颜色类

### example

```js
let red = DC.Color.RED;
```

### properties

- `{Color} RED`：红色

- `{Color} YELLOW`：黄色

- `{Color} WHITE`：白色

- `{Color} GREEN`：绿色

  [其他颜色]("https://cesium.com/docs/cesiumjs-ref-doc/Color.html")

## DC.TilesetStyle

> tileset 样式，用于设置 3dtiles 的颜色设置

### example

```js
let style = new DC.TilesetStyle();
style.color = {
  conditions: [
    ["${floor} >= 5", "rgb(198, 106, 11)"],
    ["true", "rgb(127, 59, 8)"],
  ],
};
```

[详情参考]("https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileStyle.html")

## DC.JulianDate

> 朱利安日历

```js
let date = DC.JulianDate.now();
```

### static methods

- now()

  当前朱莉安时间

  - 返回值：`date`

- fromDate(date)

  通过 Js 时间创建朱莉安时间

  - 参数
    - `{Date} date`：Js 时间
  - 返回值 `date`

## DC.Rect

> 矩形相关函数

### example

```js
let r = DC.Rect.fromDegrees(10, 20, 12, 31);
```

[详情参考](https://cesium.com/docs/cesiumjs-ref-doc/Rectangle.html)

## DC.CallbackProperty

> 回调属性，用户通过自定义回调函数来返回需要的值。回调函数中，用户可以使用 time 给定 value，也可以自定设置。

```js
let position = new DC.Position(120, 20);
let point = new DC.Point(position);
let size = 0;
point.setStyle({
  pixelSize: new DC.CallbackProperty((time) => {
    size += 1;
    if (size == 10) {
      size = 0;
    }
    return size;
  }),
});
```

## Overlay

> 覆盖物基类

::: warning

该类无法实例化

:::

### properties

- `{String} overlayId`：唯一标识 `readonly`
- `{String} id`：业务唯一标识
- `{Boolean} show`：是否显示
- `{Object} attr`：业务属性
- `{Array} contextMenu`：设置右击菜单，菜单的回调函数参数为 viewer,overlay
- `{String} state`：覆盖物状态 `readonly`
- `{String} type`：覆盖物类型 readonly`
- `{Boolean} allowDrillPicking`：是否可以穿透选择，默认为 false，如果为 true 时，覆盖物为穿透选择其后面的所有覆盖物，并触发其后面的所有覆盖物的鼠标事件

### methods

- addTo(layer)

  添加到图层

  - 参数
    - `{Layer} layer` ：图层
  - 返回值：`this`

- remove()

  删除

  - 返回值：`this`

- setLabel(text, textStyle)

  设置标签

  - 参数
    - `{String} text`：文本
    - `{String} textStyle`：文本样式，详情参考：[DC.Label](#dc-label)
  - 返回值：`this`

- on(type, callback, context)

  事件订阅

  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
  - 返回值：`this`

- off(type, callback, context)

  取消事件订阅

  - 参数
    - `{Object} type` ：订阅类型
    - `{Function} callback` ：订阅回调
    - `{Object} context` ：上下文
  - 返回值：`this`

- fire(type,params)

  触发事件

  - 参数
    - `{Object} type` ：订阅类型
    - `{Object} params` ：参数
  - 返回值：`this`

### static methods

- registerType(type)

  注册覆盖物类型

  - 参数
    - `{String} type`：覆盖物类型

- getOverlayType(type)

  获取覆盖物类型

  - 参数
    - `{String} type`：覆盖物类型
  - 返回值：`string`

## DC.Point

> 点位要素，继承于[Overlay](#overlay)

### example

```js
let position = new DC.Position(120, 20);
let point = new DC.Point(position);
point.setStyle({
  pixelSize: 10,
});
```

### creation

- constructor(position)

  DC.Point 构造函数

  - 参数
    - [`{Position} position`](https://resource.dvgis.cn/dc-api/dc-sdk/#dc-position)：坐标
  - 返回值：`point`

### properties

- `{Position} position`：坐标

### methods

- \*\*setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PointGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PointGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "pixelSize": 1, //像素大小
    "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
    "color": DC.Color.WHITE, //颜色
    "outlineColor": DC.Color.WHITE, //边框颜色
    "outlineWidth": 0, //边框大小，
    "scaleByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置比例
    "translucencyByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置透明度
    "distanceDisplayCondition": {
      "near": 0, //最近距离
      "far": Number.MAX_VALUE //最远距离
    }, //根据距离设置可见
    "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
  }
  ```

- fromEntity(entity)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值：`point`

## DC.Polyline

> 线要素，继承于[Overlay](#overlay)

### example

```js
let polyline = new DC.Polyline("120,20;120,30");
polyline.setStyle({
  width: 10,
});
```

### creation

- \*\*constructor(positions)

  DC.Polyline 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`polyline`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串
- `{DC.Position} center`：中心点 **\*`readonly`\***
- `{Number} distance`：距离,单位：米 **\*`readonly`\***

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[PolylineGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "width": 1, //线宽
    "material": DC.Color.WHITE, //材质
    "clampToGround": false, //是否贴地
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
  - 返回值：`polyline`

## DC.Polygon

> 面要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let polygon = new DC.Polygon("120,20;120,30;122,30");
polygon.setStyle({
  height: 10,
});
```

### creation

- constructor(positions)

  DC.Polygon 构造函数

  - 参数
    - `{String|Array<Position|Number|String>} positions`：坐标串
  - 返回值：`polygon`

### properties

- `{String|Array<Position|Number|String>} positions`：坐标串
- `{String|Array<Position|Number|String>} holes`：洞坐标串
- `{DC.Position} center`：中心点 readonly`
- `{Number} area`：距离，单位：平方米 readonly`

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
    "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
    "extrudedHeight": 0, //拉升高度
    "stRotation": 0, //旋转角度
    "fill": true, //是否用提供的材料填充多边形。
    "material": DC.Color.WHITE, //材质
    "outline": false, //是否显示边框
    "outlineColor": DC.Color.BLACK, //边框颜色
    "outlineWidth": 0, //边框宽度
    "closeTop": true, //顶面是否闭合
    "closeBottom": true, //底面是否闭合
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
  - 返回值：`polygon`

## DC.Billboard

> 图标要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let billboard = new DC.Billboard(position, "***/**.png");
billboard.size = [20, 20];
```

### creation

- constructor(position,icon)

  DC.Billboard 构造函数

  - 参数
    - `{Position} position`：坐标
    - `{String} icon`：图标地址
  - 返回值：`billboard`

### properties

- `{Position} position`：坐标
- `{String} icon`：图标地址
- `{Arrray<Number>} size`：图标大小

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[BillboardGraphics](https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "scale": 1, //比例
    "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
    "rotation": 0, //旋转角度
    "translucencyByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置透明度
    "scaleByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置比例
    "distanceDisplayCondition": {
      "near": 0, //最近距离
      "far": Number.MAX_VALUE //最远距离
    }, //根据距离设置可见
    "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
  }
  ```

- fromEntity(entity)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
  - 返回值：`billbard`

## DC.Label

> 标签要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let Label = new DC.Label(position, "test");
```

### creation

- constructor(position,text)

  DC.Label 构造函数

  - 参数
    - `{Position} position`：坐标
    - `{String} text`：文本
  - 返回值：`label`

### properties

- `{Position} position`：坐标
- `{String} text`：文本

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[LabelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "font": "30px sans-serif", // CSS 字体设置
    "scale": 1, //比例
    "pixelOffset": { "x": 0, "y": 0 }, //偏移像素
    "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
    "showBackground": false, //是否显示背景
    "backgroundColor": DC.Color.BLACK, //背景颜色
    "backgroundPadding": { "x": 0, "y": 0 }, //背景间隙
    "fillColor": DC.Color.BLACK, //文字颜色
    "outlineColor": DC.Color.WHITE, //边框颜色
    "outlineWidth": 0, //边框大小，
    "scaleByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置比例
    "translucencyByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置透明度
    "distanceDisplayCondition": {
      "near": 0, //最近距离
      "far": Number.MAX_VALUE //最远距离
    }, //根据距离设置可见
    "disableDepthTestDistance": 0 // 深度检测距离，用于防止剪切地形，设置为零时，将始终应用深度测试。设置为Number.POSITIVE_INFINITY时，永远不会应用深度测试。
  }
  ```

- fromEntity(entity,text)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String} text`：文本
  - 返回值：`label`

## DC.Circle

> 圆要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let circle = new DC.Circle(position, 200);
```

### creation

- constructor(center, radius)

  DC.Circle 构造函数

  - 参数
    - `{Position} center`：圆心
    - `{String} radius`：半径
  - 返回值：`billboard`

### properties

- `{Position} center`：圆心
- `{String} radius`：半径

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

## DC.Model

> 模型要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let model = new DC.Model(position, "**/**.glb");
```

### creation

- constructor(position, modelUrl)

  DC.Model 构造函数

  - 参数
    - `{Position|String|Array} position`：坐标
    - `{String} modelUrl`：模型地址
  - 返回值：`model`

### properties

- `{Position} position`：坐标
- `{String} modelUrl`：模型地址

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[ModelGraphics](https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html)
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "scale": 1, //比例
    "minimumPixelSize": 0, //指定模型的最小像素大小，而不考虑缩放
    "maximumScale": 0, //指定模型的最大比例
    "heightReference": 0, //高度参照，0：位置无参照，位置是绝对的，1：位置固定在地形上 2：位置高度是指地形上方的高度。
    "shadows": 0, //阴影类型，0：禁用、1：启用 、2：投射、3：接受
    "silhouetteColor": DC.Color.RED, //轮廓颜色
    "silhouetteSize": 0, //轮廓宽度
    "lightColor": DC.Color.RED, //模型着色时指定灯光颜色
    "distanceDisplayCondition": {
      "near": 0, //最近距离
      "far": Number.MAX_VALUE //最远距离
    } //根据距离设置可见
  }
  ```

- fromEntity(entity,modelUrl)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String} modelUrl`：模型地址
  - 返回值：`model`

## DC.Tileset

> 3Dtiles 模型要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let tileset = new DC.Tileset("**/tileset.json");
```

### creation

- **\*constructor(url,[options])\***

  DC.Tileset 构造函数

  - 参数
    - `{String} url`：模型地址
    - `{Object} options`：详情参考：[Tileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html)
  - 返回值：`tileset`

### properties

-`{Promise} readyPromise`：加载完成后的异步函数

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，详情参考：[TileStyle](https://github.com/CesiumGS/3d-tiles/tree/master/specification/Styling)
  - 返回值：`this`

  ```js
  let style = new DC.TilesetStyle({
    color: {
      conditions: [
        ["${Height} >= 100", 'color("purple", 0.5)'], //Height 为模型设置的属性
        ["${Height} >= 50", 'color("red")'],
        ["true", 'color("blue")'],
      ],
    },
    show: "${Height} > 0",
  });
  ```

- setPosition(position)

  设置位置

  - 参数
    - `{Position} position`：位置
  - 返回值：`this`

- setHeight(height,isAbsolute)

  设置高度

  - 参数
    - `{Number} height`：高度
    - `{Boolean} isAbsolute`：是否为绝对高度，如果为 true，将不根据模型中心高度计算
  - 返回值：`this`

- setCustomShader(customShader)

  设置自定义片元着色器

  - 参数
    - `{String} customShader`：片元着色器
  - 返回值：`this`

- setProperties(properties)

  根据现有的属性添加属性

  - 参数
    - `{Array<Object>} properties`: 属性
  - 返回值：`this`

```json
//属性参数
{
  "key": "name", //已有属性名称
  "keyValue": "1", //已有属性值
  "propertyName": "highlight", //新增属性名称
  "propertyValue": true //新增属性值
}
```

## DC.DivIcon

> DivIcon 要素，继承于[Overlay](https://resource.dvgis.cn/dc-api/dc-sdk/#overlay)

### example

```js
let position = new DC.Position(120, 20);
let divIcon = new DC.DivIcon(position, "<div></div>");
```

### creation

- constructor(position, content)

  DC.DivIcon 构造函数

  - 参数
    - `{Position|String|Array} position`：坐标
    - `{String|Element} content`：内容
  - 返回值：`divIcon`

### properties

- `{Position|String|Array} position`：坐标
- `{String|Element} content`：内容 `writeonly`

### methods

- setStyle(style)

  设置样式

  - 参数
    - `{Object} style`：样式，
  - 返回值：`this`

  ```json
  // 样式参数(可选)
  {
    "className": "test", //样式名
    "scaleByDistance": {
      "near": 0, //最近距离
      "nearValue": 0, //最近距离值
      "far": 1, //最远距离值
      "farValue": 0 //最远距离值
    }, //根据距离设置比例
    "distanceDisplayCondition": {
      "near": 0, //最近距离
      "far": Number.MAX_VALUE //最远距离
    } //根据距离设置可见
  }
  ```

- fromEntity(entity,content)

  Entity 转换为 Overlay

  - 参数
    - `{Object} entity`：Cesium 覆盖物
    - `{String|Element} content`：内容
  - 返回值：`divIcon`

## DC.Parse

> 坐标解析工具类,可简写为 DC.P

```js
let position = DC.P.parsePosition("123,32,0");
```

### static methods

- **\*parsePosition(position)\***

  解析坐标为 DC.Position

  - 参数
    - `{String|Array|Position} position`：坐标
  - 返回值：`position`

- **\*parsePositions(positions)\***

  解析坐标为 Array<DC.Position>

  - 参数
    - `{String|Array} positions`： 坐标
  - 返回值：`array`

- **\*parsePointCoordToArray(position)\***

  解析点位坐标为数组

  - 参数
    - `{String|Position} position`：点位坐标
  - 返回值：`array`

- parsePolylineCoordToArray(positions)

  解析线坐标为二维数组

  - 参数
    - `{String|Array} positions`：线坐标
  - 返回值：`array`

- parsePolygonCoordToArray(positions)

  解析面坐标为三维数组

  - 参数
    - `{String|Array} positions`：面坐标
  - 返回值：`array`

## DC.Transform

> 坐标转换工具类 ,可简写为 DC.T

```js
let cartesian3 = DC.T.transformWGS84ToCartesian(new DC.Position(120, 20));
```

### static methods

- transformCartesianToWGS84(cartesian)

  世界坐标转换为 84 坐标

  - 参数
    - `{Cartesian3} cartesian`：世界坐标
  - 返回值：`position`

- transformWGS84ToCartesian(position)

  84 坐标转换为世界坐标

  - 参数
    - `{Position} position`：84 坐标
  - 返回值：`cartesian`

- transformWGS84ToCartographic(position)

  84 坐标转换为制图坐标

  - 参数
    - `{Position} position`：84 坐标
  - 返回值：`cartographic`

- transformCartesianArrayToWGS84Array(cartesianArr)

  世界坐标数组转 84 坐标数组

  - 参数
    - `{Array<cartesian3>} cartesianArr`：世界坐标数组
  - 返回值：`array`

- transformWGS84ArrayToCartesianArray(WGS84Arr)

  84 坐标数组转世界坐标数组

  - 参数
    - `{Array<cartesian3>} WGS84Arr`：84 坐标数组
  - 返回值：`array`

- transformWGS84ToMercator(position)

  84 坐标转 Mercator

  - 参数
    - `{Position} position`：84 坐标
  - 返回值：`position`

- transformMercatorToWGS84(position)

  Mercator 坐标转 84

  - 参数
    - `{Position} position`：Mercator 坐标
  - 返回值：`position`

- transformWindowToWGS84(position,viewer)

  屏幕坐标转 84

  - 参数
    - `{Object} position`： 屏幕坐标，格式`{x:1,y:1}`
    - `{Viewer} viewer`：3D 场景
  - 返回值：`position`

- transformWGS84ToWindow(position,viewer)

  屏幕坐标转 84

  - 参数
    - `{Position} position`： 84 坐标
    - `{Viewer} viewer`：3D 场景
  - 返回值：`Object`

## DC.Math

> 基本函数类

### static methods

- area(positions)

  面积，单位：平方米

  - 参数
    - `{Array<Position>} positions`： 点位数据
  - 返回值：`number`

- bounds(positions , expand)

  边界

  - 参数
    - `{Array<Position>} positions`： 点位数据
    - `{Number}} expand`： 扩展比例：0~1
  - 返回值：`object`

- mid(startPosition , endPosition)

  两点之间的中心点

  - 参数
    - `{Position} startPosition`： 开始位置
    - `{Position} endPosition`： 结束位置
  - 返回值：`position`

- center(positions)

  中心点

  - 参数
    - `{Array<Position>} positions`： 点位数据
  - 返回值：`position`

- distance(positions)

  距离,单位：米

  - 参数
    - `{Array<Position>} positions`： 点位数据
  - 返回值：`number`

- heading(startPosition, endPosition)

  偏转角度,单位：度

  - 参数
    - `{Position} startPosition`： 开始位置
    - `{Position} endPosition`： 结束位置
  - 返回值：`number`

- parabola(startPosition, endPosition,height,count)

  抛物线

  - 参数
    - `{Position} startPosition`： 开始位置
    - `{Position} endPosition`： 结束位置
    - `{Number} height`： 最高点高度
    - `{Number} count`： 点位数量
  - 返回值：`Array`

> [more](https://cesium.com/docs/cesiumjs-ref-doc/Math.html)

## DC.Util

> 工具类

### static methods

- uuid(prefix)

  生成 uuid

  - 参数
    - `{String} prefix`：前缀，默认为 D
  - 返回值：`string`

- merge(dest, ...sources)

  属性合并

  - 参数
    - `{Object} dest`：目标对象
    - `{Object|Array} sources`：需要合并的属性
  - 返回值：`object`

- emptyImageUrl()

  空图片

- debounce(fn,delay)

  防抖

- throttle(fn,delay)

  节流

## DC.DomUtil

> Dom 工具类

### static methods

- get(id)

  创建 dom

  - 参数
    - `{String} id`： 要素 ID
  - 返回值：`Element`

- create(tagName, className, [container])

  创建 dom

  - 参数
    - `{String} tagName`： 标签名
    - `{String} className`： 样式名，多个用空格隔开
    - `{Element} [container]`： 父容器
  - 返回值：`Element`

- addClass(el, name)

  添加类名

  - 参数
    - `{Element} el`： 要素
    - `{String} className`： 样式名，多个用空格隔开

- removeClass(el, name)

  删除类名

  - 参数
    - `{Element} el`： 要素
    - `{String} className`： 样式名，多个用空格隔开

- addClass(el, name)

  添加类名

  - 参数
    - `{Element} el`： 要素
    - `{String} className`： 样式名，多个用空格隔开

- createSvg(width, height, path, [container])

  添加类名

  - 参数
    - `{Number} width`： 宽度
    - `{Number} height`： 高度
    - `{String} path`： 路径
    - `{Element} [container]`： 父容器
  - 返回值：`svg`

- parseDom(domStr, withWrapper, className)

  字符串转 Dom

  - 参数
    - `{String} domStr`： dom 字符串
    - `{Boolean} withWrapper`：返回是否含有父容器
    - `{String} className`： 类样式名称
  - 返回值：`Element | Nodes`

- enterFullscreen(el)

  进入全屏

  - 参数
    - `{Element} el`： 要素

- exitFullscreen()

  退出全屏

- createVideo(url, className, [container])

  创建视频节点

  - 参数
    - `{String} url`： 视频地址
    - `{String} className`： 样式名，多个用空格隔开
    - `{Element} [container]`： 父容器
  - 返回值：`Element | Nodes`
