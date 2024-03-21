import {Dashboard, Widget} from "../types/dashboard.types.ts"
import './render.styles.css'

function getMinHeight(){
    return 640000/window.innerWidth/2
}

function getObjectWidth(width:number):number{
    return width/59*100
}

function getObjectDimensions(width:number):string{
    return `
        min-height: ${getMinHeight()}px;
        width: ${getObjectWidth(width)}%;
    `
}

function renderWidget({id, size:{width}}:Widget):string{
    return `<object
        id="${id}"
        data="/api/apps/Information/index.html?dashboardItemId=${id}#/"
        style="${getObjectDimensions(width)}"
        onload="initializeContainerResize('${id}')"
        class="object"
    ></object>`
}

function renderRow(widgets:Widget[]):string{
    return `<div class="row">
        ${widgets.map(renderWidget).join('')}
    </div>`
}

function cleanHtml(html:string):string{
    return html
        .replace(/\n/g,'')
        .replace(/  +/g,' ')
}
export function renderDashboard({rows}:Dashboard){
    const html:string = cleanHtml(`<div id='dashboard'>
        ${rows.map(renderRow).join('')}
    </div>`)
    document.getElementById('content')!.innerHTML = html
}