import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from "../../client";
import './Testimonial.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  const handleClick = (index) => {
    setcurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsquery = '*[_type == "brands"]';

    client.fetch(query)
    .then((data) => {
      setTestimonials(data);
    })

    client.fetch(brandsquery)
    .then((data) => {
      setBrands(data);
    })

  }, [])

  const testm = testimonials[currentIndex];
  return (
    <>
      { testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testm.imgurl)} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'> {testm.feedback} </p>
              <div>
                <h4 className='bold-text'>{testm.name}</h4>
                <h5 className='p-text'>{testm.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length -1 :currentIndex - 1 )}>
              <HiChevronLeft />
            </div>
            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 :currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        { brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
            <p className='bold-text app__flex'>{brand.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'), 
  'testimonials',
  'app__primarybg'
  );