import { useEffect, useState } from "react";
import { FormatDate, GetHours } from "../../helpers";

export const ShowDate = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <time>
      {FormatDate(date)}
      <br />
      {GetHours(date)}
    </time>
  );
};
