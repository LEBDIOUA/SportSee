import DailyActivityBarGraph from "./graphs/DailyActivityBarGraph";
import AverageSessionDurationLineGraph from "./graphs/AverageSessionDurationLineGraph";
import ActivityTypeRadarGraph from "./graphs/ActivityTypeRadarGraph";
import ScoreRadialGraph from "./graphs/ScoreRadialGraph";

function Graphs({ user }) {
    return (
        <div className="graphs">
            <DailyActivityBarGraph sessions={user.sessions} />
            <AverageSessionDurationLineGraph sessions={user.sessions} />
            <ActivityTypeRadarGraph kinds={user.kinds} />
            <ScoreRadialGraph score={user.score} />
        </div>
    );
}
export default Graphs;