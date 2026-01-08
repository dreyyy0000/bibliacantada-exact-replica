import { useState, useEffect } from "react";

const DynamicDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = String(now.getFullYear()).slice(-2);
      return `${day}/${month}/${year}`;
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
