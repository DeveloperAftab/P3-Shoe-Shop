import React from 'react';
import {Link} from "react-router-dom";

export const ProductIndex = () => {

    const shoes = {
        "blake1" : {
          name : "blake Ribon",
          img : "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        },
        "blake2" : {
          name : "Racer",
          img : "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        },
      };

    return (
        <div>
            
            <ul>
                {Object.entries(shoes).map(([productID,{name,img}]) => 
                    (
                        <li key={productID}>
                            <Link to={productID}>
                                <h2>{name}</h2></Link>
                                <img src={img} alt={name} />
                            
                        </li>
                    )
                )}
            </ul>
            
        </div>
    )
}
