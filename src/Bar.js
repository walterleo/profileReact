import React from "react";

function Bar(){
    return(
        <div className="right_side_bar"> 
      
      <div className="col_1">
        <h1>Main Menu</h1>
        <div className="box">
          <ul>
            <li><a href="#">Menu Item 1</a></li>
            <li><a href="#">Menu Item 2</a></li>
            <li><a href="#">Menu Item 3</a></li>
            <li><a href="#">Menu Item 4</a></li>
            <li><a href="#">Menu Item 5</a></li>
            <li><a href="#">Menu Item 6</a></li>
            <li><a href="#">Menu Item 7</a></li>
            <li><a href="#">Menu Item 8</a></li>
            <li><a href="#">Menu Item 9</a></li>
            <li><a href="#">Menu Item 10</a></li>
          </ul>
        </div>
      </div>
      
      <div className="col_1">
        <h1>Contact</h1>
        <div className="box">
          <p>luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et 
ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. </p>
        </div>
      </div>
      
    </div> 
    )
}

export default Bar;