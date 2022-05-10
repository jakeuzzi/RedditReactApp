import AnalyzeSentiment from "../utilities/SentimentAnalysis";

const CommentSentiment = (props) => {

    const commentArrayToString = (commentArray) => {
        const sampleLimit = 10;
        let outputString = "";
        commentArray.length = commentArray.length < sampleLimit ? commentArray.length : sampleLimit;
        console.log(commentArray.length);
        commentArray.forEach((element, index) => {
          console.log(element.data.body);
          if (element.data.body != undefined) outputString += " " + element.data.body;
        });
        return outputString;
      }

    const sentimentScore = AnalyzeSentiment(commentArrayToString(props.commentArray));
    const prevailingSentiment = sentimentScore > 0 ? "pos" : "neg";

    return (
        <div className="comment-sentiment">
            <span>Comment sentiment: </span>
            <span className={"comment-score-number " + prevailingSentiment}>{sentimentScore}</span>
        </div>
    );
}

export default CommentSentiment;