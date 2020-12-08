import JsonRenderPage from './JsonRenderPage'
export default function LatestMonthly() {
    return <JsonRenderPage latest="true" list="monthly" onlynext={true}/>;
}