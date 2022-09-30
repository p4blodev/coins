import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { FRAME_OPTIONS } from '../../../utils/DATA';

interface TimeFrameType {
  onSelected?: (value: number) => void;
}

const LABEL = 'Time frame';

export const TimeFrameMUI = ({ onSelected }: TimeFrameType) => {
  const [selected, setSelected] = useState(FRAME_OPTIONS[0].value);

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(Number(event.target.value));
    onSelected?.(Number(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">{LABEL}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected.toString()}
        label={LABEL}
        onChange={handleChange}
      >
        {FRAME_OPTIONS.map((current) => (
          <MenuItem key={current.text} value={current.value}>
            {current.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
