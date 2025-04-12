import {create} from "zustand"
import {devtools,persist} from "zustand/middleware"

const navStore = (set)=>({
    aside:true,
    toggleAside:()=>{
        set((state)=>({aside:!state.aside}) )
    }
})

const useNavStore = create(
    devtools(
        persist(navStore,{name:"aside"})
    )
)

export default useNavStore