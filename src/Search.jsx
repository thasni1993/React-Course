import React, { useState } from "react";
import "./Search.css";
import data from "./SearchData";
const Search = (data) => {
  let [searchParams, setSearchParams] = useState();
  console.log(data);
  const searchData = data.filter;
  return (
    <div className="section-search">
      <div className="search">
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {searchData.filter((data) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = data.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })}
      </div>
    </div>
  );
};
export default Search;
