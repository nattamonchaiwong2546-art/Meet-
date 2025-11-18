"use client";

import { Box, Typography,Chip} from '@mui/material';
import MeetList from "@/components/meet.list";
import type { MeetListDisplayProps } from "./type";

export default function MeetListDisplay({
  selectedDate,
  events,
  onEdit,
  onDelete,
}: MeetListDisplayProps) {
    const totalCount = events.length;
    const filteredEvents = events; 

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography 
          variant="h6" 
          color="text.primary" 
          sx={{ mb: 2, fontWeight: 600 }}
        >
          รายการจองวันที่: {selectedDate}
        </Typography>
           <Chip 
          label={`ทั้งหมด (${totalCount})`}
          color="primary"
          sx={{ mb: 2 }}
        />
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        <MeetList 
          events={filteredEvents} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      </Box>
    </Box>
  );
}