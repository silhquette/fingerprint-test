"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [headers, setHeaders] = useState<[string, string][]>([]);

  useEffect(() => {
    fetch('/api/fingerprint')
      .then(res => res.json())
      .then(data => {
        console.log('Fingerprint data:', data);
        if (Array.isArray(data)) {
          setHeaders(data);
        }
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Header Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {headers.map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
