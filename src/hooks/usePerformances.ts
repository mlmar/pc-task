import { useState, useEffect } from "react";
import type { Performance } from "../types/Performance";

/**
 * Hook for fetching list of performances
 * @returns {Performance[]} 
 */
export function usePerformances(): Performance[] {
    const [performances, setPerformances] = useState<Performance[]>([]);

    useEffect(() => {
        async function fetchPerformances() {
            const response = await fetch('performances.json');
            if (response.ok) {
                setPerformances(await response.json())
            }
        }
        fetchPerformances();
    }, [setPerformances]);

    return performances;
}