/* eslint-disable no-undef */
window.onload = function() {
  window["SwaggerUIBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
  const ui = SwaggerUIBundle({
    url: "./swagger.yaml",
    dom_id: "#swagger-ui",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    // 显示配置
    displayOperationId: true,          // 显示 operationId
    showCommonExtensions: true,        // 显示扩展信息
    showExtensions: true,              // 显示扩展
    requestSnippetsEnabled: true,      // 启用请求代码片段
    tryItOutEnabled: true,             // 启用 "Try it out" 功能
    
    // 其他有用的配置
    deepLinking: true,                 // 启用深度链接
    displayRequestDuration: true,      // 显示请求持续时间
    docExpansion: "list",              // 默认展开方式：none, list, full
    filter: true,                      // 启用操作过滤器
    showRequestHeaders: true,          // 显示请求头
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch', 'head', 'options'],
    
    layout: "StandaloneLayout"
  })

  window.ui = ui

  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile email phone address",
    additionalQueryStringParams: {},
    useBasicAuthenticationWithAccessCodeGrant: false,
    usePkceWithAuthorizationCodeGrant: false
  })
}
