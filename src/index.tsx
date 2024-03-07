import ReactDOM from 'react-dom/client'
import {lazy, Suspense} from 'react'
import {LoadingHeaderBar} from "./dhis2HeaderBar/components/loadingHeaderBar.component.tsx"
import {DashboardContext} from "./dashboard/components/dashboardContext.component.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const Dhis2HeaderBar = lazy(()=>import('./dhis2HeaderBar/components/dhis2HeaderBar.component'))

ReactDOM.createRoot(document.getElementById('root')!).render(<>
    <Suspense fallback={<LoadingHeaderBar/>}><Dhis2HeaderBar/></Suspense>
    <DashboardContext/>
</>)


