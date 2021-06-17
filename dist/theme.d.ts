import { Theme } from 'theme-ui';
export declare const modalTheme: {
    modals: {
        backdrop: {
            zIndex: string;
            position: string;
            top: number;
            left: number;
            right: number;
            bottom: number;
            background: string;
        };
        content: {
            px: string;
            flexGrow: number;
            overflowY: string;
        };
        footer: {
            minHeight: number;
            display: string;
            alignItems: string;
            justifyContent: string;
            px: string;
        };
        title: {
            display: string;
            justifyContent: string;
            alignItems: string;
            minHeight: number;
            px: string;
        };
        default: {
            backgroundColor: string;
            borderRadius: string;
            boxShadow: string;
            display: string;
            flexDirection: string;
            maxHeight: string;
            minHeight: string;
            minWidth: string;
            maxWidth: string;
            position: string;
            top: string[];
            zIndex: string;
        };
        defaultFullScreen: {
            backgroundColor: string;
            borderRadius: number;
            display: string;
            flexDirection: string;
            minHeight: string;
            maxHeight: string;
            height: string;
            position: string;
            top: number;
            width: string;
            zIndex: string;
        };
    };
    zIndices: {
        backdrop: number;
        modal: number;
    };
};
export declare function withModalTheme<T extends Theme>(theme: T): T & {
    modals: any;
    zIndices: {
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | (number & {}) | undefined;
        push(...items: import("csstype").Property.ZIndex[]): number;
        concat(...items: ConcatArray<import("csstype").Property.ZIndex>[]): import("csstype").Property.ZIndex[];
        concat(...items: ("-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | (number & {}) | ConcatArray<import("csstype").Property.ZIndex>)[]): import("csstype").Property.ZIndex[];
        join(separator?: string | undefined): string;
        reverse(): import("csstype").Property.ZIndex[];
        shift(): "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | (number & {}) | undefined;
        slice(start?: number | undefined, end?: number | undefined): import("csstype").Property.ZIndex[];
        sort(compareFn?: ((a: import("csstype").Property.ZIndex, b: import("csstype").Property.ZIndex) => number) | undefined): import("csstype").Property.ZIndex[];
        splice(start: number, deleteCount?: number | undefined): import("csstype").Property.ZIndex[];
        splice(start: number, deleteCount: number, ...items: import("csstype").Property.ZIndex[]): import("csstype").Property.ZIndex[];
        unshift(...items: import("csstype").Property.ZIndex[]): number;
        indexOf(searchElement: import("csstype").Property.ZIndex, fromIndex?: number | undefined): number;
        lastIndexOf(searchElement: import("csstype").Property.ZIndex, fromIndex?: number | undefined): number;
        every(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => unknown, thisArg?: any): boolean;
        some(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => U, thisArg?: any): U[];
        filter<S extends import("csstype").Property.ZIndex>(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => value is S, thisArg?: any): S[];
        filter(callbackfn: (value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => unknown, thisArg?: any): import("csstype").Property.ZIndex[];
        reduce(callbackfn: (previousValue: import("csstype").Property.ZIndex, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => import("csstype").Property.ZIndex): import("csstype").Property.ZIndex;
        reduce(callbackfn: (previousValue: import("csstype").Property.ZIndex, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => import("csstype").Property.ZIndex, initialValue: import("csstype").Property.ZIndex): import("csstype").Property.ZIndex;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: import("csstype").Property.ZIndex, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => import("csstype").Property.ZIndex): import("csstype").Property.ZIndex;
        reduceRight(callbackfn: (previousValue: import("csstype").Property.ZIndex, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => import("csstype").Property.ZIndex, initialValue: import("csstype").Property.ZIndex): import("csstype").Property.ZIndex;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: import("csstype").Property.ZIndex, currentIndex: number, array: import("csstype").Property.ZIndex[]) => U_2, initialValue: U_2): U_2;
        find<S_1 extends import("csstype").Property.ZIndex>(predicate: (this: void, value: import("csstype").Property.ZIndex, index: number, obj: import("csstype").Property.ZIndex[]) => value is S_1, thisArg?: any): S_1 | undefined;
        find(predicate: (value: import("csstype").Property.ZIndex, index: number, obj: import("csstype").Property.ZIndex[]) => unknown, thisArg?: any): "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | (number & {}) | undefined;
        findIndex(predicate: (value: import("csstype").Property.ZIndex, index: number, obj: import("csstype").Property.ZIndex[]) => unknown, thisArg?: any): number;
        fill(value: import("csstype").Property.ZIndex, start?: number | undefined, end?: number | undefined): import("csstype").Property.ZIndex[];
        copyWithin(target: number, start: number, end?: number | undefined): import("csstype").Property.ZIndex[];
        [Symbol.iterator](): IterableIterator<import("csstype").Property.ZIndex>;
        entries(): IterableIterator<[number, import("csstype").Property.ZIndex]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<import("csstype").Property.ZIndex>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        includes(searchElement: import("csstype").Property.ZIndex, fromIndex?: number | undefined): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: import("csstype").Property.ZIndex, index: number, array: import("csstype").Property.ZIndex[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
        backdrop: number;
        modal: number;
    } | {
        backdrop: number;
        modal: number;
    };
};
