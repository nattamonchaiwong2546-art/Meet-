import type { CalendarEvent } from "@/components/calender/type";

export interface CalendarBaseProps {
    events?: CalendarEvent[];
    onDateClick?: (arg: { dateStr: string }) => void;
    onEventClick?: (arg: any) => void;
}