import React from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {

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

      const {productID} = useParams();
      const product = shoes[productID];
      const {name, img} = product;

    return (
        <div>
          <h4>{name}</h4>
          <img src={img} alt={name} />
            
        </div>
    )
}
