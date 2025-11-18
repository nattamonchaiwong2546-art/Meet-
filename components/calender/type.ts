export interface CalendarEvent {
  id: string; 
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  room: 'Room A' | 'Room B' | 'Room C';
}

export interface CalendarBaseProps {
  events?: CalendarEvent[];    
  onDateClick?: (arg: { dateStr: string }) => void;
  onEventClick?: (arg: { event: { id: string; title: string; startStr: string } }) => void;
}