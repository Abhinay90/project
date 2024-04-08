import React from 'react';

function DashboardCard07() {
  const datas = [
    {
      source: {
        icon: ` `,
        name: "Github.com"
      },
      visitors: "2.4K",
      revenues: "$3,877",
      sales: "267",
      conversion: "4.7%"
    },
    {
      source: {
        icon: ` `,
        name: "Twitter"
      },
      visitors: "2.4K",
      revenues: "$3,877",
      sales: "267",
      conversion: "4.7%"
    },
    {
      source: {
        icon: ` `,
        name: "Github.com"
      },
      visitors: "2.4K",
      revenues: "$3,877",
      sales: "267",
      conversion: "4.7%"
    },
    {
      source: {
        icon: ``,
        name: "Github.com"
      },
      visitors: "2.4K",
      revenues: "$3,877",
      sales: "267",
      conversion: "4.7%"
    },
    {
      source: {
        icon: ` `,
        name: "Github.com"
      },
      visitors: "2.4K",
      revenues: "$3,877",
      sales: "267",
      conversion: "4.7%"
    }
  ]
  
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Channels</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {datas.map((data, i) =>
                <tr key={i}>
                  <td className="p-2">
                    <div className="flex items-center">
                      {data.source.icon}
                      <div className="text-slate-800 dark:text-slate-100">{data.source.name}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{data.visitors}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">{data.revenues}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{data.sales}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-sky-500">{data.conversion}</div>
                  </td>
                </tr>
              )}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
