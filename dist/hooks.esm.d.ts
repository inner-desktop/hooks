/// <reference types="react" />
import { DependencyList, RefObject, useEffect, useLayoutEffect, MutableRefObject } from "react";
interface Options<T> {
    manual?: boolean;
    // 是否初始化执行
    pollingInterval?: number;
    // 轮询的间隔毫秒
    onSuccess?: (data: T, params?: any[]) => void;
    // 成功回调
    onError?: (e: Error, params?: any[]) => void;
    autoCancel?: boolean; // 竞态处理开关
    // 竞态处理开关
    // 竞态处理开关
    // 竞态处理开关
    // 竞态处理开关
}
type noop = (...args: any[]) => void;
declare const noop: noop;
type promiseReturn<T> = (...args: any[]) => Promise<T | undefined>;
declare const promiseReturn: promiseReturn<any>;
interface ReturnValue<T> {
    loading: boolean;
    error?: Error | string;
    params: any[];
    data?: T;
    cancel: noop;
    run: promiseReturn<T | undefined>;
    timer: {
        stop: noop;
        resume: noop;
        pause: noop;
    };
}
declare function useAsync<Result = any>(fn: (...args: any[]) => Promise<Result>, options?: Options<Result>): ReturnValue<Result>;
declare function useAsync<Result = any>(fn: (...args: any[]) => Promise<Result>, deps?: DependencyList, options?: Options<Result>): ReturnValue<Result>;
interface ReturnValue$0<Item> {
    loading: boolean;
    loadingMore: boolean;
    data: Item[];
    reload: () => void;
    loadMore: () => void;
    noMore: boolean;
    total: number | undefined;
}
interface Options$0<Result, Item> {
    initPageSize?: number;
    incrementSize?: number;
    itemKey?: string | ((record: Item, index: number) => string);
    formatResult?: (x: Result) => {
        total: number;
        data: Item[];
    };
    ref?: RefObject<HTMLElement>;
    threshold?: number;
}
interface FnParams {
    page: number;
    pageSize: number;
    offset: number;
    id?: any;
    startTime: number;
}
declare function useLoadMore<Result = any, Item = any>(fn: (params: FnParams) => Promise<Result>, options?: Options$0<Result, Item>): ReturnValue$0<Item>;
declare function useLoadMore<Result = any, Item = any>(fn: (params: FnParams) => Promise<Result>, deps?: DependencyList, options?: Options$0<Result, Item>): ReturnValue$0<Item>;
interface ReturnValue$1<T> {
    loading: boolean;
    data?: T;
    value: any;
    onChange: (value: any) => void;
    cancel: () => void;
    run: () => void;
}
interface Options$1 {
    wait?: number;
}
declare function useSearch<Result>(fn: (value: any) => Promise<Result>, options?: Options$1): ReturnValue$1<Result>;
declare function useSearch<Result>(fn: (value: any) => Promise<Result>, deps?: DependencyList, options?: Options$1): ReturnValue$1<Result>;
interface Options$2<T> {
    defaultValue?: T;
    defaultValuePropName?: string;
    valuePropName?: string;
    trigger?: string;
}
interface Props {
    [key: string]: any;
}
declare function useControllableValue<T>(props?: Props, options?: Options$2<T>): readonly [T | undefined, (v: T | undefined) => void];
declare const _default: <T>(initialValue: T[]) => {
    list: T[];
    insert: (index: number, obj: T) => void;
    merge: (index: number, obj: T[]) => void;
    replace: (index: number, obj: T) => void;
    remove: (index: number) => void;
    getKey: (index: number) => number;
    getIndex: (index: number) => number;
    move: (oldIndex: number, newIndex: number) => void;
    push: (obj: T) => void;
    pop: () => void;
    unshift: (obj: T) => void;
    shift: () => void;
    sortForm: (result: unknown[]) => unknown[];
    resetList: (newList?: T[]) => void;
};
declare const useDynamicList: typeof _default;
type Subscription<T> = (val: T) => void;
declare class EventEmitter<T> {
    private subscriptions;
    emit: (val: T) => void;
    useSubscription: (callback: Subscription<T>) => void;
}
declare function useEventEmitter<T = void>(): EventEmitter<T>;
interface ResponsiveConfig {
    [key: string]: number;
}
interface ResponsiveInfo {
    [key: string]: boolean;
}
declare function configResponsive(config: ResponsiveConfig): void;
declare function useResponsive(): ResponsiveInfo;
declare function useLocalStorageState<T = undefined>(key: string): [T | undefined, (value?: T | ((previousState?: T) => T)) => void];
declare function useLocalStorageState<T>(key: string, defaultValue: T | (() => T)): [T, (value?: T | ((previousState: T) => T)) => void];
declare function useSessionStorageState<T = undefined>(key: string): [T | undefined, (value?: T | ((previousState?: T) => T)) => void];
declare function useSessionStorageState<T>(key: string, defaultValue: T | (() => T)): [T, (value?: T | ((previousState: T) => T)) => void];
declare const useUpdateEffect: typeof useEffect;
declare const useUpdateLayoutEffect: typeof useLayoutEffect;
interface ReturnValue$2<Item> {
    data: Item[];
    loading: boolean;
    pagination: {
        current: number;
        pageSize: number;
        total: number;
        totalPage: number;
        onChange: (current: number, pageSize: number) => void;
        changeCurrent: (current: number) => void;
        changePageSize: (pageSize: number) => void;
    };
    refresh: () => void;
}
interface FormattedResult<Item> {
    current?: number;
    pageSize?: number;
    total: number;
    data: Item[];
}
interface Options$3<Result, Item> {
    defaultPageSize?: number;
    formatResult?: (result: Result) => FormattedResult<Item>;
}
interface FnParams$0 {
    current: number;
    pageSize: number;
    [key: string]: any;
}
declare function usePagination<Result, Item>(fn: (params: FnParams$0) => Promise<Result>, options?: Options$3<Result, Item>): ReturnValue$2<Item>;
declare function usePagination<Result, Item>(fn: (params: FnParams$0) => Promise<Result>, deps?: DependencyList, options?: Options$3<Result, Item>): ReturnValue$2<Item>;
declare const useBoolean: (defaultValue?: boolean) => {
    state: boolean;
    toggle: (value?: boolean | undefined) => void;
    setTrue: () => void;
    setFalse: () => void;
};
type IState = string | number | boolean | undefined;
declare function useToggle<T = boolean | undefined>(): {
    state: boolean;
    toggle: (value?: T) => void;
    setLeft: () => void;
    setRight: () => void;
};
declare function useToggle<T = IState>(defaultValue: T): {
    state: T;
    toggle: (value?: T) => void;
    setLeft: () => void;
    setRight: () => void;
};
declare function useToggle<T = IState, U = IState>(defaultValue: T, reverseValue: U): {
    state: T | U;
    toggle: (value?: T | U) => void;
    setLeft: () => void;
    setRight: () => void;
};
type VisibilityState = "hidden" | "visible" | "prerender" | boolean;
declare function useDocumentVisibility(): VisibilityState;
declare function useSelections<T>(items: T[], defaultSelected?: T[]): {
    readonly selected: T[];
    readonly isSelected: (item: T) => boolean;
    readonly select: (item: T) => void;
    readonly unSelect: (item: T) => void;
    readonly toggle: (item: T) => void;
    readonly selectAll: () => void;
    readonly unSelectAll: () => void;
    readonly toggleAll: () => void;
    readonly allSelected: boolean;
    readonly noneSelected: boolean;
    readonly partiallySelected: boolean;
    readonly setSelected: import("react").Dispatch<import("react").SetStateAction<T[]>>;
};
declare function useThrottle<T>(value: T, wait: number): T;
interface ReturnValue$3<T extends any[]> {
    run: (...args: T) => void;
    cancel: () => void;
}
declare function useThrottleFn<T extends any[]>(fn: (...args: T) => any, wait: number): ReturnValue$3<T>;
declare function useThrottleFn<T extends any[]>(fn: (...args: T) => any, deps: DependencyList, wait: number): ReturnValue$3<T>;
declare function useDebounce<T>(value: T, wait: number): T;
interface ReturnValue$4<T extends any[]> {
    run: (...args: T) => void;
    cancel: () => void;
}
declare function useDebounceFn<T extends any[]>(fn: (...args: T) => any, wait: number): ReturnValue$4<T>;
declare function useDebounceFn<T extends any[]>(fn: (...args: T) => any, deps: DependencyList, wait: number): ReturnValue$4<T>;
type compareFunction<T> = (prev: T | undefined, next: T) => boolean;
declare const _default: <T>(state: T, compare?: compareFunction<T> | undefined) => T | undefined;
declare const usePrevious: typeof _default;
interface CursorState {
    screenX: number;
    screenY: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
}
declare const _default: () => CursorState;
declare const useMouse: typeof _default;
interface Position {
    left: number;
    top: number;
}
type Target = HTMLElement | Document;
type Arg = Target | (() => Target) | null;
declare function useScroll<T extends Target = HTMLElement>(): [Position, MutableRefObject<T>];
declare function useScroll<T extends Target = HTMLElement>(arg: Arg): [Position];
type EventType = MouseEvent | TouchEvent;
type RefType = HTMLElement | (() => HTMLElement | null) | null;
declare function useClickAway<T extends HTMLElement = HTMLDivElement>(onClickAway: (event: EventType) => void, dom?: RefType, eventName?: string): MutableRefObject<T>;
type Arg$0 = HTMLElement | (() => HTMLElement) | null;
type InViewport = boolean | undefined;
declare function useInViewport<T extends HTMLElement = HTMLElement>(): [InViewport, MutableRefObject<T>];
declare function useInViewport<T extends HTMLElement = HTMLElement>(arg: Arg$0): [InViewport];
type keyType = KeyboardEvent["keyCode"] | KeyboardEvent["key"];
type KeyFilter = keyType | Array<keyType> | ((event: KeyboardEvent) => boolean);
type EventHandler = (event: KeyboardEvent) => void;
type keyEvent = "keydown" | "keyup";
type RefType$0 = HTMLElement | (() => HTMLElement | null);
type EventOption = {
    events?: Array<keyEvent>;
    target?: Window | RefType$0;
}; // 键盘事件 keyCode 别名
// 键盘事件 keyCode 别名
// 键盘事件 keyCode 别名
// 键盘事件 keyCode 别名
// 键盘事件 keyCode 别名
// 键盘事件 keyCode 别名
declare function useKeyPress<T extends HTMLElement = HTMLInputElement>(keyFilter: KeyFilter, eventHandler?: EventHandler, option?: EventOption): RefObject<T>;
type Target$0 = HTMLElement | Window;
type Dom = Target$0 | (() => Target$0) | null;
declare function useEventListener<T extends Target$0 = HTMLElement>(eventName: string, handler: Function, options?: {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}): MutableRefObject<T>;
declare function useEventListener<T extends Target$0 = HTMLElement>(eventName: string, handler: Function, options?: {
    dom: Dom;
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}): void;
interface Options$4<T> {
    dom?: T | (() => T) | null;
    onEnter?: () => void;
    onLeave?: () => void;
}
declare const _default: <T extends HTMLElement = HTMLElement>(options?: Options$4<T> | undefined) => [boolean | undefined, (MutableRefObject<T> | undefined)?];
declare const useHover: typeof _default;
declare const useUnmount: (fn: any) => void;
interface PaginationConfig {
    total?: number;
    defaultCurrent?: number;
    disabled?: boolean;
    current?: number;
    defaultPageSize?: number;
    pageSize?: number;
    onChange?: (page: number, pageSize?: number) => void;
    hideOnSinglePage?: boolean;
    showSizeChanger?: boolean;
    pageSizeOptions?: string[];
    onShowSizeChange?: (current: number, size: number) => void;
    showQuickJumper?: boolean | {
        goButton?: React.ReactNode;
    };
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    simple?: boolean;
    style?: React.CSSProperties;
    locale?: Object;
    className?: string;
    prefixCls?: string;
    selectPrefixCls?: string;
    itemRender?: (page: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactElement<HTMLElement>) => React.ReactNode;
    role?: string;
    showLessItems?: boolean;
    [key: string]: any;
}
type Sorter = any;
type Filter = any;
type noop$0 = (...args: any[]) => void;
type Service<R, P extends any[]> = (...args: P) => Promise<R>;
type Mutate<R> = (x: (R | undefined | ((data: R) => R))) => void;
type RequestService = string | {
    [key: string]: any;
};
type CombineService<R, P extends any[]> = RequestService | ((...args: P) => RequestService) | Service<R, P>;
interface FetchResult<R, P extends any[]> {
    loading: boolean;
    data: R | undefined;
    error: Error | undefined;
    params: P;
    cancel: noop$0;
    refresh: () => Promise<R>;
    mutate: Mutate<R>;
    // TODO 如果 options 存在 debounceInterval，或 throttleInterval，则 run 和 refresh 不会返回 Promise。类型需要修复。
    run: (...args: P) => Promise<R>;
    unmount: () => void;
}
interface BaseResult<R, P extends any[]> extends FetchResult<R, P> {
    reset: (newCacheKey?: string) => void;
    fetches: {
        [key in string]: FetchResult<R, P>;
    };
}
type BaseOptions<R, P extends any[]> = {
    refreshDeps?: DependencyList;
    // 如果 deps 变化后，重新请求
    manual?: boolean;
    // 是否需要手动触发
    onSuccess?: (data: R, params: P) => void;
    // 成功回调
    onError?: (e: Error, params: P) => void;
    // 失败回调
    defaultLoading?: boolean;
    // 默认 loading 状态
    loadingDelay?: number;
    // loading delay
    defaultParams?: P;
    // 轮询
    pollingInterval?: number;
    // 轮询的间隔毫秒
    pollingWhenHidden?: boolean;
    // 屏幕隐藏时，停止轮询
    fetchKey?: (...args: P) => string;
    paginated?: false;
    loadMore?: false;
    refreshOnWindowFocus?: boolean;
    focusTimespan?: number;
    cacheKey?: string;
    debounceInterval?: number;
    throttleInterval?: number;
    initialData?: R;
    requestMethod?: (service: any) => Promise<any>;
};
/* ✅ --------------------------useRequest---------------------------- */
/* ✅ --------------------------usePaginated---------------------------- */
type PaginatedParams = [{
    current: number;
    pageSize: number;
    sorter?: Sorter;
    filters?: Filter;
}, ...any[]];
interface PaginatedFormatReturn<Item> {
    total: number;
    list: Item[];
    [key: string]: any;
}
interface PaginatedResult<Item> extends BaseResult<PaginatedFormatReturn<Item>, PaginatedParams> {
    // reload: noop; // 重置所有参数，包括分页数据数据等，重新执行 asyncFn
    pagination: {
        current: number;
        pageSize: number;
        total: number;
        totalPage: number;
        onChange: (current: number, pageSize: number) => void;
        changeCurrent: (current: number) => void;
        changePageSize: (pageSize: number) => void;
        [key: string]: any;
    };
    tableProps: {
        dataSource: Item[];
        loading: boolean;
        onChange: (pagination: PaginationConfig, filters?: Filter, sorter?: Sorter) => void;
        pagination: PaginationConfig;
        [key: string]: any;
    };
    sorter?: Sorter;
    filters?: Filter;
}
interface BasePaginatedOptions<U> extends Omit<BaseOptions<PaginatedFormatReturn<U>, PaginatedParams>, "paginated"> {
    paginated: true;
    defaultPageSize?: number; // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
    // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
    // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
    // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
    // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
}
interface PaginatedOptionsWithFormat<R, Item, U> extends Omit<BaseOptions<PaginatedFormatReturn<U>, PaginatedParams>, "paginated"> {
    paginated: true;
    defaultPageSize?: number;
    // loadMorePageSize?: number; // 非第一页的 pageSize, for loadMore
    // 默认每页数据
    formatResult: (data: R) => PaginatedFormatReturn<Item>;
} /* ✅ --------------------------useLoadMore---------------------------- */
/* ✅ --------------------------useLoadMore---------------------------- */
/* ✅ --------------------------useLoadMore---------------------------- */
interface Store {
    [name: string]: any;
}
interface UseAntdTableFormUtils {
    getFieldInstance?: (name: string) => {};
    // antd 3
    setFieldsValue: (value: Store) => void;
    getFieldsValue: (...args: any) => Store;
    resetFields: (...args: any) => void;
    [key: string]: any;
}
interface Result<Item> extends PaginatedResult<Item> {
    search: {
        type: "simple" | "advance";
        changeType: () => void;
        submit: () => void;
        reset: () => void;
    };
}
interface BaseOptions$0<U> extends Omit<BasePaginatedOptions<U>, "paginated"> {
    form?: UseAntdTableFormUtils;
    defaultType?: "simple" | "advance";
}
interface OptionsWithFormat$0<R, Item, U> extends Omit<PaginatedOptionsWithFormat<R, Item, U>, "paginated"> {
    form?: UseAntdTableFormUtils;
    defaultType?: "simple" | "advance";
}
declare function useFormTable<R = any, Item = any, U extends Item = any>(service: CombineService<R, PaginatedParams>, options: OptionsWithFormat$0<R, Item, U>): Result<Item>;
declare function useFormTable<R = any, Item = any, U extends Item = any>(service: CombineService<PaginatedFormatReturn<Item>, PaginatedParams>, options: BaseOptions$0<U>): Result<Item>;
interface StableActions<K> {
    add: (key: K) => void;
    remove: (key: K) => void;
    reset: () => void;
}
interface Actions<K> extends StableActions<K> {
    has: (key: K) => boolean;
}
declare function useSet<K>(initialValue?: Iterable<K>): [Set<K>, Actions<K>];
type noop$1 = (...args: any[]) => any;
declare function usePersistFn<T extends noop$1>(fn: T): T;
interface StableActions$0<U, V> {
    set: (key: U, value: V) => void;
    setAll: (newMap: Iterable<readonly [U, V]>) => void;
    remove: (key: U) => void;
    reset: () => void;
}
interface Actions$0<U, V> extends StableActions$0<U, V> {
    get: (key: U) => V;
}
declare function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>): [Map<K, T>, Actions$0<K, T>];
declare function useCreation<T>(factory: () => T, deps: any[]): T;
declare const useMount: (fn: any) => void;
interface IRect {
    top: number;
    left: number;
    bottom: number;
    right: number;
    height: number;
    width: number;
}
interface IState$0 extends IRect {
    text: string;
}
type TDom = HTMLElement | Document;
type Arg$1 = TDom | (() => TDom) | null;
/**
 * 获取用户选取的文本或当前光标插入的位置
 * */
declare function useTextSelection<T extends TDom = TDom>(): [IState$0, MutableRefObject<T>];
declare function useTextSelection<T extends TDom = TDom>(arg: Arg$1): [IState$0];
interface Options$6 {
    min?: number;
    max?: number;
}
interface Actions$1 {
    inc: (delta?: number) => void;
    dec: (delta?: number) => void;
    set: (value: number | ((c: number) => number)) => void;
    reset: () => void;
}
declare function useCounter(initialValue?: number, options?: Options$6): [number, Actions$1];
declare const useUpdate: () => () => void;
interface ValueProps<T, U> {
    value: T | undefined;
    onChange: (e: EventTarget<U>) => any;
}
interface EventTarget<U> {
    target: {
        value: U;
    };
}
declare const _default: <T, U = T>(initialValue?: T | undefined, transformer?: ((value: U) => T) | undefined) => [ValueProps<T, U>, () => void];
declare const useEventTarget: typeof _default;
declare function useHistoryTravel<T>(initialValue?: T): {
    value: T | undefined;
    setValue: (val: T) => void;
    backLength: number;
    forwardLength: number;
    go: (step: number) => void;
    back: () => void;
    forward: () => void;
};
declare const useControlledValue: typeof useControllableValue;
export { useAsync, useLoadMore, useSearch, useControlledValue, useControllableValue, useDynamicList, useResponsive, useEventEmitter, useLocalStorageState, useSessionStorageState, configResponsive, useUpdateEffect, useUpdateLayoutEffect, usePagination, useBoolean, useToggle, useDocumentVisibility, useSelections, useThrottle, useThrottleFn, useDebounce, useDebounceFn, usePrevious, useMouse, useScroll, useClickAway, useInViewport, useKeyPress, useEventListener, useHover, useFormTable, useUnmount, useSet, usePersistFn, useMap, useCreation, useMount, useCounter, useUpdate, useTextSelection, useEventTarget, useHistoryTravel };
