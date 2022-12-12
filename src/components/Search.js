const Search = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="input-container">
      <h1>😎 Emoji Search 😎</h1>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="What emoji are you looking for?"
      />
    </div>
  );
};
export default Search;
