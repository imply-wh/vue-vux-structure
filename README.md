# vue-vux-structure
<p>一个自己使用和方便初学者直接install的框架</p>
<h4>项目结构</h4>
<p>vue(2.5.2) + vue-router + vuex + vux + axios + webpack(3.6)</p>
<h4>基础功能</h4>
<ul>
  <li>在config/index中，proxyTable可以代理请求，解决开发环境下跨域的问题，生产环境我使用和nginx配合解决前后端分离跨域问题</li>
  <li>对axios的四个请求方式进行封装，在src/util/http.js中，同时加入拦截器，批量处理请求过度效果</li>
  <li>axios的组件中有封装好的请求和代理怎么发送请求的用法</li>
  <li>app.vue中全局加入vux的成功提示，错误提示，加载中的样式，控制在vuex中</li>
</ul>
<h4>注意事项</h4>
<ul>
  <li>引入vux组件最好一个一个引入，可减少项目体积</li>
  <li>eslink项目中有引入，但被屏蔽掉了，有需要自己释放</li>
  <li>启动项目前，将在config/index中，proxyTable配置修改为自己需要的，或者删除，避免报错</li>
  <li>项目端口为8099，可自行修改</li>
</ul>
