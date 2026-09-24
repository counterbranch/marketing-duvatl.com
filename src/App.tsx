import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container component="main" maxWidth="sm" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 10 }}>
        <Typography variant="h1">DUVATL, Inc.</Typography>
        <Typography sx={{ mt: 3 }}>
          We make{' '}
          <Link href="https://counterbranch.com/">Counterbranch</Link>, which runs the same access checks against
          main and a pull request and shows which access decisions changed.
        </Typography>
      </Container>

      <Container component="footer" maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="body2" color="textSecondary">
          © 2026 DUVATL, Inc. Counterbranch™ is a trademark of DUVATL, Inc.
        </Typography>
      </Container>
    </Box>
  )
}

export default App
