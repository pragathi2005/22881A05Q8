import { Container, Typography, Box } from '@mui/material'
import ShortenerForm from '../components/ShortenerForm'
import ShortenerList from '../components/ShortenerList'

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <ShortenerForm />
      <Box mt={4}>
        <ShortenerList />
      </Box>
    </Container>
  )
}

export default Home
