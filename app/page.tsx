import Image from "next/image";
import Header from "./components/header";
import React from "react";

export default function Home () {
  return (
    <div className='h-screen'> 
    <Header/>
    <section className='flex h-[198px]'>
      <section className='w-1/2 flex-1 flex-col items-start m-12'>
      <h1 className='text-[40px] w-[496px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE    </h1> 
        <section> 
          <p className='h-[147px] w-[902px]  text-yellow-800'> An example of intricate workmanship and detail,
            elegant <br/>necklaces and long and short chains from a part of our<br/>desirable collection.</p>
            <button className='h-[58px] w-[288px] rounded-full p-10px'  style={{backgroundColor:'rgb(162, 152 ,117'}}>Explore</button>
 </section>
  </section>
<div className='flex md:justify-center items-center h-screen m-12'> 
   <Image src="/image/f2.svg" alt="f2.svg" width={462} height={647}  className="border-r-yellow-700"></Image>

</div>
 </section>   
 </div>
  );
}


