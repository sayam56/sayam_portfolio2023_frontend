import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';
import { BsFillCloudDownloadFill } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://resume.aisayam.com/' target='_blank' rel="noreferrer"><BsFillCloudDownloadFill/></a> 
        </div>
        <div>
          <a href='https://github.com/sayam56' target='_blank' rel="noreferrer"><FaGithub/></a> 
        </div>
        <div>
          <a href='https://www.linkedin.com/in/ali-iktider-sayam/' target='_blank' rel="noreferrer"><FaLinkedinIn/></a> 
        </div>
        <div>
          <a href='https://www.facebook.com/aisayam/' target='_blank' rel="noreferrer"><FaFacebook/></a> 
        </div>
    </div>
  )
}

export default SocialMedia