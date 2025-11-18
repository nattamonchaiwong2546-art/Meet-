"use client";

import { useState } from "react";
import { Box, Container, Alert, Snackbar } from '@mui/material';
import TopBar from "@/container/TopBar";
import CalendarContainer from "@/container/Calendar";
import { CalendarEvent } from "@/components/calender/type";
import type { EventClickArg } from '@fullcalendar/core';
import MeetForm from "@/components/meet.form";
import MeetDisplay from "@/container/MeetDisplay";

export default function HomeScreen() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [opened, setOpened] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<CalendarEvent> | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedDayEvents, setSelectedDayEvents] = useState<CalendarEvent[]>([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const handleOpenCreateModal = () => {
    setCurrentEvent({ 
      date: selectedDate, 
      title: "",
      startTime: "08:00",
      endTime: "09:00",
      room: "Room A",
    });
    setOpened(true);
  };

  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(arg.dateStr);
    const eventsOnDay = events.filter(e => e.date === arg.dateStr);
    setSelectedDayEvents(eventsOnDay);
  };

  const handleOpenEditModal = (event: CalendarEvent) => {
    setCurrentEvent(event);
    setOpened(true);
  };

  const handleEventClick = (arg: EventClickArg) => {
    const eventId = arg.event.id;
    const eventToEdit = events.find(e => e.id === eventId);
    if (eventToEdit) {
      handleOpenEditModal(eventToEdit);
    }
  };

  const checkRoomConflict = (newEvent: Partial<CalendarEvent>): boolean => {
    if (!newEvent.date || !newEvent.startTime || !newEvent.endTime || !newEvent.room) {
      return false;
    }

    const conflictingEvents = events.filter(e => {
      if (newEvent.id && e.id === newEvent.id) return false;
      if (e.date !== newEvent.date || e.room !== newEvent.room) return false;

      const newStart = newEvent.startTime!;
      const newEnd = newEvent.endTime!;
      const existingStart = e.startTime;
      const existingEnd = e.endTime;

      return (
        (newStart >= existingStart && newStart < existingEnd) ||
        (newEnd > existingStart && newEnd <= existingEnd) ||
        (newStart <= existingStart && newEnd >= existingEnd)
      );
    });

    return conflictingEvents.length > 0;
  };

  const handleDeleteEvent = (eventId: string) => {
    if (window.confirm("คุณต้องการลบการจองนี้ใช่หรือไม่?")) {
      const updatedEvents = events.filter(e => e.id !== eventId);
      setEvents(updatedEvents);
      setSelectedDayEvents(updatedEvents.filter(e => e.date === selectedDate));
      setSnackbar({ open: true, message: 'ลบการจองสำเร็จ', severity: 'success' });
    }
  };
  

  const handleSubmit = () => {
    if (!currentEvent || !currentEvent.title || !currentEvent.date || 
        !currentEvent.startTime || !currentEvent.endTime || !currentEvent.room) {
      setSnackbar({ open: true, message: 'กรุณากรอกข้อมูลให้ครบถ้วน', severity: 'error' });
      return;
    }

    if (currentEvent.startTime >= currentEvent.endTime) {
      setSnackbar({ open: true, message: 'เวลาเริ่มต้นต้องน้อยกว่าเวลาสิ้นสุด', severity: 'error' });
      return;
    }

    if (checkRoomConflict(currentEvent)) {
      setSnackbar({ 
        open: true, 
        message: `ห้อง ${currentEvent.room} ถูกจองในช่วงเวลานี้แล้ว กรุณาเลือกห้องหรือเวลาอื่น`, 
        severity: 'error' 
      });
      return;
    }

    let updatedEvents = [...events];
    if (currentEvent.id) {
      updatedEvents = updatedEvents.map(e => 
        e.id === currentEvent.id ? (currentEvent as CalendarEvent) : e
      );
      setSnackbar({ open: true, message: 'แก้ไขการจองสำเร็จ', severity: 'success' });
    } else {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: currentEvent.title,
        date: currentEvent.date,
        startTime: currentEvent.startTime,
        endTime: currentEvent.endTime,
        room: currentEvent.room,
      };
      updatedEvents.push(newEvent);
      setSnackbar({ open: true, message: 'จองห้องประชุมสำเร็จ', severity: 'success' });
    }

    setEvents(updatedEvents);
    setSelectedDayEvents(updatedEvents.filter(e => e.date === selectedDate));
    setOpened(false);
    setCurrentEvent(null);
  };

  const handleFormDataChange = (field: keyof CalendarEvent, value: string) => {
    setCurrentEvent(prev => ({
      ...(prev as Partial<CalendarEvent>),
      [field]: value,
    }));
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar
        buttonProps={{
          buttonText: "จองห้องประชุม",
          buttonOnClick: handleOpenCreateModal,
        }}
      />

      <MeetForm
        opened={opened}
        onClose={() => {
          setOpened(false);
          setCurrentEvent(null);
        }}
        onSubmit={handleSubmit}
        eventData={currentEvent}
        onDataChange={handleFormDataChange}
      />

      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box 
          sx={{ 
            display: 'flex',
            gap: 2,
            height: 'calc(100vh - 140px)',
          }}
        >
          <Box sx={{ flex: 1.5 }}>
            <CalendarContainer 
              events={events} 
              onDateClick={handleDateClick}
              onEventClick={handleEventClick}
            />
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <MeetDisplay
              selectedDate={selectedDate}
              events={selectedDayEvents}
              onEdit={handleOpenEditModal}
              onDelete={handleDeleteEvent}
            />
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}