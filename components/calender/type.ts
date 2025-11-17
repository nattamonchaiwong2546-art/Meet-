

export interface CalendarEvent {
  title: string;
  date: string;
}

export interface CalendarBaseProps {
  events?: CalendarEvent[];    
  onDateClick?: (arg: { dateStr: string }) => void;
}