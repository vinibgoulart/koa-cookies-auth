'use client'

import {useState} from "react";

export default function Page() {
  const [visible, setVisible] = useState(false)
  const handleSubmit = async () => {
    await fetch('http://localhost:4000/set-session', { method: 'POST', cache: 'no-store', credentials: 'include' })
    setVisible(true)
  }

  return (
      <main style={{width: '100%', marginTop: '4rem', display: 'flex', justifyContent: 'center'}}>
        {visible ? <p>session set successfully</p> : <button onClick={() => handleSubmit()}>set session</button>}
      </main>
  )
}
