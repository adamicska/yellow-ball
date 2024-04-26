/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerCreateFormInputValues = {
    userId?: string;
    username?: string;
    ranking?: number;
    country?: string;
    province?: string;
    city?: string;
    racquet?: string;
    strings?: string;
    level?: number;
    active?: boolean;
    Bio?: string;
};
export declare type PlayerCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    ranking?: ValidationFunction<number>;
    country?: ValidationFunction<string>;
    province?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    racquet?: ValidationFunction<string>;
    strings?: ValidationFunction<string>;
    level?: ValidationFunction<number>;
    active?: ValidationFunction<boolean>;
    Bio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCreateFormOverridesProps = {
    PlayerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    ranking?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    province?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    racquet?: PrimitiveOverrideProps<TextFieldProps>;
    strings?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    Bio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onSuccess?: (fields: PlayerCreateFormInputValues) => void;
    onError?: (fields: PlayerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerCreateFormInputValues) => PlayerCreateFormInputValues;
    onValidate?: PlayerCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerCreateForm(props: PlayerCreateFormProps): React.ReactElement;
