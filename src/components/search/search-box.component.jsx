import React from "react";
import "./search-box.component.css";

export const Search =({ placeholder , onChange}) => 
      (<input className="search"
       type='search' 
       placeholder={placeholder}
       onChange={onChange}
      />)
;
git remote add origin https://github.com/experiencei/Rolodex.git
git branch -M main
git push -u origin main