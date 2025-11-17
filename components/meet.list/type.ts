import type {CalendarEvent} from "@/components/calender/type";

export interface MeetListProps {
    events: CalendarEvent[];
    onEdit: (event: CalendarEvent) => void;
    onDelete: (eventId: string) => void;
}