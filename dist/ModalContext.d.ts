import React from 'react';
export interface ModalContextValue {
    allowClose: boolean;
    skipAnimations?: boolean;
    isFullScreen?: boolean;
    onClose?: () => any;
}
export declare const ModalContext: React.Context<ModalContextValue>;
export declare function useModal(): ModalContextValue;
