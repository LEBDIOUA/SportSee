import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

function ScoreRadialGraph({ score }) {
    if (score) {
        const data = [];
        data.push({ value: score, fill: '#E60000' });

        const renderRadialBarChart = (

            <RadialBarChart width={164} height={164} data={data} barSize={10} innerRadius="100%" outerRadius="100%" startAngle={90} endAngle={450} >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar fill="fill" dataKey="value" cornerRadius={100} innerRadius="90%" outerRadius="100%" />
                <circle cx="50%" cy="50%" fill="white" r="43.5%" />
            </RadialBarChart>
        );

        return (
            <article className='graph scoreRadialGraph' >
                <h3 className='titre'>Score</h3>
                <div id="label">
                    <p id="score">{score}%</p>
                    <p id='texte'>de votre objectif</p>
                </div>
                {renderRadialBarChart}
            </article>
        );
    }
    else {
        return <p>Error</p>
    }

}
export default ScoreRadialGraph;