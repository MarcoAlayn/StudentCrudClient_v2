import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";
import colors from "../../utils/colors";

const MyInput = styled(Input)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "15px",
  border: "none",
  color: colors.darkPurple,
  paddingLeft: "10px",
  width: "400px",
  height: "40px",
}));

const TextField = ({ Icon }) => {
  return (
    <MyInput
      id='standard-adornment-password'
      placeholder='Buscar'
      type='search'
      disableUnderline={true}
      endAdornment={
        <InputAdornment position='start'>
          <IconButton sx={{ color: colors.gray2 }}>{<Icon />}</IconButton>
        </InputAdornment>
      }
    />
  );
};

export default TextField;
