"use client"; 

import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { TopBarProps } from "./type";

export default function TopBar({ buttonProps }: TopBarProps) {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: '#5a4ee3',
        boxShadow: 3
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between',
            py: 2
          }}
        >
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              color: '#f6f4f4',
              fontWeight: 'bold',
              fontFamily: 'Arial, "Noto Sans Thai", sans-serif'
            }}
          >
            ระบบจองห้องประชุม
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={buttonProps.buttonOnClick}
            sx={{
              bgcolor: '#6366F1',
              color: 'white',
              borderRadius: '12px',
              px: 3,
              py: 1.5,
              fontFamily: 'Arial, "Noto Sans Thai", sans-serif',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                bgcolor: '#4F46E5',
              },
            }}
          >
            {buttonProps.buttonText}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}