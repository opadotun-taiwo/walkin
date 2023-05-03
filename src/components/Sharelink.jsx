import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';

const ShareLink = () => {
  const shareUrl = 'http://127.0.0.1:5173/viewmore';
  const title = 'Get this deal with me!';

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnInstagram = () => {
    const instagramUrl = `https://instagram.com/sharer/sharer?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(instagramUrl, '_blank');
  };

  const shareOnWhatsapp = () => {
    const whatsappUrl = `https://whatsapp://send?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
        <p className='text-xl'>Share with a friend!</p>
    <div className='flex'>
        <BsFacebook className='text-purple-500 m-2 cursor-pointer' size={40} onClick={shareOnFacebook} />
        <BsTwitter className='text-purple-500 m-2 cursor-pointer' size={40} onClick={shareOnTwitter} />
        <BsInstagram className='text-purple-500 m-2 cursor-pointer' size={40} onClick={shareOnInstagram} />
        <BsWhatsapp className='text-purple-500 m-2 cursor-pointer' size={40} onClick={shareOnWhatsapp} />
      </div>
    </div>
  );
};

export default ShareLink;
