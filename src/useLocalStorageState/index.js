import useStorageState from '../useStorageState';
function useLocalStorageState(key, defaultValue) {
    return useStorageState(localStorage, key, defaultValue);
}
export default useLocalStorageState;
//# sourceMappingURL=index.js.map