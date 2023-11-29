import SectionHelmet from "../../../Components/SectionHelmet";
import { GiMoneyStack } from "react-icons/gi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { Calendar } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const Balance = () => {
  const axiosSecure = useAxiosSecure();
  const [totalPayments, setTotalPayments] = useState(0);
  const [totalNewsLetters, setTotalNewLetters] =useState(0)
  useEffect(() => {
    axiosSecure.get("/payments").then((res) => {
      setTotalPayments(res.data.length);
    });
    axiosSecure.get("/newsLetters").then((res) => {
      setTotalNewLetters(res.data.length);
    });
  }, [axiosSecure]);
  const data = [
    { name: "Total NewsLetter", value: totalNewsLetters },
    { name: "PaidMembers", value: totalPayments },
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <SectionHelmet title={"Strong | Dashboard-Balance"} />
      <section className="mx-6 mt-3">
        {/* balance */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md p-10">
            <h3 className="text-3xl font-semibold text-gray-300 mb-3">
              Total Remaining Balance
            </h3>
            <h4 className="text-xl font-bold">BDT: 200000 $</h4>
          </div>
          <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md p-10">
            <h3 className="text-3xl font-semibold text-gray-300 mb-3">
              Total Payment
            </h3>
            <h4 className="text-2xl font-bold flex items-center gap-2">
              <GiMoneyStack /> {totalPayments}
            </h4>
          </div>
        </div>
        {/* chart */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
          <div className="w-full">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend/>
              <Tooltip/>
            </PieChart>
          </div>
          <div className="border p-3 rounded-md shadow-md">
            <Calendar date={new Date()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balance;
