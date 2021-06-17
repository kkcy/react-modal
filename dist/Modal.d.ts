import { Variant } from 'framer-motion';
import { ModalContextValue } from './ModalContext';
import React from 'react';
import { BoxProps } from 'theme-ui';
export interface ModalProps extends Omit<BoxProps, 'children'> {
    open?: boolean;
    /**
     * Allow user to close modal
     */
    allowClose?: boolean;
    /**
     * Closes modal when user clicks outside of the modal
     */
    closeOnOutsideClick?: boolean;
    onClose?: () => any;
    /**
     * Width of the modal when not full screen
     */
    width?: string | number;
    /**
     * Max width of the modal when not full screen
     */
    maxWidth?: string | number;
    /**
     * At which breakpoint (and below) it should be fullscreen.
     *
     * Alternatively, true for always and false for never
     */
    fullScreen?: boolean | 'xs' | 'sm' | 'md' | 'lg';
    /**
     * Skips the enter and exit animations
     */
    skipAnimations?: boolean;
    /**
     * The component to use as the backdrop behind the modals
     */
    Backdrop?: React.ComponentType<any>;
    children?: React.ReactNode | ((props: ModalContextValue) => React.ReactNode);
    /**
     * The framer-motion animation variants to use
     */
    animations?: {
        fullScreen?: {
            enter: Variant;
            exit: Variant;
        };
        default?: {
            enter: Variant;
            exit: Variant;
        };
    };
}
export default function Modal({ allowClose, closeOnOutsideClick, Backdrop: BackdropComponent, children, fullScreen, maxWidth, onClose, open, skipAnimations, sx, variant, width, animations, ...props }: ModalProps): JSX.Element;
