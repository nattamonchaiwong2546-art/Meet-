"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { CalendarBaseProps } from "./type";

export default function CalendarComponent({ events, onDateClick, onEventClick }: CalendarBaseProps) {
  return (
  <div className="calendar-wrapper w-full">
  <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    initialView="dayGridMonth"
    events={events}
    dateClick={onDateClick}
    eventClick={onEventClick} 
    height="100%" 
  />
</div>
  );
}