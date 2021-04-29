import React,{useState} from 'react';
import people from './data';
import {FaQuoteRight,FaChevronRight,FaChevronLeft} from 'react-icons/fa'; 

const Review = () =>{
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = people[index];
    const prevPerson = ()=>{
        setIndex((index)=>{
        let newIndex = index - 1;
    return checkNumber(newIndex);
    });
}
const checkNumber = (number) =>{
    if(number > people.length -1)
    {
        return 0;
    }
    if(number < 0)
    {
        return people.length -1;
    }
    return number;
}
const nextPerson =() =>{
    setIndex((index)=>{
        let newIndex = index+1;
        return checkNumber(newIndex);
    });
}
const randomNumber = () =>{
    let randomNum = Math.floor(Math.random() * people.length);
    console.log(randomNum);
    if(randomNum === index)
    {
        randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum));
}
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
                <div className="person-info">
                    <h3 className='author'>{name}</h3>
                    <h4 className='job'>{job}</h4>
                    <p className='info'>{text}</p>
                </div>
                <div className="button-container">
                    <button onClick={prevPerson} className='prev-btn'>
                        <FaChevronLeft/>
                    </button>
                    <button onClick={nextPerson} className='next-btn'>
                        <FaChevronRight/>
                    </button>
                </div>  
                    <button className='random-btn' onClick={randomNumber}>
                        surprise Me
                    </button>       
        </article>

    );
}

export default Review;
