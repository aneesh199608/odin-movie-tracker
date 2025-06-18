import {createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Movies } from "@/types/movies";

interface WatchListContextType {
    watchList: Movies[];
    addToWatchList: (movie: Movies) => void;
    removeFromWatchList: (title: string) => void;
    isInWatchList: (title: string) => boolean;
}

const WatchListContext = createContext<WatchListContextType | undefined>(undefined);

export function useWatchList() {
    const ctx = useContext(WatchListContext);
    if(!ctx) throw new Error("useWatchList must be used within a WatchListProvider");
    return ctx;
}

export function WatchListProvider({children}: {children: ReactNode}) {
    const [watchList, setWatchList] = useState<Movies[]>([]);

    const addToWatchList = (movie: Movies) => {
        setWatchList((prev) => 
            prev.some((m) => m.title === movie.title) ? prev: [...prev, movie]
        );
    };

    const removeFromWatchList = (title: string) => {
        setWatchList((prev) => prev.filter((m) => m.title !== title));
    };

    const isInWatchList = (title: string) => {
        return watchList.some((m) => m.title === title);
    };

    // Load from localStorage on mount
    useEffect(() => {
    const data = localStorage.getItem("watchlist");
    if (data) setWatchList(JSON.parse(data));
    }, []);

    // Save to localStorage on change
    useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    }, [watchList]);



    return (
        <WatchListContext.Provider
            value={{ watchList, addToWatchList, removeFromWatchList, isInWatchList }}
        >
            {children}
        </WatchListContext.Provider>
    );
}