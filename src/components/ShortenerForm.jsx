import { useState } from 'react'
import {
  TextField, Button, Stack, Snackbar, Alert, Paper, Typography,
} from '@mui/material'
import { generateCode } from '../utils/generateCode'

function ShortenerForm() {
  const [longUrl, setLongUrl] = useState('')
  const [customCode, setCustomCode] = useState('')
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' })

  const handleGenerate = () => {
    let data = JSON.parse(localStorage.getItem('shortLinks')) || {}
    let newCode
    do {
      newCode = generateCode()
    } while (data[newCode])
    setCustomCode(newCode)
  }

  const handleSubmit = () => {
    let data = JSON.parse(localStorage.getItem('shortLinks')) || {}

    if (customCode && data[customCode]) {
      setSnack({ open: true, message: 'The given name is not available', severity: 'error' })
      return
    }

    const code = customCode || generateCode()
    const expiry = new Date(Date.now() + 30 * 60 * 1000).toISOString()

    data[code] = { longUrl, expiry }
    localStorage.setItem('shortLinks', JSON.stringify(data))

    setLongUrl('')
    setCustomCode('')
    setSnack({ open: true, message: `Short URL created: ${window.location.origin}/${code}`, severity: 'success' })
  }

  return (
    <>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, maxWidth: 600, mx: 'auto', mt: 5 }}>
        <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          URL Shortener
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Enter Long URL"
            variant="outlined"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            fullWidth
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Custom Code (optional)"
              variant="outlined"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              fullWidth
            />
            <Button variant="outlined" onClick={handleGenerate} sx={{ minWidth: 120 }}>
              Generate
            </Button>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            sx={{ alignSelf: 'center', px: 5, py: 1 }}
          >
            Shorten
          </Button>
        </Stack>
      </Paper>

      <Snackbar open={snack.open} autoHideDuration={4000} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default ShortenerForm
