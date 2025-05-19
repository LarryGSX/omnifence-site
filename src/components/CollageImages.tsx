import React from 'react';

const collage = [
  { src: '/Hero_Image_1.jpg',  top: '-30px', left: '8%',   w: 260, rotate: 4, hideMobile: false },
  { src: '/Hero_Image_2.jpeg', top: '40px',  left: '60%',  w: 210, rotate: -5, hideMobile: false },
  { src: '/Hero_Image_3.jpg',  top: '120px', left: '20%',  w: 180, rotate: 6, hideMobile: false },
  { src: '/Hero_Image_4.jpg',  top: '200px', left: '70%',  w: 240, rotate: 3, hideMobile: false },
  { src: '/Hero_Image_5.jpg',  top: '320px', left: '10%',  w: 200, rotate: -4, hideMobile: false },
  { src: '/Hero_Image_6.jpg',  top: '400px', left: '55%',  w: 170, rotate: 5, hideMobile: true },
  { src: '/Hero_Image_7.jpeg', top: '60px',  left: '80%',  w: 150, rotate: -6, hideMobile: true },
  { src: '/Hero_Image_8.jpeg', top: '300px', left: '80%',  w: 130, rotate: 7, hideMobile: true },
  { src: '/Hero_Image_9.jpeg', top: '500px', left: '30%',  w: 220, rotate: -3, hideMobile: false },
  { src: '/Hero_Image_10.jpg', top: '180px', left: '40%',  w: 180, rotate: 5, hideMobile: false },
  { src: '/Hero_Image_11.jpg', top: '380px', left: '75%',  w: 250, rotate: -4, hideMobile: false },
  { src: '/Hero_Image_12.jpg', top: '520px', left: '60%',  w: 140, rotate: 6, hideMobile: true },
];

const CollageImages = () => (
  <div className="absolute inset-0 pointer-events-none z-10">
    {collage.map((img, i) => (
      <img
        key={img.src}
        src={img.src}
        alt=""
        style={{
          position: 'absolute',
          top: img.top,
          left: img.left,
          width: img.w,
          borderRadius: 12,
          boxShadow: '0 6px 24px 0 rgba(0,0,0,0.13)',
          transform: `rotate(${img.rotate}deg)`,
          zIndex: 10 + i,
        }}
        className={`
          transition-all duration-300
          ${img.hideMobile ? 'hidden sm:block' : ''}
          md:w-[${img.w}px] w-[${Math.round(img.w * 0.7)}px]
        `}
        draggable={false}
      />
    ))}
  </div>
);

export default CollageImages; 