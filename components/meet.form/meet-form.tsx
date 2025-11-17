"use client";

import { Modal, TextInput, Button, Stack } from "@mantine/core";
import type { MeetFormProps } from "./type";

export default function MeetForm({
  opened,
  onClose,
  onSubmit,
  eventData,
  onDataChange,
}: MeetFormProps) {
  
  const isEditMode = !!eventData?.id;

  return (
    <Modal opened={opened} onClose={onClose} title={isEditMode ? "แก้ไขการจอง" : "จองห้องประชุม"}>
      <Stack>
        <TextInput
          label="หัวข้อการประชุม"
          required
          value={eventData?.title || ""}
          onChange={(e) => onDataChange("title", e.currentTarget.value)}
        />
        <TextInput
          label="วันที่"
          type="date"
          required
          value={eventData?.date || ""}
          onChange={(e) => onDataChange("date", e.currentTarget.value)}
        />
        <Button onClick={onSubmit} mt="md">
          {isEditMode ? "บันทึกการแก้ไข" : "ยืนยันการจอง"}
        </Button>
      </Stack>
    </Modal>
  );
}