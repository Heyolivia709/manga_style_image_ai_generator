const MangaStyleDropdown = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="style"
        className="block text-sm font-inter font-light text-gray-700 mb-2 tracking-[0.15em] uppercase"
      >
        Manga Style
      </label>

      <div className="relative">
        <select
          id="style"
          value={value}
          onChange={onChange}
          className="appearance-none w-full bg-white/70 backdrop-blur-md border border-gray-200 text-gray-800 font-inter font-light rounded-xl py-3 px-4 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300 transition-all duration-300"
        >
          <option value="anime">Anime</option>
          <option value="digital-art">Digital Art</option>
          <option value="comic-book">Comic Book</option>
        </select>

        {/* 自定义下拉箭头 */}
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default MangaStyleDropdown;