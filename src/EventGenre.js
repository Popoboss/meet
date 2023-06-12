import React, { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,

} from "recharts";

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const colors = ["#6867BE", "#A46748", "#008452", "#A95473", "#0064AF"];


    useEffect(() => {
        setData(getData());
        // eslint-disable-next-line 
    }, [events]);

    function getData() {
        const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

        const data = genres.map((genre, index) => {
            const value = events.filter(({ summary }) =>
                summary.split(" ").includes(genre)
            ).length;

            return { name: genre, value, fill: colors[index] };
        });

        return data;
    }

    return (
        <ResponsiveContainer height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    labelLine={false}
                    outerRadius={80}
                    label={({ percent }) => `${(percent * 100).toFixed(0)} %`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenre;