import { BarChart, 
         Bar, 
         XAxis, 
         YAxis, 
         CartesianGrid, 
         Tooltip, 
         PieChart, 
         Pie, 
         Cell } from 'recharts';
function Dashboard({ chartData, statusDatas }) {
    return (
        <div>
        <BarChart width={500} height={300} data={chartData}>
            <XAxis dataKey="severity" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
        <PieChart width={400} height={300}>
            <Pie data={statusDatas} dataKey="value" nameKey="name" outerRadius={100}>
                {statusDatas.map((entry, index) => (
                    <Cell key={index} fill={['#3b82f6', '#a855f7', '#6b7280'][index]} />              
                    ))}
            </Pie>
            <Tooltip />
        </PieChart>
        </div>
    )
};

export default Dashboard;