"use client";

import { useState } from "react";
import TopBar from "@/container/TopBar";
import CalendarContainer from "@/container/Calendar";
import { CalendarEvent } from "@/components/calender/type";
import { useDisclosure } from '@mantine/hooks';


import type { EventClickArg } from '@fullcalendar/core';


import MeetForm from "@/components/meet.form";
import MeetDisplay from "@/container/MeetDisplay";


import "./HomeScreen.css";

export default function HomeScreen() {
  
 
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [currentEvent, setCurrentEvent] = useState<Partial<CalendarEvent> | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedDayEvents, setSelectedDayEvents] = useState<CalendarEvent[]>([]);

 
  const handleOpenCreateModal = () => {
    setCurrentEvent({ date: selectedDate, title: "" });
    open();
  };

 
  const handleDateClick = (arg: { dateStr: string }) => {
    setSelectedDate(arg.dateStr);
    const eventsOnDay = events.filter(e => e.date === arg.dateStr);
    setSelectedDayEvents(eventsOnDay);
  };
  
  
  const handleOpenEditModal = (event: CalendarEvent) => {
    setCurrentEvent(event);
    open();
  };

  const handleEventClick = (arg: EventClickArg) => {
    const eventId = arg.event.id;
    const eventToEdit = events.find(e => e.id === eventId);
    if (eventToEdit) {
      handleOpenEditModal(eventToEdit);
    }
  };


  const handleDeleteEvent = (eventId: string) => {
    if (window.confirm("คุณต้องการลบการจองนี้ใช่หรือไม่?")) {
      const updatedEvents = events.filter(e => e.id !== eventId);
      setEvents(updatedEvents);
      setSelectedDayEvents(updatedEvents.filter(e => e.date === selectedDate));
    }
  };

  const handleSubmit = () => {
    if (!currentEvent || !currentEvent.title || !currentEvent.date) {
      alert("กรุณากรอกหัวข้อ");
      return;
    }

    let updatedEvents = [...events];
    if (currentEvent.id) {
      updatedEvents = updatedEvents.map(e => 
        e.id === currentEvent.id ? (currentEvent as CalendarEvent) : e
      );
    } else {
      const newEvent: CalendarEvent = {
        ...currentEvent,
        id: Date.now().toString(),
        title: currentEvent.title,
        date: currentEvent.date,
      };
      updatedEvents.push(newEvent);
    }

    setEvents(updatedEvents);
    setSelectedDayEvents(updatedEvents.filter(e => e.date === selectedDate));
    close();
    setCurrentEvent(null);
  };
  
  
  const handleFormDataChange = (field: keyof CalendarEvent, value: string) => {
     setCurrentEvent(prev => ({
      ...(prev as Partial<CalendarEvent>),
      [field]: value,
     }));
  };



  return (
    <div className="home-screen-container">
    
      <TopBar
        textProps={{ title: "ระบบจองห้องประชุม" }}
        buttonProps={{
          buttonText: "จองห้องประชุม",
          buttonOnClick: handleOpenCreateModal,
        }}
      />
      
      <MeetForm
        opened={opened}
        onClose={close}
        onSubmit={handleSubmit}
        eventData={currentEvent}
        onDataChange={handleFormDataChange}
      />

      <div className="home-content">
      
        <div className="calendar-left">
          <CalendarContainer 
            events={events} 
            onDateClick={handleDateClick}
            onEventClick={handleEventClick} 
          />
        </div>
        
        <div className="right-content">
          <MeetDisplay
            selectedDate={selectedDate}
            events={selectedDayEvents}
            onEdit={handleOpenEditModal}
            onDelete={handleDeleteEvent}
          />
        </div>
      </div>
    </div>
  );
}