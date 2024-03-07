import {render, screen} from "@testing-library/react"
import {DashboardContext} from "../dashboard/components/dashboardContext.component.tsx"
import {MapOf} from "./test.types.ts"
import {dashboardFetchResponses} from "./data/1.dashboard.fetchResponses.ts"

export function mockFetch(urlList:MapOf<object>):void{
    //@ts-expect-error global not defined
    global.fetch = vitest.fn().mockImplementation((url:string)=>{
        console.log(url,'\n\n')
        if (!urlList[url]) throw new Error(`URL is not mocked ${url}`)
        return Promise.resolve({json:()=>urlList[url]})
    })
}

//@ts-expect-error css issue
const checkCss = (id:string, prop:string, value:number)=>expect(getComputedStyle(screen.getByTestId(id))[prop]).toBe(value.toString())

test(`1 > Dashboard test`, async ()=>{
    mockFetch(dashboardFetchResponses)
    render(<DashboardContext/>)
    await screen.findByTestId('WelcomeInfo')

    // Check width of neighbors
    checkCss('NavigInstrc', 'flexGrow',25)
    checkCss('NavigSifter', 'flexGrow',34)

    // We should have 4 widgets
    expect(document.querySelectorAll('object').length).toBe(4)
})