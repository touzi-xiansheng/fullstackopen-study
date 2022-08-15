import {useState} from 'react'
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
    // save clicks of each button to its own state
    const [allClicks, setAllClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        score: 0,
        all: 0
    })
    const average = allClicks.score / allClicks.all
    const positive = Math.round(allClicks.good / allClicks.all * 10000) / 100.00
    const getGood = () => {
        setAllClicks({
            ...allClicks,
            good: allClicks.good + 1,
            all: allClicks.all + 1,
            score: allClicks.score + 1
        })
    }
    const getNeutral = () => {
        setAllClicks({
            ...allClicks,
            neutral: allClicks.neutral + 1,
            all: allClicks.all + 1,
            score: allClicks.score,
        })
        console.log('score:', allClicks.score)
        console.log('all:', allClicks.all)
    }
    const getBad = () => {
        setAllClicks({
            ...allClicks,
            bad: allClicks.bad + 1,
            all: allClicks.all + 1,
            score: allClicks.score - 1
        })
        console.log('score:', allClicks.score)
        console.log('all:', allClicks.all)
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={getGood} text="good"/>
            <Button onClick={getNeutral} text="neutral"/>
            <Button onClick={getBad} text="bad" />
            <Statistics
                allClicks={allClicks}
                good={allClicks.good}
                neutral={allClicks.neutral}
                bad={allClicks.bad}
                all={allClicks.all}
                average={average}
                positive={positive}
            />
        </div>
    )
}
export default App
