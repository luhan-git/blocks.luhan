import React from "react";

interface FooterProps{
    message:string
}

const Footer:React.FC<FooterProps>=({message})=>{
return(
    <footer className="container mx-auto p-4">
       <h1 className="text-center text-slate-500 text-xl"> {message}</h1>
    </footer>
);
}
export default Footer