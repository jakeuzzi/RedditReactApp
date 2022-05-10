import TextCard from "./TextCard";
import chroma from "chroma-js";

const TextCardCollection = (props) => {
    
    const colorScale = chroma.scale(["#1482cb", "rgb(250, 122, 79)"]);

    const maxScore = props.redditPostData.reduce((prev, curr) => {
        const currScore = curr.data.score ?? 0;
        const prevScore = prev.data.score ?? 0;
        return (prevScore > currScore) ? prev : curr;
    }).data.score;

    const minScore = props.redditPostData.reduce((prev, curr) => {
        const currScore = curr.data.score ?? 0;
        const prevScore = prev.data.score ?? 0;
        return (prevScore < currScore) ? prev : curr;
    }).data.score;

    const getColorByScore = (score) => colorScale((score - minScore) / (maxScore - minScore));

    const textCards = props.redditPostData.map((elem, index) => {
        return <TextCard modalOptions={props.modalOptions} key={index} scoreColor={getColorByScore(elem.data.score)} postData={elem.data} />;
    });

    return <div className="postcard-container">{textCards}</div>;

}

export default TextCardCollection;