"use client";

import { Stack, Text } from "@mantine/core";
import type  { MeetListProps } from "./type";
import MeetItem from "@/components/meet.item/meet-item";

export default function MeetList({ events, onEdit, onDelete }: MeetListProps) {
    if (events.length === 0) {
        return (
            <Text c="dimmed" ta="center" mt="lg">ไม่มีการจองในวันที่เลือก</Text>
        );
    }

    return (
        <Stack gap="sm">
            {events.map((event) => (
                <MeetItem 
                    key={event.id}
                    event={event}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </Stack>
    );
}
