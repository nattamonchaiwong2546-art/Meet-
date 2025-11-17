import type { CalendarEvent } from "@/components/calender/type";

export interface MeetListDisplayProps {
  selectedDate: string;
  events: CalendarEvent[];
  onEdit: (event: CalendarEvent) => void;
  onDelete: (eventId: string) => void;
}