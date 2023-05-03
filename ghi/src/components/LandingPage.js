import React from "react";
import ArcadeCanvas from "./ArcadeCanvas";

export default function LandingPage() {
  return (
    <div className="bg-beige h-screen flex flex-col justify-center items-center">
      <div className="text-center mb-4 pt-16">
        <h1 className="text-5xl font-bold mb-2 pt-8">PLAYBOXX</h1>
        <p className="text-lg">Games </p>
      </div>
      <ArcadeCanvas />
    </div>
  );
}
