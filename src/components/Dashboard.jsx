import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Dashboard({ chartData }) {
    return (
        <BarChart width={500} height={300} data={chartData}>
            <XAxis dataKey="severity" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
    )
};

export default Dashboard;