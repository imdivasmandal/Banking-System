import React from 'react';
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Nav = (props) => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between  items-center text-2xl text-white-2xl text-white/50">
        <Link to={props.l1}
         activeClass='active'
         smooth={true}
         spy={true}
         offset={-200}
          className='hover:bg-blue-600 rounded-full hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiHomeAlt/>
        </Link>
        <Link 
        // to="action" 
        to={props.l2}
         activeClass='active'
         smooth={true}
         spy={true}
         className='hover:bg-blue-600 rounded-full hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsBriefcase/>
        </Link>
        <Link to={props.l3} 
         activeClass='active'
         smooth={true}
         spy={true}
         className='hover:bg-blue-600 rounded-full hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiUser
        className=''
        />
        </Link>
        
        <Link to={props.l4}
         activeClass='active'
         smooth={true}
         spy={true}
         className='hover:bg-blue-600 rounded-full hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsClipboardData/>
        </Link>
       
        <Link 
        // to="contact"
        to={props.l5}
        activeClass='active'
        smooth={true}
        spy={true}
        className='hover:bg-blue-600 rounded-full hover:text-white cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BsChatSquare/>
        </Link>
      </div>
    </div>
  </nav>
};

export default Nav;
