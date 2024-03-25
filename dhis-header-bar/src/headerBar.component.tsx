//@ts-expect-error missing export
import {Provider} from '@dhis2/app-runtime'
import {HeaderBar} from '@dhis2/ui'
import {dhis2ProviderConfig} from './providerConfig.const.ts'

export default function Dhis2HeaderBar(){
    return <Provider config={dhis2ProviderConfig}>
        <HeaderBar appName={''}/>
    </Provider>
}