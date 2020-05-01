// Dependencies
import React from 'react';

// Styles
import './news-slider.css';

// Actual Component
const NewsSlider = () => {
    return (
        <section className='news-slider'>
            <div className='news-slider-pictures'>

                <div className='slides' >
                    <input type='radio' name='ns' id='ns1' defaultChecked/>
                    <input type='radio' name='ns' id='ns2' />
                    <input type='radio' name='ns' id='ns3' />
                    <input type='radio' name='ns' id='ns4' />

                    <div className='slide s1'>
                        <img src='https://i.pinimg.com/originals/7b/34/1c/7b341ce30f442716773f605a7c45c064.jpg' alt=''/>
                    </div>
                    <div className='slide s2'>
                        <img src='https://i.pinimg.com/originals/c2/ab/c2/c2abc2a1142e7d135b4a4e9c18b2228f.jpg' alt=''/>
                    </div>
                    <div className='slide s3'>
                        <img src='https://wallpapersite.com/images/pages/pic_w/16808.jpg' alt=''/>
                    </div>
                    <div className='slide s4'>
                        <img src='https://www.hdwallpapers.in/download/iron_man_hd_game-HD.jpg' alt=''/>
                    </div>
                </div>
            </div>
            <div className='news-slider-navigation'>
                <label htmlFor='ns1' className='ns-bar nsb1'></label>
                <label htmlFor='ns2' className='ns-bar nsb2'></label>
                <label htmlFor='ns3' className='ns-bar nsb3'></label>
                <label htmlFor='ns4' className='ns-bar nsb4'></label>

            </div>
        </section>
    )
}

export default NewsSlider;