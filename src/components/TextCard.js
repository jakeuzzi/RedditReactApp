import PointsMarker from "./PointsMarker";
import QuickFacts from "./QuickFacts";
import addColorTransparency from "../utilities/addColorTransparency";
import PopupCustom from "./PopupCustom";


const TextCard = props => {

    const convertDecToPct = (dec) => dec == null ? "" : (dec * 100).toFixed(0) + "%";

    const postTileClick = () => {
        props.modalOptions.setPostDetails({
            postTitle: props.postData.title,
            topComment: "top comment from post",
            postID: props.postData.id,
            postURL: props.postData.url
        });
        props.modalOptions.openModal((o) => !o);
    }

    const quickFacts = [
        {
            factType: "upvotePct",
            factValue: convertDecToPct(props.postData.upvote_ratio),
            scoreColor: props.scoreColor
        },
        {
            factType: "commentCt",
            factValue: props.postData.num_comments,
            scoreColor: props.scoreColor
        },
        {
            factType: "author",
            factValue: props.postData.author,
            scoreColor: props.scoreColor
        }
    ];

    return (
        <div className="postcard" style={{borderColor: props.scoreColor}} onClick={postTileClick}>
            <div className="postcard-border">
                <div className="postcard-border-inner" style={{background: `${props.scoreColor}`}}></div>
            </div>
            <div className="postcard-title">
                {props.postData.title}
                <div className="postcard-title-fade"></div>
            </div>
            <QuickFacts quickFacts={quickFacts} />
            <PointsMarker scoreColor={props.scoreColor} points={props.postData.score} />
            <div className="postcard-bg" style={{background: addColorTransparency(props.scoreColor, "15%")}}></div>
        </div>
    );
};

export default TextCard;