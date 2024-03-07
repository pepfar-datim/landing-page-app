export function reportStatistics(){
    fetch('/api/dataStatistics?eventType=PASSIVE_DASHBOARD_VIEW&favorite=LandingPage',{method: 'POST'})
}