"use client";

import { Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";
import type { CalendarEvent } from "@/components/calender/type";

interface MeetFormProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: () => void;
  eventData: Partial<CalendarEvent> | null;
  onDataChange: (field: keyof CalendarEvent, value: string) => void;
}

export default function MeetForm({ opened, onClose, onSubmit, eventData, onDataChange }: MeetFormProps) {
  const roomOptions = ["Room A", "Room B", "Room C"];

  return (
    <Modal open={opened} onClose={onClose}>
      <Box sx={{ width: 400, p: 3, bgcolor: 'background.paper', mx: 'auto', mt: '10%' }}>
        <TextField
          label="หัวข้อการประชุม"
          fullWidth
          sx={{ mb: 2 }}
          value={eventData?.title || ""}
          onChange={e => onDataChange("title", e.target.value)}
        />
        <TextField
          label="วันที่"
          type="date"
          fullWidth
          sx={{ mb: 2 }}
          value={eventData?.date || ""}
          onChange={e => onDataChange("date", e.target.value)}
         
        />
        <TextField
          label="เวลาเริ่ม"
          type="time"
          fullWidth
          sx={{ mb: 2 }}
          value={eventData?.startTime || "09:00"}
          onChange={e => onDataChange("startTime", e.target.value)}
          
        />
        <TextField
          label="เวลาสิ้นสุด"
          type="time"
          fullWidth
          sx={{ mb: 2 }}
          value={eventData?.endTime || "10:00"}
          onChange={e => onDataChange("endTime", e.target.value)}
      
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>ห้องประชุม</InputLabel>
          <Select
            value={roomOptions.includes(eventData?.room || "") ? eventData?.room : ""}
            onChange={e => onDataChange("room", e.target.value)}
            label="ห้องประชุม"
          >
            {roomOptions.map(room => (
              <MenuItem key={room} value={room}>
                {room}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            ปิด
          </Button>
          <Button variant="contained" onClick={onSubmit}>
            บันทึก
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}