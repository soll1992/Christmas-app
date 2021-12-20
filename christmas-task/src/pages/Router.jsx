import { Home } from './Home/home'
import { Content } from './Content/content'

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
]