import JsonRenderPage from './JsonRenderPage'
export default function LatestWeekly() {
    return <JsonRenderPage latest="true" list="weekly" onlynext={true}/>;
}