import React from 'react'
import '../Styles/Footer.css';
import footerLogo from '../Assets/footerLogo.svg'
import twitter from '../Assets/twitter1.svg';
import facebook from '../Assets/facebook1.svg';
import instagram from '../Assets/instagram1.svg';

const Footer = () => {
    const list1=[
        {title:'Contact',link:'/about'},
        {title:'About us',link:'/services'},
        {title:'Advertising Online',link:'/contact'},
        {title:'Sitemap',link:'/careers'},
       ]
const list2 = [
    {title:'Become a dealer',link:'/seller'},
    {title:'Sell a machine',link:'/sell'},
    {title:'Machine Wanted',link:'/machine'},
  
   ]

  return (
   <>
   <div className='footer-container' >
    <div className='footer-content'>
       <div className='footer-logo'>
        <img src={footerLogo} alt=''/>
        <h5>Lorem ipsum dolor</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>
       <div className='footer-component'>
        <div className='footer-link-content'>
               <h5>About Us</h5>
            <div className='footer-text'>
                <div className='footer-list'>
                {list1.map((list,index)=>{
                    return(
                        <a href={list.link} key={index}>{list.title}</a>
                    )
                })}
                </div>

            </div>
            
        </div>
        <div className='footer-link-content'>
            <h5>Users Area</h5>
            <div className='footer-text'>
                <div className='footer-list'>
                {list2.map((list,index)=>{
                    return(
                        <a href={list.link} key={index}>{list.title}</a>
                    )
                })}
                </div>

            </div>  
        </div>
        </div>
        {/* <div className='footer-link-content'>
            <h5>About Us</h5>
            <div className='footer-text'>
                <div className='footer-list'>
                {lsit1.map((list,index)=>{
                    return(
                        <a href={list.link} key={index}>{list.title}</a>
                    )
                })}
                </div>

            </div>
            
        </div> */}
        <div className='footer-link-content'>
            <div className='social-media'>
         <button className='media-button'>
            <img src={twitter} alt="" className='facebook' /></button>
         <button className='media-button'>
         <img src={instagram}  alt="" className='facebook' /></button>
         <button className='media-button'>
         <img src={facebook}  alt="" className='facebook' /></button>
         </div>           
        </div>
  
    </div>


</div>
   
   
   </>
  )
}

export default Footer