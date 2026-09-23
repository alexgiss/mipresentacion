import { useState } from 'react'
import { profile } from '../data'

// Avatar con fallback a las iniciales si la foto no existe o no carga.
export default function Avatar({ className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!profile.photo || failed) {
    return (
      <span
        className={`flex items-center justify-center rounded-xl bg-cyan-400 font-bold text-slate-950 ${className}`}
      >
        {profile.initials}
      </span>
    )
  }

  return (
    <img
      src={profile.photo}
      alt={profile.name}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
