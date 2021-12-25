import { Home } from './Home/home'
import { Content } from './Content/content'
import { Tree } from './Tree/tree'



export const Pages = [
    {
        link: '/',
        title: 'Home',
        component: <Home />,
    },
    {
        link: '/content',
        title: 'Content',
        component: <Content />,
    },
    {
        link: '/tree',
        title: 'Tree',
        component: <Tree />,
    },
]