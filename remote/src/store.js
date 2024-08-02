import { atom, useAtom } from "jotai";

const countAtom = atom (200)

export const useCount = () => useAtom(countAtom)

const searchAtom = atom ('')

export const useSearch = () => useAtom(searchAtom)

