import moment from 'moment';

export function CreateDateRangeAndCheck(
  from: string,
  to: string
): { error?: string; result?: Array<{ from: string; to: string }> } {
  const fromDate = moment(from);
  const toDate = moment(to);

  if (!fromDate.isValid()) {
    return {
      error: `From date "${from}" is not a valid date`,
    };
  }

  if (!toDate.isValid()) {
    return {
      error: `To date "${to}" is not a valid date`,
    };
  }

  if (fromDate.isAfter(toDate)) {
    return {
      error: 'From date must be before To date',
    };
  }

  if (toDate.diff(fromDate, 'minutes') < 45) {
    return {
      error: 'Booking for less than 45 min is prohibited',
    };
  }

  const range = toDate.diff(fromDate, 'day');

  const singularDefaultResult = [
    {
      from: fromDate.toISOString(),
      to: toDate.toISOString(),
    },
  ];

  if (range === 0) {
    return {
      result: singularDefaultResult,
    };
  }

  const futureResults = new Array(range)
    .fill(0)
    .map((_, index) => index + 1)
    .map((incrementor, _, arr) => {
      const currentDate = fromDate.clone().add(incrementor, 'days');
      return {
        from: currentDate.startOf('day').toISOString(),
        to:
          incrementor === arr.length
            ? toDate.toISOString()
            : currentDate.endOf('day').toISOString(),
      };
    });

  return {
    result: singularDefaultResult.concat(futureResults),
  };
}
