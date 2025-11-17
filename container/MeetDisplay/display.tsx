"use client";

import { Title } from "@mantine/core";
import MeetList from "@/components/meet.list";
import type { MeetListDisplayProps } from "./type";
import "./display.css"; 

export default function MeetListDisplay({
  selectedDate,
  events,
  onEdit,
  onDelete,
}: MeetListDisplayProps) {
  return (
    <div className="meet-display">
      <Title order={4} c="gray.7" mb="md">
        รายการจองวันที่: {selectedDate}
      </Title>
      <MeetList 
        events={events} 
        onEdit={onEdit} 
        onDelete={onDelete} 
      />
    </div>
  );
}