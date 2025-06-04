"use client";
import {useState, useEffect} from "react"

export default function ClientComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  const [endpoint, setEndpoint] = useState("");
  // console.log(endpoint);
  useEffect(()=>{
    setEndpoint(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
    const endpointArr = endpoint.split("-").map((part:string) => part.charAt(0).toUpperCase() + part.slice(1));
    const title = endpointArr.join(" ");
    if(endpoint === ""){
      document.title = "Nexoris Technologies Ltd";
    }else{
      document.title = `${title} - Nexoris Technologies Ltd`;
    }
  },[endpoint]);

  return children
}