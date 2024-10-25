"use client";
// import { useRef } from "react";

// const PartnerSection = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (direction === "left") {
//       scrollRef.current.scrollLeft -= 300;
//     } else {
//       scrollRef.current.scrollLeft += 300;
//     }
//   };

//   return (
//     <section className="bg-white py-8 px-4 lg:px-16">
//       <div className="text-center mb-8">
//         <h3 className="text-2xl font-semibold text-gray-800">
//           Meet the People
//         </h3>
//         <h2 className="text-4xl font-bold text-gray-900">
//           <span className="text-indigo-600">We are Working With</span>
//         </h2>
//       </div>

//       <div className="relative">
//         {/* Scrollable logos */}
//         <div
//           ref={scrollRef}
//           className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-4"
//         >
//           <img
//             src="https://s3-alpha-sig.figma.com/img/11e3/f271/29a992c0d8acb8329d614fa6e0bd7988?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5vi8EiIobbwsFp1A~gVL7izgGgsn-4lf2muE~IgiUdFQ-ghWGF4leqkkhMa2eihvbZA9DIdqm~feGUvHKtkWdSKC0qF2iNZTrFHg2a2xAyyCoQSb97ISlCRDoLt0VhLCsZszVn5cQYJBX1W8yJbCqEuiuZ2Pxh75iGjxDX3cnEMTxHNo2hpEaEFygpmp7nrtZKI6kjPg2Nv1ENKN0QSh6udS4slECUhbmtxxZz6YXx597XNll30dGcgpFIhG9VuyPo-709rMbIVJQONEDjo1RQ~VVNwaWuXvL16kGN4axlSJdN4jYJAQaqfb1cFWQDx5EJL51NiKZe6apldf1iCEg__"
//             alt="Logo 1"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/1034/d6da/de6515e884009abd0d5fa05fd6b94f99?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJ~i3vE17X873fQuaiqUWCJUxqPsTvY-Pbf-eYd-xqFuQJ2iCVS~MkKSm8V1OtCOH0Eo~ht50LlES2bUAg3Xiezt06y02Kktq7DcK0KhT2pNWcm2AnaDz3WNZlpulmKEw5HDm8pPcLlj-w7sye8Hk3yDxc5jUoOw94tEAr-WaSl-SeJod8r3duM2Ynl8-X0TV9pSb36wHtX5qVcxn7pTzDpNOVI6iSI6mkh1-tLUgdLHzg2FCNHbYPfJFwosPsXxzAeuFSNLFcys5E8fXR0DXOeyvxFooiQGp7jAcrXBIpcucKxMcrJPr1E2Sm6XFt-c6rO0PtsJBrMrsGbM0BrHhg__"
//             alt="Logo 2"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/fefe/1f8d/2a476bfb9bc87208c2ef73e3850ac856?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJoh80Ej1ZY8lYoN6H~Th34VcvJws8P6bKM4qnO5ODfUHqf~0TCVFiRqPAk6Em3plkaid1B1l9HVeklfiATwqy1V8SjsG88LVwxe-uKA5V00r0cQyaciGYCwrs0EwKWVhjPDKZ27SC9KAV6Z8P7zY97AxrQJj5n4qYSmxoxlx0RYfZI4hKVf3bYUxWJbyP47-dK7BH~wX1g6-F51upL8bEDpLncJJTO6qT--fa0vf65hpl2emyVR~JS0ZfZJi-uilCyq5AeminTxZ5vainLQf7ohyFHOYt~M22j4w7vp4XaS~nkpu6LY1FtI9vtEJdkZ0Wr2-j8VueYo8EHX61lH0A__"
//             alt="Logo 3"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/2fc1/a4d0/238a8b54cd072be0f937c13c9a1c20d1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIIHLHgMkTetHQkA4DWgpr42lmFdv6w4St6yW9IQED6oelwDhZTmqMk1wiQj1eSYl-YTf2YHF9FUD2IS46iJV5dMedyBmJeZB9VKLzVXW62Oj0GlBhSD9W9xQJaDi6cEnLwVsA93EQob1DQM1CxFyM37FKFnvQwVBORlxJDR8hDiPgdxGZhpdrh0mqEZ-rOl49xeLrbVUpYRb4XAv1WJueX~BED12-9t06qlsVfDh5Kn9CKsdUOme7kNC0C4CzXu3VILOdKF-bRpWO6Qfo--oPcJgezlhfqwYAN9YCu9rDjzs7r7iss6febHW~DmSM-Vzl7Y7noNxxkPdlgJFhoL2g__"
//             alt="Logo 4"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/692c/3ae7/07f825d98efa71a2efce3da27a5bb7d4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsMw3gPfNWrk4pGXvkERad2ShHUXzY8dDlkrUQQ4Hgu~oPS6kAJ3nT8VCNw-MHCwr1c~YYKdmlGwwPmoVSA3WtUaw0tWW9ABT3FNmd1tGhxERZUtG2JeVtd0z0-Vhu9tLhz-PCP9rU848GFK2A-1FZBPl1g6l8Vsl7YVROcPGjb7gSisdltEmb3fPlwJt-8nZZnxL5Hv-EyiwuzE34MuEWlPJkd-cIuc2PCIOpw9SKzrqA3O~UMkLTqTMgmTJI-HoYtFoMkbym19mUev~lcnr0ll8RswV2tRWdcGhJnQmehepSDTA3R3VapQ4twFiOlx83JffjoXOTckQaqzT8SjcQ__"
//             alt="Logo 5"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/e878/bf73/590ea1b40036fcefbbaa5c70845de2a5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RC8jGP4VFQ1NXUVCt2DVLx4G~Ot9r5nQ5qyxTDh6zfiWfppIjZBqq4QSvyPmgTOhFKBXrIGWRtixT3iri-NZrRa9HUrqXRHKE4qnrPG13pryxIH9tvMvdg80pTfOxcrkay-3H3xlUyU37WvH7eZoChiYiBhuCUwAWkfAXaH-JqTGkXmwm9MOz0--r2D08ioSS2r37kXwZNuCwlDQ57az82TnxWlGJA-J66unSKabVgWIOvRfgwvTwCdSM8mFT1y31HJGMrivsMXu1e~IC8lcarf3ykVhYOi39JkcSW5e8wEGyXQ4NOhI5JzQYYx1sRbbRhPQGsELYe2h7Fts2zejCQ__"
//             alt="Logo 6"
//             className="h-16 object-contain"
//           />
//           <img
//             src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
//             alt="Logo 7"
//             className="h-16 object-contain"
//           />
//         </div>

//         {/* Navigation Buttons */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
//           <button
//             onClick={() => scroll("left")}
//             className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
//           <button
//             onClick={() => scroll("right")}
//             className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerSection;

import { useRef, useEffect } from "react";

const PartnerSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've scrolled to the end, reset to the start smoothly
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    // Auto-scroll every 3 seconds
    const interval = setInterval(scroll, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="bg-white py-12 px-4 lg:px-16 relative">
      {/* Section Text */}
      <div className="text-center mb-8">
        <h3 className="text-lg lg:text-2xl font-medium text-gray-800">
          Meet the People
        </h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          <span className="text-indigo-600">We are Working With</span>
        </h2>
      </div>

      {/* Scrollable logos */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center justify-center space-x-8 overflow-x-auto scrollbar-hide py-4 lg:py-6 bg-gray-100 rounded-lg shadow-lg"
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/e878/bf73/590ea1b40036fcefbbaa5c70845de2a5?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RC8jGP4VFQ1NXUVCt2DVLx4G~Ot9r5nQ5qyxTDh6zfiWfppIjZBqq4QSvyPmgTOhFKBXrIGWRtixT3iri-NZrRa9HUrqXRHKE4qnrPG13pryxIH9tvMvdg80pTfOxcrkay-3H3xlUyU37WvH7eZoChiYiBhuCUwAWkfAXaH-JqTGkXmwm9MOz0--r2D08ioSS2r37kXwZNuCwlDQ57az82TnxWlGJA-J66unSKabVgWIOvRfgwvTwCdSM8mFT1y31HJGMrivsMXu1e~IC8lcarf3ykVhYOi39JkcSW5e8wEGyXQ4NOhI5JzQYYx1sRbbRhPQGsELYe2h7Fts2zejCQ__"
            alt="Logo 2"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/692c/3ae7/07f825d98efa71a2efce3da27a5bb7d4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsMw3gPfNWrk4pGXvkERad2ShHUXzY8dDlkrUQQ4Hgu~oPS6kAJ3nT8VCNw-MHCwr1c~YYKdmlGwwPmoVSA3WtUaw0tWW9ABT3FNmd1tGhxERZUtG2JeVtd0z0-Vhu9tLhz-PCP9rU848GFK2A-1FZBPl1g6l8Vsl7YVROcPGjb7gSisdltEmb3fPlwJt-8nZZnxL5Hv-EyiwuzE34MuEWlPJkd-cIuc2PCIOpw9SKzrqA3O~UMkLTqTMgmTJI-HoYtFoMkbym19mUev~lcnr0ll8RswV2tRWdcGhJnQmehepSDTA3R3VapQ4twFiOlx83JffjoXOTckQaqzT8SjcQ__"
            alt="Logo 3"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2fc1/a4d0/238a8b54cd072be0f937c13c9a1c20d1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIIHLHgMkTetHQkA4DWgpr42lmFdv6w4St6yW9IQED6oelwDhZTmqMk1wiQj1eSYl-YTf2YHF9FUD2IS46iJV5dMedyBmJeZB9VKLzVXW62Oj0GlBhSD9W9xQJaDi6cEnLwVsA93EQob1DQM1CxFyM37FKFnvQwVBORlxJDR8hDiPgdxGZhpdrh0mqEZ-rOl49xeLrbVUpYRb4XAv1WJueX~BED12-9t06qlsVfDh5Kn9CKsdUOme7kNC0C4CzXu3VILOdKF-bRpWO6Qfo--oPcJgezlhfqwYAN9YCu9rDjzs7r7iss6febHW~DmSM-Vzl7Y7noNxxkPdlgJFhoL2g__"
            alt="Logo 4"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />

          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/1567/6730/37c0d13adde8d39518de9cd7efe59c10?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isVDr2JNmhxuueFnz-71tedysPg0CjLBY6xdJRsZIcmt8xoRKUFjOVF~1OBd7Ep4tgC2OF65WBnmi2cgUGJeGarHDPR139uGCO64M7f8dT3fxIgGy1aYoysb0by~yi-psmximIp3SXxgcm8ocQLpuEPo3SpzxpTew84TaRh9zWPoetDlDFme65rPLnrWKRMYSGQbJ-8g7W4Dt7xdXUFy1TRlFGEp95L8K~068tDKowD3krjJ1u5tT0wAdXCdzzIU5IaCExlMqP4UEciCqR9EssTL7nE2GOTtjF75pe5ez6GOdueyt-bF~yeWRR8KCiSikletrE7pC87lf3OFyd4J4g__"
            alt="Logo 1"
            className="h-16 object-contain"
          />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
