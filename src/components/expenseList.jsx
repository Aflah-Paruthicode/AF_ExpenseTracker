import React from "react";

const ListExpense = ({ expensese }) => {
  return (
    <div className="max-w-md mx-auto mt-8 font-poppins">
      <div className="flex items-center justify-between mb-6 px-2">
        <h2 className="text-xl font-bold text-gray-800">History</h2>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
          {expensese.length} Transactions
        </span>
      </div>

      <div className="space-y-3">
        {expensese.length > 0 ? (
          expensese.map((elem, index) => (
            <div
              key={elem.id || index}
              className="group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                  <i className="fa-solid fa-receipt text-lg" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 capitalize leading-tight">
                    {elem.label}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-tighter">
                    Transaction ID: #{elem.id}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-black text-gray-900">
                  ₹{Number(elem.amount).toLocaleString("en-IN")}
                </p>
                <p className="text-[10px] text-emerald-500 font-bold uppercase">
                  Processed
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <i className="fa-solid fa-wallet text-3xl text-gray-200 mb-3" />
            <p className="text-gray-400 text-sm italic">
              No expenses recorded yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListExpense;
