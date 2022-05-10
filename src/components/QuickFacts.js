import QuickFact from "./QuickFact";

const QuickFacts = (props) => {
    const quickFactList = props.quickFacts.map((qfact, index) => {
        return <QuickFact key={index + 1} quickfact={qfact} />;
    });

    return (
        <div className="quickfacts-container">
            {quickFactList}
        </div>
    );
}

export default QuickFacts;