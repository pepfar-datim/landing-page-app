//@ts-expect-error missing export
import {Provider} from '@dhis2/app-runtime'
import {HeaderBar} from '@dhis2/ui'
import {dhis2ProviderConfig} from '../const/providerConfig.const.ts'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

export default function Dhis2HeaderBar(){
	return <Provider config={dhis2ProviderConfig}>
		<HeaderBar/>
	</Provider>
}