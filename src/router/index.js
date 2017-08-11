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

// 音乐播放器
import MusicPlayer from '../views/MusicPlayer'

// 歌单详细
import PlayList from '../components/list/PlayList'

// 独家放送
import Exclusive from '../components/Exclusive'

// 最新音乐
import LatestList from '../components/LatestList'

// 推荐MV
import RecommendMV from '../components/RecommendMV'

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
                    {  path: 'songList', name: 'SongList', component: SongList },
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
            },
            {
                 path: 'playList', 
                 name: 'PlayList', 
                 component: PlayList
            },
            {
                path: 'exclusive', 
                name: 'Exclusive', 
                component: Exclusive
            },
            {
                path: 'latestList', 
                name: 'LatestList', 
                component: LatestList
            },
            {
                path: 'recommendMV', 
                name: 'RecommendMV', 
                component: RecommendMV
            }
        ]
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/musicPlayer',
        name: 'MusicPlayer',
        component: MusicPlayer
    }
]



export default routes;
