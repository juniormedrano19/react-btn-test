
import React from 'react'
import { CSSProperties } from 'react'
//@ts-ignore
import styles from '../Button/button.module.css'
import Svg from '../Svg'

interface ButtonProps {
    size?: string
    color?: string
    disabled?: boolean
    type?: any 
    onClick: any
    isLoading?: boolean
    className?: string
    children?: React.ReactNode
    icon?: string
    isIcon?: boolean
    onlyIcon?: boolean
    outline?:boolean
    id?: string
}

const Button = ({
    onClick,
    disabled = false,
    color = 'default' || 'primary' || 'success' || 'danger' || 'warning' || 'blue' || 'successTicket',
    type = 'submit' || 'button',
    children,
    icon,
    isIcon,
    onlyIcon,
    id,
    outline
}: ButtonProps) => {

    const iconButton : CSSProperties  = {
        right: onlyIcon ? '0px' : '6px'
    }

    const paddingButton : CSSProperties = {
        padding: onlyIcon ? '5px 3px' : '8px 15px'
    }

    return (
        <div className={outline ? `${styles.wrapper__buttonOutline} ${styles[color]}` :  `${styles.wrapper__button} ${styles[color]}`}>
            <button 
                style={paddingButton}
                onClick={onClick} 
                type={type}
                id={id}
                disabled={disabled} 
                className={isIcon ? styles.button__icon : styles.button__notIcon || onlyIcon ? styles.button__children : styles.button__notChildren}
            >
                {isIcon && <Svg style={iconButton} icon={icon} />}
                <span>
                    {children}
                </span>
            </button>
        </div>
    )
}

export default Button;