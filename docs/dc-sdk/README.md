<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-28 09:29:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-28 17:35:52
-->
# DC-SDK  

## 命名空间  

`DC`

DC为框架默认命名空间  
::: danger
开发时尽量不要使用DC为变量名或者命名空间，避免框架无法正常使用
:::  

`Cesium`  

**Cesium** 是一款面向三维GIS的世界级的ES6开源产品。该产品翻遍个人或团队快速搭建一款无插件的三维GIS的Web应用，在性能、精度、渲染质量、跨平台上都有很好的保证。开发时如果需要Cesium的内部接口可以通过`const { Cesium } = DC.Namespace` 获取Cesium。  

`mapv`  

**Mapv** 是一款地理信息可视化开源库，可以用来展示大量地理信息数据，点、线、面的数据，每种数据也有不同的展示类型，如直接打点、热力图、网格、聚合等方式展示数据。开发时如果需要Mapv的内部接口可以通过`const { mapv } = DC.Namespace` 获取mapv。  

## 全局函数  

### use  

> 在DC框架中使用第三方模块或框架 

```js
let plugin = {
    install: (DC) => {},
}
DC.use(plugin)
```  

### mixin  

> 在DC中添加额外属性或函数  

```js
let comp = {
    a: 'b',
}
DC.mixin(comp)
DC.a // b
```  

### init  

> 该函数为初始化Cesium时用，默认使用的时Cesium为最新的版本，如果使用自定义的Cesium版本，可在DC加载其他模块钱修改Cesium的引用，从而替换整个DC体系中的Cesium`慎用`  

```js
DC.init(() => {
    DC.Namespace['Cesium'] = '<自定义Cesium>' // 替换框架中默认Cesium引用，需在DC加载其他模块前使用
    DC.use(DcCore)
})
```  

### ready  

> 框架主入口，使用框架时，必须以这个开始，否则无法构建3D场景  

```js  
global.DC = DC // 将DC变量设置为全局，方便在工程中使用 
DC.use(DcCore)
DC.ready(() => {
    let viewer = new DC.Viewerr(divId)
})
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

`DC.ImageryType.ARCGIS`: arcgis地图  

`DC.ImageryType.SINGLE_TILE` 单图片地图  

`DC.ImageryType.WMS`: WMS地图 

`DC.ImageryType.WMTS`: WMTS地图  

`DC.ImageryType.XYZ`: xyz格式地图  

`DC.ImageryType.COORD`: 瓦片坐标地图   

`DC.ImageryType.AMAP`: 高德地图  

`DC.ImageryType.BAIDU`: 百度地图  

`DC.ImageryType.GOOGLE`: 谷歌地图  

`DC.ImageryType.TDT`: 天地图 

`DC.ImageryType.TECENT`: 腾讯地图  


### TerrainType   

`DC.TerrainType.NONE`: 无地形  

`DC.TerrainType.XYZ`: xyz格式地形  

`DC.TerrainType.GOOGLE`: 谷歌地形   

`DC.TerrainType.ARCGIS`: arcgis地形  

`DC.TerrainType.VR`: VR地形 

### LayerType  

`DC.LayerType.VECTOR`: 矢量图层  

`DC.LayerType.PRIMITIVE`: 图元图层  

`DC.LayerType.TILESET`: 3dtiles 图层  

`DC.LayerType.HTML`: html图层  

`DC.LayerType.GEOJSON`: GeoJson图层  

`DC.LayerType.CLUSTER`: 聚合图层  

`DC.LayerrType.VIDEO`: 视频图层  

`DC.LayerType.KML`: kml图层  

`DC.LayerType.CZML`: czml图层  

`DC.LayerType.HEAT`: 热区图层  

`DC.LayerType.MAPV`: Mapv图层  

`DC.LayerType.CHART`: echarts图层  


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

> 3D场景主要接口，在给定的DivId中构建三维场景，也可用DC.World.  

### example

```html
<div id="map-container">
```

```js
let viewer = DC.Viewer("map-container")
global.Viewer = viewer // 添加到全局变量 
```   

::: warning  
如果开发使用的是Vue这样的MVVM框架，请不要将viewer、layer、overlay 添加到数据模型中。由于3D场景中会不停的刷新每一帧，
如果将数据添加到数据模型中，长时间的话会导致服务器的压力增大而崩溃
:::

### creation  

- constructor(id, options) 
DC.Viewer构造函数 
    - 参数
        - `{String} id`: 容器ID
        - `{Object} options`: 属性
    - 返回值 `viewer`  
    ```json
    // 属性参数（可选）
    {
        "contextOptions": {
            "webgl": {
                "alpha": false, // 背景
                "depth": true,
                "stencil": false,
                "antialias": true,
                "powerPreference": "high-performance",
                "premultipliedAlpha": true,
                "preserveDrawingBuffer": false,
                "failIfMajorPerformanceCaveat": false,
            },
            "allowTextureFilterAnisotropic": true,
        },
        "sceneMode": 3 // 1: 2.5D 2: 2D, 3: 3D
    }
    ```    

### properties  

- `{Element} dcContainer`: 框架自定义容器 `readonly`
- `{Object} scene`: 场景 `readonly`, 详情参考：[Scene](https://cesium.com/docs/cesiumjs-ref-doc/Scene.html)  
- `{Object} camera`: 相机 `readonly`, 详情参考：[Camera](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html)  
- `{Element} canvas`: canvas节点 `readonly`  
- `{Object} clock`: 时钟，请参考：[Clock](https://cesium.com/docs/cesiumjs-ref-doc/Clock.html)  
- `{Object} dataSources`: 数据资源集合，详情参考： [DataSourceCollection](https://cesium.com/docs/cesiumjs-ref-doc/DataSourceCollection.html)  

- `{Object} imageryLayers`: 瓦片集合，详情参考：[ImageryLayerCollection](
    https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayerCollection.html
)  
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
        - `{String} id`: 图层ID
    - 返回值： `layer`

- getLayers()
    获取所有图层，不包括地图
    - 返回值：`layer` 

- eachLayer(method, context)
    遍历所有图层
    - 参数
        - `{Function} method`: 回调函数
        - `{Object} context`: 上下文，默认为this
    - 返回值： `this`    
    ```js
    viewer.eachLayer((layer) => {})
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
    }
    viewer.use(plugin) 
    ```       

## Popup  

> 气泡窗口  

### example

```js
let popup = viewer.popup 
popup.setContent('<div></div>')
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
let contextMenu = viewer.contextMenu
contextMenu.enable = true
contextMenu.DEFAULT_MENU = [
    {
        label: "测试",
        callback: (e) => {}, // e 是一个对象包括 windowPosition, position, surfacePosition, overlay
        context: this,
    }
] // 设置默认的右击菜单，会影响全局右击菜单（慎用）
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
let baseLayer_elc = DC.ImageryLayerFactory.createGoogleImageryLayer()
viewer.mapSplit.enable = true
viewer.mapSplit.addBaseLayer(baseLayer_elc, -1)
```

### properties 

- `{Boolean} enable`: 是否启用
- `{String} state`: 状态   `readonly`

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
viewer.distanceLegend.enable = true
```

### properties 

- `{Boolean} enable`: 是否启用
- `{String} state`：状态 `readonly` 

## DC.ImageryLayerFactory 

> 地图工厂，用于创建各类地图瓦片

### example  

```js
let baseLayer = DC.ImageryLayerFactory.createAmapImageryLayer({
    style: "img"
})
viewer.addBaseLayer(baseLayer, {
    name: "地图",
    iconUrl: "../preview.png"
})
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
    创建Arcgis地图
    - 参数
        - `{Object} options`: 属性 详情参考：[ArcGis](https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html#.ConstructorOptions)
    - 返回值：`baseLayer`

- createSingleTileImageryLayer(options)
    创建单图片地图
    - 参数
        - `{Object} options`: 属性 详情参考：[Single](https://cesium.com/docs/cesiumjs-ref-doc/SingleTileImageryProvider.html#.ConstructorOptions)
    - 返回值：`baseLayer`

- createWMSImageryLayer(options)
    创建WMS地图
    - 参数
        - `{Object} options`: 属性 详情参考：[WMS](https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html#.ConstructorOptions)
    - 返回值：`baseLayer` 

- createWMTSImageryLayer(options)
    创建WMTS地图
    - 参数
        - `{Object} options`: 属性 详情参考：[WMTS](https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html#.ConstructorOptions)
    - 返回值：`baseLayer` 

- createXYZImageryLayer(options)
    创建X/Y/Z地图
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
