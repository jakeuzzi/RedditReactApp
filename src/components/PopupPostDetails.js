import PopupCustom from "./PopupCustom";
import useFetch from "../hooks/useFetch.js";
import CommentSentiment from "./CommentSentiment";

const PopupPostDetails = (props) => {
  
  const { response, error, loading } = useFetch(
    `https://www.reddit.com/r/nfl/comments/${props.postDetails.postID}/.json`,
    {
      query: { limit: 25, }
    }
  );

    return (
        <PopupCustom open={props.open} closeOnDocumentClick onClose={props.closeModal}>
        <div className="modal">
          <a className="close" onClick={props.closeModal}>
            &times;
          </a>
          <a href={props.postDetails.postURL} className="popup-title post-title">{props.postDetails.postTitle}</a>
          {loading ? <div>Loading top comment...</div> : ""} 
          {!error && !loading ? 
            <>
              <div className="popup-body">
                <span style={{marginRight: "9px"}}>Top comment:</span> 
                <span style={{color: "white", fontWeight: "500", wordBreak: "break-word"}}>{response[1].data.children[0].data.body}</span>
              </div>
              <CommentSentiment commentArray = {response[1].data.children} />
            </> : ""}
        </div>
      </PopupCustom>
    );
}

export default PopupPostDetails;
