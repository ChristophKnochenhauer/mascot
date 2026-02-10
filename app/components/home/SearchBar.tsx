export function SearchBar() {
  return (
    <div className="searchShell">
      <input
        className="searchInput"
        type="text"
        placeholder='Search for "Eigenvalues", "Analysis I", "Heat equation"…'
      />
    </div>
  );
}
