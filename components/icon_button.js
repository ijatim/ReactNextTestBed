import React from 'react';
import { FaBeer } from 'react-icons/fa';

export default function IconButton({
                                   children,
                                   disabled,
                                   icon,
                                   ...props
                               }) {
    return (
        <button {...props} disabled={disabled}>
            {icon && <FaBeer type={icon}/>}
            {children}
        </button>
    );
}