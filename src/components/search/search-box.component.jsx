import React from "react";
import "./search-box.component.css";

export const Search =({ placeholder , onChange}) => 
      (<input className="search"
       type='search' 
       placeholder={placeholder}
       onChange={onChange}
      />)
;
