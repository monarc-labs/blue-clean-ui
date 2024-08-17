import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
    const { children, className, type = "button" } = props;

    return (
        <button className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;
