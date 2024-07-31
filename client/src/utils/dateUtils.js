export const formatIsoStringToDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = { year: 'numeric', month: 'long', day: '2-digit' };

    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);

    return formattedDate;
};

export const dateTodayInitialFormValue = () => {
    return new Date().toISOString().split('T')[0];
}
