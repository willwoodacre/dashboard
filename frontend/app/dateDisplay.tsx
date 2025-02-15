

export default function DateDisplay() {
    const currentDate = new Date();

    return (
        <div className="text-4xl font-bold">
            {currentDate.toLocaleDateString(undefined, { day: 'numeric', weekday: 'short', month: 'long' })}
        </div>
    )
}