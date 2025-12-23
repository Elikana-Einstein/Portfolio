import React, { useEffect, useState } from 'react'

const Name = () => {
   const name =
  " am a Fullstack Developer, Software Engineer and also a Mechatronics Engineer";

const [iam, setIam] = useState("I");
const [typed, setTyped] = useState(true);

useEffect(() => {
  let interval;

  if (typed) {
    let i = 0;
    interval = setInterval(() => {
      setIam(prev => prev + name.charAt(i));
      i++;

      if (i >= name.length) {
        clearInterval(interval);
        setTimeout(() => setTyped(false), 1000); // pause before deleting
      }
    }, 100);
  } else {
    let i = name.length;
    interval = setInterval(() => {
      setIam(prev => prev.slice(0, -1));
      i--;

      if (i <= 0) {
        clearInterval(interval);
        setTimeout(() => setTyped(true), 500); // pause before typing again
      }
    }, 50);
  }

  return () => clearInterval(interval);
}, [typed, name]);


  return (
    <div className='z-10' >
    <div className='text-white text-5xl'>
        Hello My Name Is Elikana Mwangi
    </div>
    <div className='text-red-500 text-xl'>
       I {iam} <span className='text-white'>_</span>
    </div>
    </div>

  )
}

export default Name