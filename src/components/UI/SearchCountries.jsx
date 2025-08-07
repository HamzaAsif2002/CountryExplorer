export const SearchCountries = ({
  search,
  setSearch,
  filter,
  setFilter,
  data,
  setData,
}) => {
  const handleInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectOption = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };
  const sortCountries = (value) => {
    const sortCountry = [...data].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setData(sortCountry);
  };
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-stretch md:items-center justify-between p-4 mb-5 bg-white rounded-lg shadow">
      {/* Search Input */}
      <div className="flex-1 min-w-[220px]">
        <input
          type="text"
          value={search}
          placeholder="Search Country..."
          onChange={handleInput}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Sort Asc Button */}
      <div className="flex-shrink-0">
        <button
          onClick={() => sortCountries("asc")}
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          A → Z
        </button>
      </div>

      {/* Sort Desc Button */}
      <div className="flex-shrink-0">
        <button
          onClick={() => sortCountries("desc")}
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          Z → A
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="flex-shrink-0 min-w-[150px]">
        <select
          value={filter}
          onChange={handleSelectOption}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
