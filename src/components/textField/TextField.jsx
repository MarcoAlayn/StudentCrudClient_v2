import React from "react";
import { InputAdornment, IconButton } from "@mui/material";
import colors from "../../utils/colors";
import {
  IntputSearch,
  ReadLabel,
  EditLabel,
  EditInput,
  CreateLabel,
  CreateInput,
} from "./TextFieldStyles";

const TextField = ({
  Icon,
  type,
  name,
  label,
  value,
  handleChange,
  errors,
}) => {
  return (
    <>
      {type === "search" && (
        <IntputSearch
          placeholder='Buscar'
          type='search'
          disableUnderline
          endAdornment={
            <InputAdornment position='start'>
              <IconButton sx={{ color: colors.gray2 }}>{<Icon />}</IconButton>
            </InputAdornment>
          }
        />
      )}
      {type === "read" && (
        <>
          <ReadLabel htmlFor={name}>{label}</ReadLabel>
          <span
            style={{
              backgroundColor: "transparent",
              fontWeight: "bold",
              pointerEvents: "none",
              marginBottom:"20px"
            }}
          >
            {value}
          </span>
        </>
      )}
      {type === "edit" && (
        <>
          <EditLabel htmlFor={name}>{label}</EditLabel>
          <EditInput
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            disableUnderline
          />
          {errors && <span style={{ color: "red" }}>{errors}</span>}
        </>
      )}
      {type === "create" && (
        <>
          <CreateLabel htmlFor={name}>{label}</CreateLabel>
          <CreateInput
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            disableUnderline
          />
          {errors && <span style={{ color: "red" }}>{errors}</span>}
        </>
      )}
    </>
  );
};

export default TextField;
