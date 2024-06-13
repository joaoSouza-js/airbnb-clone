import dayjs from "dayjs";
import { Text } from "@/components/Text";
import { VerticalStack } from "@/components/VerticalStack";
import { Pressable, PressableProps, useWindowDimensions } from "react-native";

type CalendarDayCardProps = PressableProps & {
    startDateSelected: Date | null;
    endDateSelected: Date | null;
    weekDays: number;
    date: Date | null;
};

export function CalendarDayCard(props: CalendarDayCardProps) {
    const { startDateSelected, endDateSelected, weekDays, date, ...rest } =
        props;
    const dayCardSize = useWindowDimensions().width / weekDays - 6;

    function isFirstDate() {
        if (date == null) return false;

        const dateInDayJs = dayjs(date).endOf("day");
        const startDate = dayjs(startDateSelected).endOf("day");

        return dateInDayJs.isSame(startDate);
    }

    function isEndDate() {
        if (date == null) return false;
        const dateInDayJs = dayjs(date).endOf("day");
        const endDate = dayjs(endDateSelected).endOf("day");
        return dateInDayJs.isSame(endDate);
    }

    function isBetweenDate() {
        if (date == null) return false;
        const dateInDayJs = dayjs(date).endOf("day");
        const startDate = dayjs(startDateSelected).endOf("day");
        const endDate = dayjs(endDateSelected).endOf("day");

        if (dateInDayJs.isAfter(startDate) && dateInDayJs.isBefore(endDate))
            return true;
    }

    const isFistDaySelected = isFirstDate();
    const isEndDaySelected = isEndDate();
    const isBetweenDaySelected = isBetweenDate();

    return (
        <VerticalStack
            className={`${
                (isEndDaySelected || isBetweenDaySelected) && "bg-gray-700/30"
            } ${isFistDaySelected && endDateSelected && "bg-gray-700/30"}`}
            style={[
                isFistDaySelected &&
                    endDateSelected && {
                        borderTopLeftRadius: 999,
                        borderBottomLeftRadius: 999,
                    },
                isEndDaySelected && {
                    borderTopRightRadius: 999,
                    borderBottomRightRadius: 999,
                },
            ]}
        >
            <Pressable
                className={`items-center justify-center `}
                style={[
                    {
                        width: dayCardSize,
                        height: dayCardSize,
                    },
                    (isFistDaySelected || isEndDaySelected) && {
                        backgroundColor: "black",
                        borderRadius: 999,
                    },
                ]}
                {...rest}
            >
                <Text
                    fontFamily="InterBold"
                    type={
                        isFistDaySelected || isEndDaySelected
                            ? "secondary"
                            : "primary"
                    }
                >
                    {date?.getDate()}
                </Text>
            </Pressable>
        </VerticalStack>
    );
}
