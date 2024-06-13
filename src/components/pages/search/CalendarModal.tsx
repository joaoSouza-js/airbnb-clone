import {
    Modal,
    ModalProps,
    Platform,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import { SearchModalHeader } from "./SearchModalHeader";
import { useEffect, useState } from "react";

import { VerticalStack } from "@/components/VerticalStack";

import { Heading } from "@/components/Heading";
import dayjs from "dayjs";

import { HorizontalStack } from "@/components/HorizontalStack";
import { Center } from "@/components/Center";
import { Text } from "@/components/Text";
import { getMonthsCalendar } from "@/utils/calendar";
import { CalendarDayCard } from "./CadlendarDayCard";

const weekDays = [
    {
        name: "SATURDAY",
        number: 1,
    },
    {
        name: "Monday",
        number: 2,
    },
    {
        name: "Tuesday",
        number: 3,
    },
    {
        name: "Wednesday",
        number: 4,
    },
    {
        name: "Thursday",
        number: 5,
    },
    {
        name: "Friday",
        number: 6,
    },
    {
        name: "SUNDAY",
        number: 7,
    },
];

type monthProps = {
    title: string;
    days: {
        isPlaceholder: boolean;
        date: Date | null;
    }[];
};

type CalendarModalProps = ModalProps & {
    closeModal: () => void;
};

export function CalendarModal(props: CalendarModalProps) {
    const { closeModal, visible, ...rest } = props;
    const [months, setMonths] = useState<monthProps[]>([]);

    const [startDateSelected, setStartDateSelected] = useState<Date | null>(
        null
    );
    const [endDateSelected, setEndDateSelected] = useState<Date | null>(null);
    const dayCardSize = useWindowDimensions().width / weekDays.length - 6;

    function handleSelectedDate(dateSelected: Date | null) {
        if (dateSelected == null) return;

        const dataSelectedInDayJs = dayjs(dateSelected).endOf("day");
        if (startDateSelected == null) {
            setStartDateSelected(dateSelected);
            return;
        }

        const startDateSelectedInDayJs = dayjs(startDateSelected).endOf("day");
        const endDateSelectedInDayJs = dayjs(endDateSelected).endOf("day");

        if (dataSelectedInDayJs.isSame(startDateSelectedInDayJs)) {
            setEndDateSelected(null);
            setStartDateSelected(null);
            return;
        }

        if (dataSelectedInDayJs.isSame(endDateSelectedInDayJs)) {
            setStartDateSelected(dateSelected);
            setEndDateSelected(null);
            return;
        }

        if (
            dataSelectedInDayJs.isBefore(startDateSelectedInDayJs) ||
            startDateSelectedInDayJs.isSame(dataSelectedInDayJs)
        ) {
            setStartDateSelected(dateSelected);
            setStartDateSelected(null);
            return;
        }

        setEndDateSelected(dateSelected);
    }

    useEffect(() => {
        const response = getMonthsCalendar(12);
        setMonths(response);
    }, []);

    return (
        <Modal
            {...rest}
            visible={visible}
            animationType="slide"
            hardwareAccelerated={Platform.OS === "android" ? true : false}
            onRequestClose={closeModal}
            transparent
            statusBarTranslucent
        >
            <VerticalStack className="flex-1 bg-gray-200 ">
                <SearchModalHeader closeModal={closeModal} />
                <VerticalStack className="flex-1 bg-white  pt-6 rounded-t-2xl mt-7 px-5">
                    <Heading>When's your trip?</Heading>
                    <HorizontalStack className="mt-5">
                        {weekDays.map((day) => (
                            <Center
                                style={{
                                    width: dayCardSize,
                                    height: dayCardSize,
                                }}
                                key={day.name}
                            >
                                <Text>{day.name[0].toUpperCase()}</Text>
                            </Center>
                        ))}
                    </HorizontalStack>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {months.map((month, index) => (
                            <VerticalStack key={month.title} className="mt-5">
                                <Heading>{month.title}</Heading>
                                <HorizontalStack className="flex-wrap mt-3 gap-y-1">
                                    {month.days.map((day, index) => (
                                        <CalendarDayCard
                                            key={`${month.title}-${index}`}
                                            date={day.date}
                                            weekDays={weekDays.length}
                                            startDateSelected={
                                                startDateSelected
                                            }
                                            endDateSelected={endDateSelected}
                                            onPress={() =>
                                                handleSelectedDate(day.date)
                                            }
                                        />
                                    ))}
                                </HorizontalStack>
                            </VerticalStack>
                        ))}
                    </ScrollView>
                </VerticalStack>
            </VerticalStack>
        </Modal>
    );
}
