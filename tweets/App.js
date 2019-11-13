// Render the tweets using React!
const App = (props) => {
    console.log(props.tweets)
    const ArrayOfTweetComponents = props.tweets.map(Tweet)

    return (
        <div className="container">
            {ArrayOfTweetComponents}
        </div>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    const { user } = props
    const metrics = {
        likes: props.likes,
        retweets: props.retweets,
        replies: props.replies
    }

    return (
        <div className="card">
            <div className="card-body">
                <User user={user}/>
                <p className="card-text">{props.text}</p>
                <Metrics {...metrics} />
            </div>
        </div>
    )
}

// CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {
    // console.log('user props:', props)
    let url = props.user.profilePic
    let verifiedCheck = ""
    if (props.user.isVerified) {
        verifiedCheck = <img src="./twitterIcons/check-circle.svg" />
    }
    return (
        <div>
            <img width="50" src={url} />
            <h5 className="card-title">{props.user.handle} {verifiedCheck}</h5>
        </div>
    )

}

// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = (props) => {
    const FlexStyle = {
        display: "flex",
        justifyContent: "space-evenly" 
    }
    const IconPadding = {
        paddingRight: "10px"
    }

    return (
        <div style={FlexStyle}>
            <span><img style={IconPadding} src="./twitterIcons/heart.svg"/>{props.likes}</span>
            <span><img style={IconPadding} src="./twitterIcons/repeat.svg"/>{props.retweets}</span>
            <span><img style={IconPadding} src="./twitterIcons/message-circle.svg"/>{props.replies}</span>
        </div>
    )
}

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly
