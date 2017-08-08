import Home from '../views/Home'
import Main from '../views/Main'
import Music from '../views/Music'
import Friends from '../views/Friends'
import Account from '../views/Account'
// Main
import StyleRecommend from '../components/StyleRecommend'
import SongList from '../components/SongList'
import AnchorStation from '../components/AnchorStation'
import RankingList from '../components/RankingList'

// FM/每日推荐/热歌榜
import FM from '../views/FM'
import DayRecommend from '../views/DayRecommend'
import HotRanking from '../views/HotRanking'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'main',
                name: 'Main',
                component: Main,
                children: [
                    { path: 'styleRecommend', name: 'StyleRecommend', component: StyleRecommend },
                    { path: 'songList', name: 'SongList', component: SongList },
                    { path: 'anchorStation', name: 'AnchorStation', component: AnchorStation },
                    { path: 'rankingList', name: 'RankingList', component: RankingList }
                ]
            },
            {
                path: 'music',
                name: 'Music',
                component: Music
            },
            {
                path: 'friends',
                name: 'Friends',
                component: Friends
            },
            {
                path: 'account',
                name: 'Account',
                component: Account
            },
            {
                path: 'fm',
                name: 'FM',
                component: FM
            },
            {
                path: 'dayRecommend',
                name: 'DayRecommend',
                component: DayRecommend
            },
            {
                path: 'hotRanking',
                name: 'HotRanking',
                component: HotRanking
            }
        ]
    },
    {
        path: '/',
        redirect: '/home'
    }
]



export default routes;
