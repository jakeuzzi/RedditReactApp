import { ArrowFatLinesUp, ChatCircle, UserRectangle } from "phosphor-react";
import { createElement } from "react";
import addColorTransparency from "../utilities/addColorTransparency";

const QuickFact = (props) => {

    const componentLookup = {
        upvotePct: ArrowFatLinesUp,
        commentCt: ChatCircle,
        author: UserRectangle
    }

    const textLookup = {
        upvotePct: "Upvote Pct",
        commentCt: "Comments",
        author: "Author"
    }

    return (
        <div className="quickfact-container" style={{background: addColorTransparency(props.quickfact.scoreColor, "45%") }}>
            {createElement(componentLookup[props.quickfact.factType], {className: "quickfact-icon"} )}
            <div className="quickfact-value">{props.quickfact.factValue}</div>
            <div className="quickfact-text">{textLookup[props.quickfact.factType]}</div>
        </div>
    )
}

export default QuickFact;