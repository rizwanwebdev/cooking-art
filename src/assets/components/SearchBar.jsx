import { Search } from "lucide-react";

const SearchBar = ({ query, setQuery, handleSubmit }) => {
  return (
    <div className="max-w-2xl mx-auto mb-8 mt-2 flex justify-center items-center w-full ">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 bg-white rounded-full shadow-lg px-6 py-4 border-2 border-[hsl(20,5.9%,90%)]">
          <Search className="w-6 h-6 text-primary-text" />
          <input
            className="flex-1 outline-none bg-transparent text-primary-text"
            type="text"
            name="search"
            placeholder="Enter Recipe Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <button
            className="border-2 hover:bg-blue-500  transition border-blue-300 rounded text-white font-semibold p-2.5 cursor-pointer"
            type="submit"
          >
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
