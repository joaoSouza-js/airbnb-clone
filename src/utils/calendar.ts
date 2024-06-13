import dayjs from "dayjs";

type monthProps = {
    title: string;
    days: {
        isPlaceholder: boolean;
        date: Date | null;
    }[];
};

function generateDaysPlaceholder(placeHolderDays: number) {
    const daysPlaceholderArray = Array.from(
        { length: placeHolderDays },
        (_, index) => {
            return {
                isPlaceholder: true,
                date: null,
            };
        }
    );

    return daysPlaceholderArray;
}

function generateDays(date: dayjs.Dayjs | Date | string) {
    const current = dayjs(date);
    const days = Array.from({ length: current.daysInMonth() }, (_, index) => {
        return {
            isPlaceholder: false,
            date: current.set("date", index + 1).toDate(),
        };
    });

    return days;
}

export function getMonthsCalendar(monthsAmount: number): monthProps[] {
    const today = dayjs().set("date", 1);
    let months = [];

    for (let index = 0; index < monthsAmount; index++) {
        const currentMonth = today.add(index, "months");
        const monthTitle = currentMonth.format("MMMM YYYY");
        const daysPlaceHolder = generateDaysPlaceholder(currentMonth.day());
        const days = generateDays(currentMonth);

        const month = {
            title: monthTitle,
            days: [...daysPlaceHolder, ...days],
        };

        months.push(month);
    }

    return months;
}
