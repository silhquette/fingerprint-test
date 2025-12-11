"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('/api/fingerprint')
      .then(res => res.json())
      .then(data => {
        console.log('Fingerprint data:', data);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg">Check the console for fingerprint data.</p>
    </main>
  );
}
