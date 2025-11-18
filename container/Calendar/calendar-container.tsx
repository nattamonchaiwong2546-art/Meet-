"use client";

import {Paper, Box} from "@mui/material";
import Calendarcomponent from "@/components/calender/calendar";
import type { CalendarBaseProps } from "./type";

export default function CalendarbaseProps   ({ events, onDateClick, onEventClick }: CalendarBaseProps) {
  return (
    <Paper elevation={3} sx={{width: "100%", height: "100%", p:2, borderRadius: 2}}>
      <Box sx={{width: "100%", height: "100%"}}>
        <Calendarcomponent 
        events={events}
        onDateClick={onDateClick}
        onEventClick={onEventClick}
        />
      </Box>
    </Paper>
  );
}