import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SocialButtonProps {
    containerStyles?: string;
    iconStyles?: string;
}

export interface WorkSliderBtnProps {
    containerStyles?: string;
    btnStyles?: string;
    iconStyles?: string;
}