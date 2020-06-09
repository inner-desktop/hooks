import { MutableRefObject } from 'react';
declare type EventType = MouseEvent | TouchEvent;
declare type RefType = HTMLElement | (() => HTMLElement | null) | null;
export default function useClickAway<T extends HTMLElement = HTMLDivElement>(onClickAway: (event: EventType) => void, dom?: RefType, eventName?: string): MutableRefObject<T>;
export {};
