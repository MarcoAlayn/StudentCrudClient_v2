import React from "react";
import { InputAdornment, IconButton, MenuItem } from "@mui/material";
import colors from "../../utils/colors";
import {
  IntputSearch,
  ReadLabel,
  EditLabel,
  EditInput,
  EditSelect
} from "./TextFieldStyles";

const TextField = ({
  Icon,
  type,
  name,
  label,
  value,
  handleChange,
  errors,
  options,
  inputType,
  required
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
              marginBottom: "20px",
            }}
          >
            {value}
          </span>
        </>
      )}
      {(type === "edit" || type === "create") && (
        <>
          <EditLabel htmlFor={name}>{label}</EditLabel>
          {!options ? (
            <EditInput
              id={name}
              name={name}
              value={value}
              onChange={handleChange}
              type={inputType}
              required
              disableUnderline
              size='small'
            />
          ) : (
            <EditSelect
              // labelId={name}
              // label={label}
              id={name}
              name={name}
              value={value}
              onChange={handleChange}
              disableUnderline
              size='small'
              variant='standard'
            >
              {options.map(({ option, optionValue }) => (
                <MenuItem key={optionValue} value={optionValue}>
                  {option}
                </MenuItem>
              ))}
            </EditSelect>
          )}

          {errors?.[name] && (
            <span
              style={{ color: "red", marginTop: "-24px", textAlign: "center" }}
            >
              {errors?.[name]}
            </span>
          )}
        </>
      )}
    </>
  );
};

export default TextField;
