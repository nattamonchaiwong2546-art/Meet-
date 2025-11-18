"use client";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarBaseProps } from "./type";

export default function CalendarComponent({ 
  events, 
  onDateClick, 
  onEventClick 
}: CalendarBaseProps) {
  const formattedEvents = events?.map(event => ({
    id: event.id,
    title: `${event.title} (ห้อง ${event.room})`,
    date: event.date,
    extendedProps: {
      room: event.room,
      startTime: event.startTime,
      endTime: event.endTime
    },
    backgroundColor: event.room === 'Room A' ? '#1976d2' : event.room === 'Room B' ? '#2e7d32' : '#ed6c02',
    borderColor: event.room === 'Room A' ? '#1565c0' : event.room === 'Room B' ? '#1b5e20' : '#e65100'
  }));

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        dateClick={onDateClick}
        eventClick={onEventClick}
        height="100%"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        locale="th"
        buttonText={{
          today: 'วันนี้',
          month: 'เดือน'
        }}
      />
    </div>
  );
}