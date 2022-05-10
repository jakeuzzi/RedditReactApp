var Sentiment = require('sentiment');

const AnalyzeSentiment = (sentence) => {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);
    console.dir(result); 
    return result.comparative.toFixed(2);
}

export default AnalyzeSentiment;

