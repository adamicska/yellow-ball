/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPlayerProfile } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PlayerProfileCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    country: "",
    province: "",
    city: "",
    pic: "",
    level: "",
    active: false,
    following: [],
    followers: [],
    visiting: "",
    Bio: "",
    sub: "",
  };
  const [country, setCountry] = React.useState(initialValues.country);
  const [province, setProvince] = React.useState(initialValues.province);
  const [city, setCity] = React.useState(initialValues.city);
  const [pic, setPic] = React.useState(initialValues.pic);
  const [level, setLevel] = React.useState(initialValues.level);
  const [active, setActive] = React.useState(initialValues.active);
  const [following, setFollowing] = React.useState(initialValues.following);
  const [followers, setFollowers] = React.useState(initialValues.followers);
  const [visiting, setVisiting] = React.useState(initialValues.visiting);
  const [Bio, setBio] = React.useState(initialValues.Bio);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCountry(initialValues.country);
    setProvince(initialValues.province);
    setCity(initialValues.city);
    setPic(initialValues.pic);
    setLevel(initialValues.level);
    setActive(initialValues.active);
    setFollowing(initialValues.following);
    setCurrentFollowingValue("");
    setFollowers(initialValues.followers);
    setCurrentFollowersValue("");
    setVisiting(initialValues.visiting);
    setBio(initialValues.Bio);
    setSub(initialValues.sub);
    setErrors({});
  };
  const [currentFollowingValue, setCurrentFollowingValue] = React.useState("");
  const followingRef = React.createRef();
  const [currentFollowersValue, setCurrentFollowersValue] = React.useState("");
  const followersRef = React.createRef();
  const validations = {
    country: [],
    province: [],
    city: [],
    pic: [],
    level: [],
    active: [],
    following: [{ type: "JSON" }],
    followers: [{ type: "JSON" }],
    visiting: [],
    Bio: [],
    sub: [],
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
          country,
          province,
          city,
          pic,
          level,
          active,
          following,
          followers,
          visiting,
          Bio,
          sub,
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
            query: createPlayerProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayerProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              country: value,
              province,
              city,
              pic,
              level,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub,
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
              country,
              province: value,
              city,
              pic,
              level,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub,
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
              country,
              province,
              city: value,
              pic,
              level,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub,
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
        label="Pic"
        isRequired={false}
        isReadOnly={false}
        value={pic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic: value,
              level,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.pic ?? value;
          }
          if (errors.pic?.hasError) {
            runValidationTasks("pic", value);
          }
          setPic(value);
        }}
        onBlur={() => runValidationTasks("pic", pic)}
        errorMessage={errors.pic?.errorMessage}
        hasError={errors.pic?.hasError}
        {...getOverrideProps(overrides, "pic")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
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
              country,
              province,
              city,
              pic,
              level: value,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub,
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
              country,
              province,
              city,
              pic,
              level,
              active: value,
              following,
              followers,
              visiting,
              Bio,
              sub,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic,
              level,
              active,
              following: values,
              followers,
              visiting,
              Bio,
              sub,
            };
            const result = onChange(modelFields);
            values = result?.following ?? values;
          }
          setFollowing(values);
          setCurrentFollowingValue("");
        }}
        currentFieldValue={currentFollowingValue}
        label={"Following"}
        items={following}
        hasError={errors?.following?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("following", currentFollowingValue)
        }
        errorMessage={errors?.following?.errorMessage}
        setFieldValue={setCurrentFollowingValue}
        inputFieldRef={followingRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Following"
          isRequired={false}
          isReadOnly={false}
          value={currentFollowingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.following?.hasError) {
              runValidationTasks("following", value);
            }
            setCurrentFollowingValue(value);
          }}
          onBlur={() => runValidationTasks("following", currentFollowingValue)}
          errorMessage={errors.following?.errorMessage}
          hasError={errors.following?.hasError}
          ref={followingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "following")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic,
              level,
              active,
              following,
              followers: values,
              visiting,
              Bio,
              sub,
            };
            const result = onChange(modelFields);
            values = result?.followers ?? values;
          }
          setFollowers(values);
          setCurrentFollowersValue("");
        }}
        currentFieldValue={currentFollowersValue}
        label={"Followers"}
        items={followers}
        hasError={errors?.followers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("followers", currentFollowersValue)
        }
        errorMessage={errors?.followers?.errorMessage}
        setFieldValue={setCurrentFollowersValue}
        inputFieldRef={followersRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Followers"
          isRequired={false}
          isReadOnly={false}
          value={currentFollowersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.followers?.hasError) {
              runValidationTasks("followers", value);
            }
            setCurrentFollowersValue(value);
          }}
          onBlur={() => runValidationTasks("followers", currentFollowersValue)}
          errorMessage={errors.followers?.errorMessage}
          hasError={errors.followers?.hasError}
          ref={followersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "followers")}
        ></TextAreaField>
      </ArrayField>
      <TextField
        label="Visiting"
        isRequired={false}
        isReadOnly={false}
        value={visiting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic,
              level,
              active,
              following,
              followers,
              visiting: value,
              Bio,
              sub,
            };
            const result = onChange(modelFields);
            value = result?.visiting ?? value;
          }
          if (errors.visiting?.hasError) {
            runValidationTasks("visiting", value);
          }
          setVisiting(value);
        }}
        onBlur={() => runValidationTasks("visiting", visiting)}
        errorMessage={errors.visiting?.errorMessage}
        hasError={errors.visiting?.hasError}
        {...getOverrideProps(overrides, "visiting")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={Bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic,
              level,
              active,
              following,
              followers,
              visiting,
              Bio: value,
              sub,
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
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              country,
              province,
              city,
              pic,
              level,
              active,
              following,
              followers,
              visiting,
              Bio,
              sub: value,
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
