// here is my imports 
// I used this component inside of the AgainProject component
import Herat from'../images/Herat.PNG';
import NumberGuessing from '../images/number_gusing.PNG';
import PigGame from '../images/pigGame.PNG';
import Dove from '../images/dove.PNG';
import Course from '../images/course.PNG';
import Programmer from '../images/Programmer.PNG';
import DremTravel from '../images/Drem Travel.PNG';
import BitDog from '../images/BitDog.PNG';
import Expenses from '../images/Expenses.PNG';
import TimmerChallenge from '../images/TimmerChallenge.PNG';
import ShoppingItem from '../images/Shopping-item.PNG';
import Cv from '../images/Cv.PNG';

import StarRating from './StarRating';
 const ProjectData=[
  {
    id:1,
    projectImage:Course,
    projectName:'Course',
    catagory:'bootstrap',
    catagory1:'all',
    details:'This is a Full responsive course web site with different sections I worked this project by html,css & bootstrap',
    projectLink:'https://nazilaf2002.github.io/Course/',
    rating:<StarRating/>
  },
  {
    id:2,
    projectImage:TimmerChallenge,
    projectName:'Timer challenge',
    catagory:'reactjs',
    catagory1:'all',
    details:'This is a timer challenge game if you  guess the correct expired time and stop the timer you will win made by react js ',
    projectLink:'https://timer-challenge-theta.vercel.app/',
     rating:<StarRating/>
  } ,
  {
    id:3,
    projectImage:PigGame,
    projectName:'Pig game',
    catagory:'javascript',
    catagory1:'all',
    details:'This is a game project like dice Game and has the same rules  made by html css and javaScript',
    projectLink:'https://nazilaf2002.github.io/Pig-Game/',
    rating:<StarRating/>
  },
  {
      id:4,
      projectImage:Herat,
      projectName:'Herat',
      catagory:'css',
      catagory1:'all',
      details:'This is an informational website about Herat Province just for large screens made by html & css',
      projectLink:'http://herat.artaafghan.com/index.html',
      rating:<StarRating/>
    },
    

    {
      id:5,
      projectImage:DremTravel,
      projectName:'Dream Travel',
      catagory:'reactjs',
      catagory1:'all',
      details:'this website give information  about places for users with different languages this is a team work useing reactjs',
      projectLink:'https://drem-travel.vercel.app/',
      rating:<StarRating/>
    } ,

    {
      id:6,
      projectImage:Expenses,
      projectName:'Expenses',
      catagory:'reactjs',
      catagory1:'all',
      details:' You can see  expenses according to the selected year also you can add expense useing reactjs',
      projectLink:'https://expenses-ten-tau.vercel.app/',
      rating:<StarRating/>
    },
    {
      id:7,
      projectImage:NumberGuessing,
      projectName:'Guess Number',
      catagory:'javascript',
      catagory1:'all',
      details:'This is a challengabel game you should guess the numbers between 1-20 made by html css & javascript',
      projectLink:'https://nazilaf2002.github.io/Number-Guessing/',
      rating:<StarRating/>
    },
    {
      id:8,
      projectImage:BitDog,
      projectName:'Bit Dog',
      catagory:'bootstrap',
      catagory1:'all',
      details:' Meet new and interesting dogs nearby is a full responsive project about dogs made by bootstrap',
      projectLink:'https://nazilaf2002.github.io/BitDog/',
      rating:<StarRating/>
    },
   
    {
      id:9,
      projectImage:ShoppingItem,
      projectName:'Shopping-item',
      catagory:'reactjs',
      catagory1:'all',
      details:'whith this project you can add some items  and delet them  by just click on them useing react js',
      projectLink:'https://shopping-item.vercel.app/',
      rating:<StarRating/>
    },
    
    {
      id:10,
      projectImage:Dove,
      projectName:'Dove',
      catagory:'bootstrap',
      catagory1:'all',
      details:'This is a full responsive wesite with Dari laguage worked for more learning and paractice bootstrap',
      projectLink:'https://nazilaf2002.github.io/Dove_Project/',
      rating:<StarRating/>
    },
    {
      id:11,
      projectImage:Programmer,
      projectName:'Programmer',
      catagory:'css',
      catagory1:'all',
      details:'This is a web page  can be used as the portfolio made it for practic more html and css',
      projectLink:'https://nazilaf2002.github.io/Programmer/',
      rating:<StarRating/>
    },
    
    {
      id:12,
      projectImage:Cv,
      projectName:'Cv',
      catagory:'html',
      catagory1:'all',
      details:'This is a web page that  can be used as our cv worked for more practi html',
      projectLink:'https://nazilaf2002.github.io/cv-with-html/',
      rating:<StarRating/>
    },
   
];

export default ProjectData;