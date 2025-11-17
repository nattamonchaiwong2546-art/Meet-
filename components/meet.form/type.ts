import type { CalendarEvent } from "@/components/calender/type";

export interface MeetFormProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: () => void;
  eventData: Partial<CalendarEvent> | null;
  onDataChange: (field: keyof CalendarEvent, value: string) => void;
}