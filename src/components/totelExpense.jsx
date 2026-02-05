import React from "react";

const ShowTotalExpense = ({ expensese }) => {
  const totalExpense = expensese.reduce(
    (accum, elem) => accum + parseFloat(elem.amount || 0),
    0
  );

  return (
    <div className="max-w-md mx-auto my-6 px-2">
      <div className="relative overflow-hidden bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl shadow-emerald-900/20 group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -ml-12 -mb-12 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Total Expenditure
          </p>

          <div className="flex items-baseline gap-1">
            <span className="text-emerald-500 text-2xl font-bold">₹</span>
            <h1 className="text-5xl font-black text-white tracking-tight">
              {totalExpense.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </h1>
          </div>

          <div className="mt-6 w-full pt-6 border-t border-white/5 flex justify-between items-center">
            <div className="text-left">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                Status
              </p>
              <p className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Updated Live
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                Currency
              </p>
              <p className="text-xs text-white font-bold tracking-widest">
                INR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTotalExpense;
