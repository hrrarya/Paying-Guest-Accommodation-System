import React from "react";
import Button from "./button";

const Search = () => {
  return (
    <div id="search">
      <div className="row">
        <div className="col-md-12">
          <form action="" className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control mr-3"
                placeholder="Search here..."
              />
            </div>
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
