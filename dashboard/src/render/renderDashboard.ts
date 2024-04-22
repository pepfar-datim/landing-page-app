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

function renderInfoMessage():string {
    return `
        <div id="infoMessage" class="infoMessage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#004973" viewBox="0 0 30 30" width="20px" height="20px"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"/></svg>
        In June 2024, DATIM will transition to Single Sign-On (SSO).
        Any DATIM user account invites you send must finish their activation before that transition.
        If they do not, they will need to be re-invited to DATIM after the transition.
        </div>
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
        ${renderInfoMessage()}
        ${rows.map(renderRow).join('')}
    </div>`)
    document.getElementById('content')!.innerHTML = html
}