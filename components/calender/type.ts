export interface CalendarEvent {
  id: string; 
  title: string;
  date: string;
}

export interface CalendarBaseProps {
  events?: CalendarEvent[];    
  onDateClick?: (arg: { dateStr: string }) => void;
  onEventClick?: (arg: { event: { id: string; title: string; startStr: string } }) => void;
}