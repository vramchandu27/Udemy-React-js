import React from 'react'

const Card = (props) =>
{
    return(
        <div className='ui card' style={{height:'300px', marginLeft:'16px'}}>
            <div className='content'>
                    <div className='header'>{props.name}</div>
                    <div className='description'>{props.children}</div><br/>
                    <div className='ui bottom button'>
                        Enroll 
                    </div>
            </div>
        </div>
    )
}
export default Card