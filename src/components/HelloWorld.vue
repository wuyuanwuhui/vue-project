<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs Hello world
        </a>
      </li>
      <li>
        <a href="#">You are testing</a>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import route from '../router/route'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    searchPath (route, name) {
      for (let i in route) {
          if(name === route[i].name) {
            return route[i].path
          }
          if (route[i].children !== undefined) {
              // console.log(route[i].children)
              return this.searchPath (route[i].children, name)
          }
      }
    },
    replacePath (route, menuModule) {
        for (let i in menuModule) {
          menuModule[i].path = this.searchPath(route, menuModule[i].name)
          if (menuModule[i].children !== undefined) {
            this.replacePath(route, menuModule[i].children)
          }
        }
      return menuModule
    },
    readyRender () {
        let menuModule = [
            {
                name: '个人信息',
                path: '/site/hello'
            }
        ]
        let userModule = [
            {
                "name": "系统管理",
                "path": "sysmanage",
                "children": [
                    {
                        "name": "日志管理",
                        "path": "xxxxx"
                    },
                    {
                        "name": "角色管理",
                        "path": "bbbbb"
                    }
                ]
            }
        ]
        let jsonModule = JSON.parse(JSON.stringify(userModule))
        for(let i in jsonModule) {
            menuModule.push(jsonModule[i])
        }
        // replace real path
        menuModule = this.replacePath(route, menuModule)
        console.log(menuModule)
    }
  },
  created () {
    // this.readyRender()
    console.log('test axios...')
    axios.get('/site/vue')
      .then(response => {     //箭头函数
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
