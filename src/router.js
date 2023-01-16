import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'


const routes = [
  {
    path: "/list",
    component: List,
    children : [
      {
        path: "author",
        component: Author.vue,
      },
      {
        path: "comment",
        component: Comment.vue,
      }
    ]
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail:id(\\d+)", //숫자만 걸러주는 정규식인데 이런식으로 디테일한 파라미터 전달가능
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 