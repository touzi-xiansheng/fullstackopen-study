import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    if (props.allClicks.all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                <StatisticLine text="good" value={props.good}/>
                <StatisticLine text="neutral" value={props.neutral}/>
                <StatisticLine text="bad" value={props.bad}/>
                <StatisticLine text="all" value={props.all}/>
                <StatisticLine text="average" value={props.average}/>
                <StatisticLine text="positive" value={props.positive} unit="%"/>
                </tbody>
            </table>

        </div>
    )
}
export default Statistics
