const Header = props => <h1>{props.course}</h1>
const Part = props => <p>{props.part} {props.exercise}</p>
const Content = props => {
   return (
       <div>
           <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
           <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
           <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
       </div>
   )
}
const Total = props => {
    const a0 = props.parts[0].exercises
    const a1 = props.parts[1].exercises
    const a2 = props.parts[2].exercises
    return (
        <>
            Num of exercises {a0 + a1 + a2}
        </>
    )

}
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
      <div>
          <Header course={course} />
          <Content parts={parts} />
          <Total parts={parts} />
      </div>
  )
}
export default App
