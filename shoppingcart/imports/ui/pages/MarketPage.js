import React from "react";
import {useParams} from "react-router-dom";
// import { Loading, Tabs, Icon } from "element-react";

const MarketPage = ({props}) => {
    const {marketId} = useParams();
    return <div>Market Page {marketId}</div>;
};
export default MarketPage;
