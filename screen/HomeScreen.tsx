"use client";

import { useState } from "react";
import TopBar from "@/container/TopBar";
import CalendarContainer from "@/container/Calendar";

export default function HomeScreen() {
  const [events, setEvents] = useState([]);
  const handleDateClick = (arg: { dateStr: string }) => {
    alert(`คุณคลิกวันที่ ${arg.dateStr}`);
  };

  return (
    <div style={{ padding: "24px" }}>
    
      <TopBar
        textProps={{ title: "ระบบจองห้องประชุม" }}
        buttonProps={{
          buttonText: "จองห้องประชุม",
          buttonOnClick: () => alert("Click!"),
        }}
      />

    
      <div className="home-content" style={{ display: "flex", marginTop: "16px", height: "calc(100vh - 100px)" }}>
      
        <div className="calendar-left" style={{ flex: 1, maxWidth: "50%", marginRight: "16px" }}>
          <CalendarContainer events={events} onDateClick={handleDateClick} />
        </div>

        
        <div className="right-content" style={{ flex: 1 }}>
         
        </div>
      </div>
    </div>
  );
}