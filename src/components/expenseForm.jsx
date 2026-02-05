const ExpenseForm = (props) => {
  let { expenseLabel, setLabel, expenseAmmount, setExpense, addExpense } =
    props;

  return (
    <div className="max-w-md mx-auto mb-10">
      <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">New Transaction</h2>
          <p className="text-xs text-gray-400 mt-1">
            Keep track of your daily spending
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
              <i className="fa-solid fa-pen-nib text-sm" />
            </span>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-700 placeholder:text-gray-400"
              placeholder="What did you buy?"
              value={expenseLabel}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors font-bold">
              ₹
            </span>
            <input
              type="number"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-gray-700 font-medium"
              placeholder="0.00"
              value={expenseAmmount}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>

          <button
            onClick={addExpense}
            className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 hover:shadow-emerald-200 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
          >
            <i className="fa-solid fa-plus text-xs"></i>
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
