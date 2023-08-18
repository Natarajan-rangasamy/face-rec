import React from "react";

function Desc ({name, entries}){
    return(
        <div className="tc ma0 white">
            <p className="ma0 pa0">
                {
                    `Hey, ${name} nice to see you back`
                }
                
            </p>
            <p className="ma0 pa0">
                {
                `and your current rank is # ${entries} :)`
                }
             
            </p>
        </div>
    )
}

export default Desc;