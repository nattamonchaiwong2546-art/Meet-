"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";
import type { MeetFormProps } from "./type";

export default function MeetForm({ opened, onClose, onSubmit, eventData, onDataChange }: MeetFormProps) {
  const roomOptions = ["Room A", "Room B", "Room C"];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Modal open={opened} onClose={onClose}>
      <Box sx={{ width: 400, p: 3, bgcolor: 'background.paper', mx: 'auto', mt: '10%' }}>
        <TextField
          label="หัวข้อการประชุม"
          fullWidth
          sx={{ mb: 2 }}
          value={eventData?.title || ""}
          onChange={e => onDataChange("title", e.target.value)}
        />
       <DatePicker
        label="วันที่"
        value={eventData?.date ? dayjs(eventData.date) : null}
        onChange={(value) => onDataChange("date", value?.format("YYYY-MM-DD") || "")}
        sx={{ width: '100%', mb: 2 }}
        />
       <TimePicker
        label="เวลาเริ่ม"
        value={eventData?.startTime ? dayjs(eventData.startTime, "HH:mm") : null}
        onChange={(value) =>onDataChange("startTime", value?.format("HH:mm") || "")}
        sx={{ width: '100%', mb: 2 }}
        />
        <TimePicker
        label="เวลาสิ้นสุด"
        value={eventData?.endTime ? dayjs(eventData.endTime, "HH:mm") : null}
        onChange={(value) =>onDataChange("endTime", value?.format("HH:mm") || "")}
        sx={{ width: '100%', mb: 2 }}
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
   </LocalizationProvider>
  );
}