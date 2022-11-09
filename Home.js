import React from "react";
import Comments from './udemychild'
import Card from './udemycard'
import img3 from './Images/udemy Course1.jfif';
import img4 from './Images/udemy course2.jfif';
import img5 from './Images/udemy course3.jfif';

const Home = () =>{
    return(
      <div className="background">
        <div style={{marginTop:'40px'}}>
            <div className='ui stackable four column grid'>
        <div className='column'>
          <Card name='C++ programming'>
            <Comments 
            text='Beginner to Advanced' 
            pic={img5} />
          </Card>
          </div>
           
          <div className='column'>
          <Card name='Python programming'>
            <Comments  
            text='Learn a beginner to advanced level of programming in python'
            pic={img4} />
          </Card>
          </div>
          
          <div className='column'>
          <Card name='Hacking course'>
            <Comments   
            text='Enroll the course to become a full fledged hacker'
            pic={img3} />
          </Card>
          </div> 

          <div className='column'>
          <Card name='C++ programming'>
            <Comments 
            text='Beginner to Advanced' 
            pic={img5} />
          </Card>
          </div>
          
        </div>
        </div>
        </div>
    )
}
export default Home