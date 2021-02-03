module.exports = {
  title: "DC-SDK 开发文档",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 2,
    nav: [
      { text: "教程", link: "/introduction/" },
      { text: "dc-sdk", link: "/dc-sdk/" },
      {
        text: "生态系统",
        items: [
          {
            text: "dc-plugins",
            link: "/dc-plugins/",
          },
          {
            text: "dc-overlay",
            link: "/dc-overlay/",
          },
          {
            text: "dc-analysis",
            link: "/dc-analysis",
          },
          {
            text: "dc-plot",
            link: "/dc-plot/",
          },
          {
            text: "dc-mapv",
            link: "/dc-mapv/",
          },
          {
            text: "dc-chart",
            link: "/dc-chart/",
          },
        ],
      },
      {
        text: "知识体系",
        items: [
          {
            text: "GIS概论",
            link: "/knowledge/gis-base/",
          },
        ],
      },
    ],
  },
};
