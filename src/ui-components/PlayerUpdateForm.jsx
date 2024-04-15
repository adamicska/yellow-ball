/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getPlayer } from "../graphql/queries";
import { updatePlayer } from "../graphql/mutations";
const client = generateClient();
export default function PlayerUpdateForm(props) {
  const {
    userId: userIdProp,
    player: playerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    country: "",
    province: "",
    city: "",
    racquet: "",
    strings: "",
    level: "",
    active: false,
    Bio: "",
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [country, setCountry] = React.useState(initialValues.country);
  const [province, setProvince] = React.useState(initialValues.province);
  const [city, setCity] = React.useState(initialValues.city);
  const [racquet, setRacquet] = React.useState(initialValues.racquet);
  const [strings, setStrings] = React.useState(initialValues.strings);
  const [level, setLevel] = React.useState(initialValues.level);
  const [active, setActive] = React.useState(initialValues.active);
  const [Bio, setBio] = React.useState(initialValues.Bio);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = playerRecord
      ? { ...initialValues, ...playerRecord }
      : initialValues;
    setUserId(cleanValues.userId);
    setCountry(cleanValues.country);
    setProvince(cleanValues.province);
    setCity(cleanValues.city);
    setRacquet(cleanValues.racquet);
    setStrings(cleanValues.strings);
    setLevel(cleanValues.level);
    setActive(cleanValues.active);
    setBio(cleanValues.Bio);
    setErrors({});
  };
  const [playerRecord, setPlayerRecord] = React.useState(playerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = userIdProp
        ? (
            await client.graphql({
              query: getPlayer.replaceAll("__typename", ""),
              variables: { userId: userIdProp },
            })
          )?.data?.getPlayer
        : playerModelProp;
      setPlayerRecord(record);
    };
    queryData();
  }, [userIdProp, playerModelProp]);
  React.useEffect(resetStateValues, [playerRecord]);
  const validations = {
    userId: [{ type: "Required" }],
    country: [{ type: "Required" }],
    province: [],
    city: [],
    racquet: [],
    strings: [],
    level: [{ type: "Required" }],
    active: [{ type: "Required" }],
    Bio: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userId,
          country,
          province: province ?? null,
          city: city ?? null,
          racquet: racquet ?? null,
          strings: strings ?? null,
          level,
          active,
          Bio: Bio ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updatePlayer.replaceAll("__typename", ""),
            variables: {
              input: {
                userId: playerRecord.userId,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayerUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={true}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              country,
              province,
              city,
              racquet,
              strings,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country: value,
              province,
              city,
              racquet,
              strings,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Province"
        isRequired={false}
        isReadOnly={false}
        value={province}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province: value,
              city,
              racquet,
              strings,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.province ?? value;
          }
          if (errors.province?.hasError) {
            runValidationTasks("province", value);
          }
          setProvince(value);
        }}
        onBlur={() => runValidationTasks("province", province)}
        errorMessage={errors.province?.errorMessage}
        hasError={errors.province?.hasError}
        {...getOverrideProps(overrides, "province")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city: value,
              racquet,
              strings,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Racquet"
        isRequired={false}
        isReadOnly={false}
        value={racquet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city,
              racquet: value,
              strings,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.racquet ?? value;
          }
          if (errors.racquet?.hasError) {
            runValidationTasks("racquet", value);
          }
          setRacquet(value);
        }}
        onBlur={() => runValidationTasks("racquet", racquet)}
        errorMessage={errors.racquet?.errorMessage}
        hasError={errors.racquet?.hasError}
        {...getOverrideProps(overrides, "racquet")}
      ></TextField>
      <TextField
        label="Strings"
        isRequired={false}
        isReadOnly={false}
        value={strings}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city,
              racquet,
              strings: value,
              level,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.strings ?? value;
          }
          if (errors.strings?.hasError) {
            runValidationTasks("strings", value);
          }
          setStrings(value);
        }}
        onBlur={() => runValidationTasks("strings", strings)}
        errorMessage={errors.strings?.errorMessage}
        hasError={errors.strings?.hasError}
        {...getOverrideProps(overrides, "strings")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={level}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city,
              racquet,
              strings,
              level: value,
              active,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city,
              racquet,
              strings,
              level,
              active: value,
              Bio,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={Bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              country,
              province,
              city,
              racquet,
              strings,
              level,
              active,
              Bio: value,
            };
            const result = onChange(modelFields);
            value = result?.Bio ?? value;
          }
          if (errors.Bio?.hasError) {
            runValidationTasks("Bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("Bio", Bio)}
        errorMessage={errors.Bio?.errorMessage}
        hasError={errors.Bio?.hasError}
        {...getOverrideProps(overrides, "Bio")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(userIdProp || playerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(userIdProp || playerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
