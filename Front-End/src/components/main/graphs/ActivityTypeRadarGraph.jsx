import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

function ActivityTypeRadarGraph({ kinds }) {
    if (kinds) {
        const data = [];
        kinds.map(kind => {
            data.unshift({ id: kind.kind, title: kind.title, value: kind.value })
        })

        const minVal = data.reduce((val, kind) => {
            if (!val || kind.value < val) {
                return kind.value;
            } else {
                return val;
            }
        }, null);

        const maxVal = data.reduce((val, kind) => {
            if (!val || kind.value > val) {
                return kind.value;
            } else {
                return val;
            }
        }, null);
        const formatterTick = (value) => {
            const tick = (() => {
                switch (value) {
                    case 'intensity':
                        return 'Intensité';
                    case 'speed':
                        return 'Vitesse';
                    case 'strength':
                        return 'force';
                    case 'endurance':
                        return 'Endurance';
                    case 'energy':
                        return 'Energie';
                    default:
                        return 'Cardio';
                }
            })();
            return tick;
        }

        const renderRadarChart = (
            <ResponsiveContainer width={'100%'}>
                <RadarChart outerRadius={'78%'} data={data} margin={{ right: 25, left: 25 }}>
                    <PolarGrid stroke='white' radialLines={false} />
                    <PolarAngleAxis tick={{ fill: "white", fontSize: 'clamp(10px, 0.97vw, 14px)' }} tickFormatter={formatterTick} dataKey="title" />
                    <Radar name="value" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );

        return (
            <article className='graph activityTypeRadarGraph'>
                {renderRadarChart}
            </article>
        );
    }
    else {
        return <p>Error</p>
    }

}
export default ActivityTypeRadarGraph;