// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    let AllNames = props.nameTags.map(NameTag)
    return (
        <span>{AllNames}</span>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = (props) => {
    console.log('NameTag props: ', props)
    return (
        <div className="nametag mx-auto w-50 text-center border m-1">
            <div className="hello bg-primary text-white p-3 h3">Hello, my name is:</div>
            <div className="name h4 p-5">{props}</div>
        </div>
    )
}  