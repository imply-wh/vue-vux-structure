import axios from 'axios';
import router from '../router'
import VuexStore from '../store/index.js'


// axios 配置
axios.defaults.timeout = 1000*10;
//axios.defaults.baseURL = 'http://localhost/pjm-shield-api/public/v1/';


// http request 拦截器
axios.interceptors.request.use(
  config => {
    //config.data = JSON.stringify(config.data);
    config.headers = {
      // 'Content-Type':'application/x-www-form-urlencoded'
    };
    VuexStore.state.LoadShow = true;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode == 2) {
      router.push({
        path: '/',
        query: {redirect: router.currentRoute.fullPath}  //从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 401 清除token信息并跳转到登录页面
    //             store.commit(types.LOGOUT);
    //             router.replace({
    //                 path: 'login',
    //                 query: {redirect: router.currentRoute.fullPath}
    //             })
    //     }
    // }
    return Promise.reject(error.response.data)
  });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        VuexStore.state.LoadShow = false;
        if(response.data.httpCode === '200'){

        }else{
          VuexStore.state.ToastERR = true;
          VuexStore.state.ERRToast = response.data.msg;
          return;
        }
        resolve(response);
      })
      .catch(err => {
        VuexStore.state.LoadShow = false;
        VuexStore.state.ToastERR = true;
        VuexStore.state.ERRToast = '服务器错误，请稍后重试';
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        VuexStore.state.LoadShow = false;
        if(response.data.httpCode === '200'){

        }else{
          VuexStore.state.ToastERR = true;
          VuexStore.state.ERRToast = response.data.msg;
          return;
        }
        resolve(response);
      }, err => {
        VuexStore.state.LoadShow = false;
        VuexStore.state.ToastERR = true;
        VuexStore.state.ERRToast = '服务器错误，请稍后重试';
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        VuexStore.state.LoadShow = false;
        if(response.data.httpCode === '200'){

        }else{
          VuexStore.state.ToastERR = true;
          VuexStore.state.ERRToast = response.data.msg;
          return;
        }
        resolve(response);
      }, err => {
        VuexStore.state.LoadShow = false;
        VuexStore.state.ToastERR = true;
        VuexStore.state.ERRToast = '服务器错误，请稍后重试';
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        VuexStore.state.LoadShow = false;
        if(response.data.httpCode === '200'){

        }else{
          VuexStore.state.ToastERR = true;
          VuexStore.state.ERRToast = response.data.msg;
          return;
        }

        resolve(response);
      }, err => {
        VuexStore.state.LoadShow = false;
        VuexStore.state.ToastERR = true;
        VuexStore.state.ERRToast = '服务器错误，请稍后重试';
        reject(err);
      })
  })
}
