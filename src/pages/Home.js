import { Button, Container } from '@mui/material'
import { borderColor } from '@mui/system'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Banner from '../Images/logo.png'

import '../Styles/HomeStyles.css'
const Home = () => {
  return (
    <>
    <Layout>
      <div className='home'
      // style={{backgroundImage:`url(${Banner})` }}
       >
        <div className='header-container'>
          <div className='homeKid'>
          <Container maxWidth="md"  style={{
      textAlign:'justify',
       border:'2px solid #(4, 84, 84)',
       borderRadius:'20px',
      
       }
       
       }>
            <p>
            As a stay at home parent, searching for free urdu worksheets for homeschoolig my kids was a difficult task.
While i did not have to work at all to teach maths and english, but teaching urdu was not only hard but close to impossible.
Lack of interesting quality apps, variety of videos and colorful urdu worksheets made the experience of "learning URDU all too BORING", as my son would often claim.
and as much as i would hate too agree , the truth is that urdu seems to be boring for preschoolars or homeschooling kids.
Having a basic knowledge of computer and belonging to a family of software engineers, I decided to change that.
It is a first step in the direction of creating amazing and interesting Urdu material while many more will
follow. ( inshahallah).
all the material on this website is original and FREE.
You can also get it in Hard form/ paper form/printed worksheets through our shop. the prices there barely cover the cost.
 you can compare the charges with the charges of the printing shops in the market.
Subscribe to our social media channels to get updates/ promotions/ freestuff and manymore.
I hope that you will not only take advantage of this website by yourself but will also recomend it to others.
Any and every kind of suggestion is welcome.
You can contact us at ........................
            </p>
            <p>
          اردو بورنگ ہے۔
یہ جملہ بچوں کے ابتدائی سالوں میں ہم سب نے سنا ہوگا۔
بچے انگلش اور میتھس تو بخوشی کر لیتے ہیں لیکن یہی بہت ذہین بچے اردو سیکھنے سے بھاگتے ہیں۔
ان بھاگنے والے بچوں کو روکنے کے لیے
یہ ورک شیٹس تیار کی گئی ہیں۔
اردو کی بورنگ  (سنجیدگی ) اور خشکی کو رنگوں اور ایکٹویٹیز کے ساتھ دلچسپی اور فن میں تبدیل کرنے کی کوشش کی گئی ہے۔
ایک اور بات ۔۔۔بچے کو ورک شیٹس کرتے ہوئے اور کرواتے ہوئے کریٹو آزادی دیں۔
اگر آپکا بچہ آ کی جگہ ب پڑھنا یا سیکھنا چاہتا ہے تو اسے ب ہی سکھائیے۔
اگر وہ الف کی جگہ پھول بناتا ہے تو بنانے دیں۔ اس پر 
اردو کو بوجھ مت بنائیں۔
ہر طرح کا میٹیریل فری ہے۔
پیپر فارم میں، پرنٹڈ ورک شیٹس بھی دستیاب ہیں۔
یو ٹیوب چینل پر اردو کی ویڈیوز بھی موجود ہیں۔
            </p>
         
          
        
          
          <div className='detail1'>
          <button >More</button>
         
          <img src={Banner} alt=""/></div>

          </Container>
          
          </div>
      

         
        
        <div className='hroof'>
     
        {/* <ul>
          <li>
            <Link><p>haroof e tahaji with pictures</p> </Link>
          </li>
          <li>
            <Link><p>haroof e tahaji Writing</p> </Link>
          </li>
          <li>
            <Link><p>haroof e tahaji matching</p> </Link>
          </li>
        </ul>
          {/* <Link>
            
           <p1> حروفِ تہجی تصاویر کے ساتھ</p1> </Link> */}
          
          
     
      
    </div>
    </div>
        
      </div>
      
    </Layout>
    
   
    </>
  )
}

export default Home