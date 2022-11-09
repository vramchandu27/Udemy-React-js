import React from 'react';

const Details = (props) => 
{
    return(
        <div className='ui comments'>
            <div className='comment'>

                    <img src={props.pic} alt='profile picture' width='260px' height='150px'/>
                
                {/* <div className='metadata'> */}
                    <div className='description'>{props.text}</div>
                {/* </div> */}
            </div>
        </div>
    )
}
export default Details
