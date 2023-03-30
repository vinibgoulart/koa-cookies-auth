import Link from "next/link";

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <section>
        <nav>
          <div style={{display: 'flex', justifyContent: 'space-around', padding: '1.4rem', borderBottom: '1px solid black'}}>
            <Link href={'/'} style={{fontSize: '21px'}}>Home</Link>
            <Link href={'/set-session'} style={{fontSize: '21px'}}>Set Session</Link>
          </div>
        </nav>
      </section>
      {children}
      </body>
      </html>
  );
}
