import {redirect} from "next/navigation";

async function getData() {
  const res = await fetch('http://localhost:4000/', { method: 'GET', cache: 'no-store', credentials: 'include' });

  if (res.status === 401) {
    redirect('/set-session')
  }

  return res.json()
}

export default async function Home() {
  const events = await getData()

  return (
      <main style={{width: '100%', marginTop: '4rem', display: 'flex', justifyContent: 'center'}}>
        oi
      </main>
  )
}
