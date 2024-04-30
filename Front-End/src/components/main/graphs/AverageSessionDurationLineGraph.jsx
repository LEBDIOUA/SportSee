import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function AverageSessionDurationLineGraph({ sessions }) {
    if (sessions) {
        const dayLetter = (number) => {
            switch (number) {
                case 1: return 'L';
                case 2: return 'M';
                case 3: return 'M';
                case 4: return 'J';
                case 5: return 'V';
                case 6: return 'S';
                case 7: return 'D';
                default: return 'error';
            }
        }

        // { name: ' ', uv: sessions[0].sessionLength/2}
        let data = [];
        sessions.map(session => {
            data.push({ name: dayLetter(session.day), uv: session.sessionLength })
        });
        // data.push({ name: ' ', uv: sessions[sessions.length-1].sessionLength});

        const renderTooltip = ({ active, payload }) => {
            if (active && payload && payload.length > 0) {
                return (
                    <div className="lineChart-tooltip">
                        <p>{payload[0].value} min</p>
                    </div>
                );
            }
        }

        const renderLineChart = (
            <ResponsiveContainer width={'100%'}>
                <LineChart data={data} margin={{ top: 60 }} >
                    <defs>
                        <linearGradient id="lineGradient" x1="1" y1="1" x2="0" y2="0">
                            <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
                            <stop offset="95%" stopColor="#FFFFFF67" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="uv" stroke={"url(#lineGradient)"} strokeWidth={2} dot={false} />
                    <XAxis dataKey="name" tick={{ fill: "white", fontSize: '14px' }} tickLine={false} textAnchor={'end'} axisLine={false} dy={10} dx={5} interval="preserveStartEnd" />
                    <Tooltip content={renderTooltip} />
                </LineChart>
            </ResponsiveContainer>
        );

        return (
            <article className='graph averageSessionDurationLineGraph'>
                <h3 className='titre'>Durée moyenne des sessions</h3>
                {renderLineChart}
            </article>
        );
    }
    else {
        return (
            <article className='graph averageSessionDurationLineGraph error'>
                ERROR !!
            </article>
        );
    }

}
export default AverageSessionDurationLineGraph;