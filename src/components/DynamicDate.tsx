import { useState, useEffect } from "react";

const DynamicDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      return now.toLocaleDateString("pt-BR", options);
    };

    setCurrentDate(formatDate());

    // Update at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      setCurrentDate(formatDate());
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, [currentDate]);

  return (
    <p className="text-gold text-sm uppercase tracking-wide mb-1">
      Somente até hoje — {currentDate}
    </p>
  );
};

export default DynamicDate;
