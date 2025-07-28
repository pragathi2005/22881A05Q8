import { useEffect, useState } from 'react'
import {
  List, ListItem, ListItemText, Card, Typography, Divider, Box,
} from '@mui/material'

function ShortenerList() {
  const [links, setLinks] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortLinks')) || {}
    const entries = Object.entries(data).map(([code, { longUrl, expiry }]) => ({
      code, longUrl, expiry,
    }))
    setLinks(entries)
  }, [])

  return (
    <Card variant="outlined" sx={{ p: 4, mt: 5, borderRadius: 3, maxWidth: 700, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Your Shortened URLs
      </Typography>
      <List>
        {links.map((link) => (
          <Box key={link.code}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    {`${window.location.origin}/${link.code}`}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      Original: {link.longUrl}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Expires: {new Date(link.expiry).toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Card>
  )
}

export default ShortenerList
