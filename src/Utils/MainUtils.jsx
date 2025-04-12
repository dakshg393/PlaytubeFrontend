import {BookMarked, BookOpen, BookOpenIcon, History, House, LibraryBig, ThumbsUp, TrendingUp} from "lucide-react"


const navItems = [
    {
        path: "/",
        name: "Home",
        icon:<House size={26}/>
    },
    {
        path: "/trending",
        name: "Trending",
        icon:<TrendingUp size={26}/>

    },
    {
        path: "/subscriptions",
        name: "SubScriptions",
        icon:<LibraryBig size={26}/>
    },
    {
        path: "/library",
        name: "Library",
        icon:<BookOpen icon={26}/>
    }
]



const categoryItems = [
    {
        search:"",
        name:"All"
    },
    {
        search:"",
        name:"Technology"
    },
    {
        search:"",
        name:"Gaming"
    },
    {
        search:"",
        name:"Travel"
    },
    {
        search:"",
        name:"Music"
    },
    {
        search:"",
        name:"Education"
    },
    {
        search:"",
        name:"Sports"
    }
]

const libraryItems=[
    {
        name:"All",
        path:"/",
        icon:<BookOpenIcon/>
    },
    {
        name:"Playlist",
        path:"",
        icon:<BookMarked/>
    },
    {
        name:"Liked Video",
        path:"",
        icon:<ThumbsUp/>
    },
    {
        name:"Watch History",
        path:"",
        icon:<History/>
    },
]

export {
    navItems,
    categoryItems,
    libraryItems
}