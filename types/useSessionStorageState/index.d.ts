declare function useSessionStorageState<T = undefined>(key: string): [T | undefined, (value?: T | ((previousState?: T) => T)) => void];
declare function useSessionStorageState<T>(key: string, defaultValue: T | (() => T)): [T, (value?: T | ((previousState: T) => T)) => void];
export default useSessionStorageState;
