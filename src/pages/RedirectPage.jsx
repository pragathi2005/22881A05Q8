import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function RedirectPage() {
  const { shortCode } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortLinks')) || {}
    const entry = data[shortCode]

    if (!entry || new Date() > new Date(entry.expiry)) {
      navigate('/not-found')
    } else {
      window.location.href = entry.longUrl
    }
  }, [shortCode, navigate])

  return null
}

export default RedirectPage
