const getObject = (id:string):HTMLObjectElement=>document.getElementById(id) as HTMLObjectElement
const getContentHeight = (id:string):number|undefined=>getObject(id).contentDocument?.querySelector('html')?.offsetHeight
const pause = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms))

function resizeContainer(id:string):void {
    const contentHeight = getContentHeight(id)
    if (!contentHeight) return
    getObject(id).style.minHeight = `${contentHeight + 2}px`
}

async function isLoading(id:string):Promise<void>{
    while(!getContentHeight(id)||getContentHeight(id)!<100){
        await pause(1)
    }
}

declare let initializeContainerResize:(id:string)=>Promise<void>

initializeContainerResize = async function (id:string):Promise<void>{
    await isLoading(id)
    resizeContainer(id)
    window.addEventListener('resize', ()=>resizeContainer(id));
    setTimeout(()=>resizeContainer(id),1000)
}
