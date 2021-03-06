import useStorageState from '../useStorageState';
function useSessionStorageState(key, defaultValue) {
    return useStorageState(sessionStorage, key, defaultValue);
}
export default useSessionStorageState;
//# sourceMappingURL=index.js.map