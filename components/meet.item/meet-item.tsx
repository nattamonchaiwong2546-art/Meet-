"use client";

import { Card, Text, Button, Group } from "@mantine/core";
import type { MeetItemProps } from "./type";
import "./meet-item.css";

export default function MeetItem({ event, onEdit, onDelete }: MeetItemProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder className="meet-item-card">
      <Text fw={500}>{event.title}</Text>
      <Text size="sm" c="dimmed">
        วันที่: {event.date}
      </Text>
      <Group justify="flex-end" mt="md">
        <Button variant="light" color="blue" onClick={() => onEdit(event)}>
          แก้ไข
        </Button>
        <Button variant="light" color="red" onClick={() => onDelete(event.id)}>
          ลบ
        </Button>
      </Group>
    </Card>
  );
}