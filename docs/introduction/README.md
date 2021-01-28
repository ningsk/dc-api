<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-28 09:56:27
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-28 12:02:41
-->



# 教程
## 基础

### DC-SDK是什么  

`DC-SDK` 是基于开源项目`Cesium`进行二次开发的二三维一体的`WebGis`应用框架，该框架优化了`Cesium`的使用方式和添加了一些额外功能，旨在为开发者快速构建`WebGis`应用。  

### 坐标系统  

`世界坐标`  

笛卡尔坐标，以椭球中心为原点的空间直角坐标系中的一个点的坐标。  

`地理坐标`  

地理坐标系，坐标原点在椭球的质心。  
经度：参考椭球面上某点的大地子午面与本初子午面间的两面角。东正西负。  
纬度：惨开椭球面上某点的法线与赤道平面的夹角。北正南负。  

`屏幕坐标` 

浏览器窗口坐标。  

### WebGL 

WebGL 是一种Javascript API,用于在不使用插件的情况下进行任何兼容的网页浏览器中呈现交互式2D和3D图形。WebGL完全集成到浏览器的所有网页标准中，可以将影像处理和效果的GPU加速使用方式当作网页Canvas的一部分。WebGL元素可以加入其他HTML元素中并与网页或网页背景的其他部分混合。WebGL程序由JavaScript编写的句柄和OpenGL Shading Language（`GLSL`）变斜的着色器代码组成。

### 三维数据 

`glb/gltf`
  
GLTF代表Graphics Language Transmission Format（图形语言传输格式）。这种跨平台格式已成为Web上的3D对象标准。它由OpenGL和Vulkan背后的3D图形标准组织Khronos所定义，这使得GLTF成为3D模型的JPG格式：Web导出的通用标准。  

`3dtiles`  

3DTiles是用于流式传输大规模异构3D地理空间数据集的开放规范。3D Tiles 数据通过shp、osgb(倾斜摄影)、3dmax等数据生成。 

`geojson`  

GeoJSON是一种对各种地理数据结构进行编码的格式，基于Javascript对象表示法的地理信息数据交换格式。GeoJSON对象可以表示几何、特征或特征集合。GeoJSON支持下面几种集合类型：点、线、面、多点、多线、多面和几何集合。GeoJSON里的特征包含一个几何对象和其他属性，特征集合表示一系列特征。  

`kml\czml`  

KML\CZML 是一个JSON格式的数据，描述time-dynamic(时间、动态)图形场景，它描述了线、点、广告牌（标记）、模型和其他图形原语，并指定他们随时间变化。


