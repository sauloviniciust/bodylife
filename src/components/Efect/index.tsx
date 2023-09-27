// import { useEffect, useState } from 'react';


// const Roll = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     // Check the scroll position
//     if (window.scrollY > 0) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
    
//   };}

//   export { Roll }