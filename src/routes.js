import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import user from './components/user'
// import bLoading from './components/loading'

export default[
    {path:"/AddBlog",component:AddBlog},
    {path:"/",component:Home},
    {path:"/SingleBlog/:id",component:SingleBlog},
    {path:"/Login",component:Login},
    {path:"/Register",component:Register},
    {path:"/Home",component:Home},
    {path:"/ShowBlogs",component:ShowBlogs},
    {path:"/user",component:user},
]