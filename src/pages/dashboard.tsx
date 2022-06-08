import dynamic from "next/dynamic";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { Header, Sidebar } from "../components/Organisms";

const { theme } = resolveConfig(tailwindConfig);

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-06-01T00:00:00.000Z",
        "2022-05-31T00:00:00.000Z",
        "2022-05-30T00:00:00.000Z",
        "2022-05-29T00:00:00.000Z",
        "2022-05-28T00:00:00.000Z",
        "2022-05-27T00:00:00.000Z",
        "2022-05-26T00:00:00.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [
    {
      name: "series1",
      data: [31, 120, 10, 28, 51, 18, 109],
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex w-full my-6 max-w-1480 mx-auto px-6">
        <Sidebar />

        <div className="grid grid-cols-min-child-320 flex-1 gap-4 items-start">
          <div className="p-8 bg-gray-800 rounded-md pb-4">
            <p className="text-lg mb-4">Inscritos da semana</p>
            <ApexCharts
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </div>

          <div className="p-8 bg-gray-800 rounded-md pb-4">
            <p className="text-lg mb-4">Taxa de abertura</p>
            <ApexCharts
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
