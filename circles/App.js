// Render the circles using React!
const Circle = (props) => {
    const style = {
        width: (props.radius * 2) + 'px', 
        height: (props.radius * 2) + 'px', 
        borderRadius: props.radius, 
        backgroundColor: props.color
    }
    return (
        <div style={style}></div>
    )
}

const App = (props) => {
    let { circles } = props;
    const AllCircles = props.circles.map(Circle)
    console.log(AllCircles)

    return (
        <span>
            {AllCircles}
        </span>
    )
}
