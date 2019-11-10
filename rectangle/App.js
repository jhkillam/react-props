// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;

    const styles = {
        height: rectangle.height,
        width: rectangle.width,
        backgroundColor: rectangle.color
    }

    return (
        <span><div style={styles}></div></span>
    )
}