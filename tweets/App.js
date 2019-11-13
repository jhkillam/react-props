// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    // console.log('app props', props)
    const TweetsRender = props.tweets.map(Tweet)
    return (
        <div>
            {TweetsRender}
        </div>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    let url = props.user.profilePic
    let verifiedCheck = ""
    if (props.user.isVerified) {
        verifiedCheck = <img src="./twitterIcons/check-circle.svg" />
    }
    const FlexStyle = {
        display: "flex",
        justifyContent: "space-evenly" 
    }
    const IconPadding = {
        paddingRight: "10px"
    }
    return (
        <div className="card">
            <div className="card-body">
                <img width="50" src={url} />
                <h5 className="card-title">{props.user.handle} {verifiedCheck}</h5>
                <p className="card-text">{props.text}</p>
                <div style={FlexStyle}>
                    <span><img style={IconPadding} src="./twitterIcons/message-circle.svg"/>{props.replies}</span>
                    <span><img style={IconPadding} src="./twitterIcons/repeat.svg"/>{props.retweets}</span>
                    <span><img style={IconPadding} src="./twitterIcons/heart.svg"/>{props.likes}</span>
                </div>
            </div>
        </div>
    )
};  

// CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {

}

const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly