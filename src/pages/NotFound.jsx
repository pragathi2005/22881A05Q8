import { Container, Typography } from '@mui/material'

function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography>
        The short link you are trying to access does not exist or has expired.
      </Typography>
    </Container>
  )
}

export default NotFound
