import { useState } from "react";
import { FRAME_OPTIONS } from "../../utils/DATA";

type TimeFrameType = {
  onSelected?: (value: number) => void;
};

export const TimeFrame = ({ onSelected }: TimeFrameType) => {
  const [selected, setSelected] = useState(FRAME_OPTIONS[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(event.target.value));
    onSelected && onSelected(Number(event.target.value));
  };

  return (
    <select value={selected} onChange={handleChange} name="select">
      {FRAME_OPTIONS.map((current) => (
        <option key={current.text} value={current.value}>
          {current.text}
        </option>
      ))}
    </select>
  );
};
