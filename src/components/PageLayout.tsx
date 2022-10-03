import * as React from "react";
import Nav from "./Nav";
import "../index.css";
import Footer from "./footer";
type Props = {
  children?: React.ReactNode;
};

const PageLayout =  ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Nav/>    
      {children}  
      <div className="w-full mt-10 md:mt-20 inline-block bg-[#024B58]">
      <Footer/>
      </div>
    </div>
  );
};

export default PageLayout;
