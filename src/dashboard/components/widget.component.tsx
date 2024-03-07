import {Widget as WidgetType} from "../types/dashboard.types.ts";
import {useEffect} from "react";
import {Box, Paper} from "@mui/material";

const styles = {
    widget: {
        flexGrow:1
    },
    paper:{
        height: '100%',
        minHeight: 300
    },
    object: {
        width: '100%',
    }
}

const getObject = (id:string):HTMLObjectElement=>document.getElementById(id) as HTMLObjectElement
const getContentHeight = (id:string):number|undefined=>getObject(id).contentDocument?.querySelector('html')?.offsetHeight
const getContainerHeight = (id:string):number=>getObject(id).offsetHeight

function resizeContainer(id:string):void {
    const contentHeight = getContentHeight(id)
    if (!contentHeight) return
    getObject(id).style.minHeight = `${contentHeight + 1}px`
    console.log('resizing', id, getContainerHeight(id))
}

const pause = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms))
async function startInitialResize(id:string):Promise<void>{
    console.log('init resize',id)
    setTimeout(async ()=> {
        while (getContainerHeight(id) < 160) {
            await pause(100)
            resizeContainer(id)
        }
    }, 700)
}

export function Widget({widget: {id, size: {width}}}: {widget: WidgetType}) {
    useEffect(function () {
        window.addEventListener('resize', ()=>resizeContainer(id));
    }, [id])
    return <Box flexGrow={width} data-testid={id}>
        <Paper sx={styles.paper}>
            <object
                id={id}
                data={`/api/apps/Information/index.html?dashboardItemId=${id}#/`}
                style={styles.object}
                onLoad={()=>startInitialResize(id)}
            />
        </Paper>
    </Box>
}