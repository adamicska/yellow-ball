/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PlayerProfile } from "../API.ts";
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
export declare type PlayerProfileUpdateFormInputValues = {
    country?: string;
    province?: string;
    city?: string;
    level?: number;
    active?: boolean;
    Bio?: string;
    userId?: string;
};
export declare type PlayerProfileUpdateFormValidationValues = {
    country?: ValidationFunction<string>;
    province?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    level?: ValidationFunction<number>;
    active?: ValidationFunction<boolean>;
    Bio?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerProfileUpdateFormOverridesProps = {
    PlayerProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    province?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    active?: PrimitiveOverrideProps<SwitchFieldProps>;
    Bio?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayerProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playerProfile?: PlayerProfile;
    onSubmit?: (fields: PlayerProfileUpdateFormInputValues) => PlayerProfileUpdateFormInputValues;
    onSuccess?: (fields: PlayerProfileUpdateFormInputValues) => void;
    onError?: (fields: PlayerProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerProfileUpdateFormInputValues) => PlayerProfileUpdateFormInputValues;
    onValidate?: PlayerProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerProfileUpdateForm(props: PlayerProfileUpdateFormProps): React.ReactElement;
