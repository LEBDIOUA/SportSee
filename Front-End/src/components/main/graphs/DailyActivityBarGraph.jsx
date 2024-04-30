import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DailyActivityBarGraph({ sessions }) {
    if (sessions) {
        let data = [];
        sessions.map((session, index) => {
            data.push({ day: session.day, poids: session.kilogram, calories: session.calories })
        });

        /* const minData = () => {
            let minVal = sessions[0].kilogram;
            sessions.map((session) => {
                session.kilogram < minVal ? minVal = session.kilogram : '';
                session.calories < minVal ? minVal = session.calories : '';
            });
            minVal = minVal / 2;
            if (minVal >= 10 && minVal <= 99) {
                return (Math.floor(minVal / 10) * 10);
            } else if (minVal >= 100 && minVal <= 999) {
                return (Math.floor(minVal / 100) * 100)
            } else {
                return minVal;
            }
        }
        */

        const maxData = () => {
            let maxVal = sessions[0].kilogram;
            sessions.map((session) => {
                session.kilogram > maxVal ? maxVal = session.kilogram : '';
                session.calories > maxVal ? maxVal = session.calories : '';
            });
            if (maxVal >= 10 && maxVal <= 99) {
                return (Math.ceil(maxVal / 10) * 10);
            } else if (maxVal >= 100 && maxVal <= 999) {
                return (Math.ceil(maxVal / 100) * 100)
            } else {
                return maxVal;
            }
        }

        const renderTooltip = ({ active, payload }) => {
            if (active && payload && payload.length > 0) {
                return (
                    <div className="barChart-tooltip">
                        <p>{payload[0].value}kg</p>
                        <p>{payload[1].value}Kcal</p>
                    </div>
                );
            }
        }

        const renderBarChart = (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 60 }} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
                    <Legend verticalAlign='top' align='right' layout="horizontal" height={25} width={277} />
                    <XAxis tick={{ dy: 10, fill: '#9B9EAC', fontSize: '14px' }} dataKey="day" tickLine={false} axisLine={false} />
                    <YAxis YAxisId="poids" tick={{ fill: '#9B9EAC', fontSize: '14px' }} tickMargin={30} tickCount={5} orientation='right' tickLine={false} axisLine={false} domain={[0, maxData]} />
                    {/* <YAxis YAxisId="poids" tick={{ fill: '#9B9EAC', fontSize: '14px' }} tickMargin={30} tickCount={5} orientation='right' tickLine={false} axisLine={false} domain={[minData, maxData + minData]} /> */}
                    <Tooltip content={renderTooltip} />
                    <Bar dataKey="poids" fill="#282D30" legendType='circle' barSize={7} name="Poids (Kg)" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" legendType='circle' barSize={7} name="Calories brulées (KCal)" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        )

        return (
            <article className='graph dailyActivityBarGraph'>
                <h3 className='titre'>Activité quotidienne</h3>
                {renderBarChart}
            </article>
        );
    }
    else {
        return (
            <article className='graph dailyActivityBarGraph error'>
                ERROR !!
            </article>
        );
    }

}
export default DailyActivityBarGraph;