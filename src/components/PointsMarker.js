
const PointsMarker = (props) => {
    return (
        <div className="points-marker-container">
            <div className="points-marker" style={{background: props.scoreColor}}>
                <svg viewBox="0 0 83 33" fill="white" style={{width: "100%"}}>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{props.points}</text>
                </svg>
            </div>
        </div>
    );
}

export default PointsMarker;