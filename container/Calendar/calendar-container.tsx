"use client";

import CalendarComponent from "@/components/calender";
import type { CalendarContainerProps } from "./type";
import "./calendar-container.css";

export default function CalendarContainer({
  events = [],        
  onDateClick,
}: CalendarContainerProps) {
  return (
    <div className="calendar-container">
      <div className="calendar-wrapper">
        <CalendarComponent events={events} onDateClick={onDateClick} />
      </div>
    </div>
  );
}