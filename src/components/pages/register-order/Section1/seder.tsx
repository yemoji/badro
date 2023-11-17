import styled from "@emotion/styled";
import { TextField as MuiTextField } from "@mui/material";

export default function Sender() {
  return(
    <TextField label="sss" />
  )
}

const TextField = styled(MuiTextField)({
  '& label.Mui-focused': {
    color: '#0576c6',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0576c6',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: '#0576c6',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0576c6',
    },
  },
});
