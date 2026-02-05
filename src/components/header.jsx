const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 mb-8">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <img
              src="https://www.shutterstock.com/image-vector/letter-af-fa-logo-monogram-600nw-2473808639.jpg"
              alt="AF Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              AF <span className="text-emerald-600">Tracker</span>
            </h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
              Personal Finance
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase font-bold">Today</p>
            <p className="text-sm font-bold text-gray-700">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-100" />
          <button className="bg-emerald-50 text-emerald-600 p-2 rounded-full hover:bg-emerald-100 transition-colors">
            <i className="fa-solid fa-plus text-sm" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;