import type { CalendarEvent } from "@/components/calender/type";

export interface MeetItemProps {
    event: CalendarEvent;
    onEdit: (event: CalendarEvent) => void;
    onDelete: (eventId: string) => void;
}