"use client";

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import type { TopBarButtonProps } from "./type";

export default function TopBarButton({ buttonText, buttonOnClick }: TopBarButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={buttonOnClick}
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
        '&:active': {
          bgcolor: '#4338CA',
        },
      }}
    >
      {buttonText}
    </Button>
  );
}