import React from "react";
import Navbar from "./home/Components/Navbar";
import { Bento } from "./home/Components/Bento";

export default function page() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Navbar />
        <Bento />
      </div>
    </div>
  );
}