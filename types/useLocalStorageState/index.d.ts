declare function useLocalStorageState<T = undefined>(key: string): [T | undefined, (value?: T | ((previousState?: T) => T)) => void];
declare function useLocalStorageState<T>(key: string, defaultValue: T | (() => T)): [T, (value?: T | ((previousState: T) => T)) => void];
export default useLocalStorageState;
