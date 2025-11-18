"use client";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card, CardContent, Typography, Button, Box, Chip, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import type { MeetItemProps } from "./type";

export default function MeetItem({ event, onEdit, onDelete }: MeetItemProps) {
  const roomColors = {
    'Room A': 'primary',
    'Room B': 'success',
    'Room C': 'warning'
  } as const;

  return (
    <Card 
      sx={{ 
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)'
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
            {event.title}
          </Typography>
          <Chip 
            icon={<MeetingRoomIcon />}
            label={`ห้อง ${event.room}`}
            color={roomColors[event.room]}
            size="medium"
          />
        </Box>

        <Stack spacing={1} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.startTime} - {event.endTime}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {event.date}
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button 
            variant="outlined" 
            color="primary"
            size="small"
            startIcon={<EditIcon />}
            onClick={() => onEdit(event)}
            sx={{ textTransform: 'none' }}
          >
            แก้ไข
          </Button>
          <Button 
            variant="outlined" 
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(event.id)}
            sx={{ textTransform: 'none' }}
          >
            ลบ
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}