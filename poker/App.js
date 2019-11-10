// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    const CardsRender = props.cards.map(Card)
    console.log('app CardsRender', CardsRender)
    return (
        <span>{CardsRender}</span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    console.log("Card component props:", props)
    let url = './cards/' + props.value + props.suit + '.png'
    return (
        <img src={url} width="151"></img>
    )
};  