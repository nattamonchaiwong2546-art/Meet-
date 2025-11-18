"use client";

import { Stack, Typography, Box } from '@mui/material';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import type { MeetListProps } from "./type";
import MeetItem from "@/components/meet.item/meet-item";

export default function MeetList ({ events, onEdit, onDelete }: MeetListProps) {
    if (events.length === 0) {
        return (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 8, gap: 2}}>
               <EventBusyIcon sx={{ fontSize: 64, color: 'text.disabled' }} />
               <Typography color="text.secondary" align="center">
                 ไม่มีการจองในวันที่เลือก
               </Typography>
            </Box>
        );
    }

    return (
        <Stack spacing={2}>
            {events.map((event) => (
                <MeetItem 
                    key={event.id}
                    event={event}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </Stack>
    );
}