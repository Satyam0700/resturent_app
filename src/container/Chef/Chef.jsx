import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's World"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia voluptate</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, omnis ex, voluptate laudantium ullam excepturi cum molestiae magnam sit dolor, quae sapiente? Consequatur debitis quidem eos! Dolorum eligendi eaque reprehenderit.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
