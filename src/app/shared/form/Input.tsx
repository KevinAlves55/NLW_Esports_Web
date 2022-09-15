import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input: React.FC<InputProps> = ({ ...rest }) => {

    return (
        <input
            {...rest}
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        />
    );

};