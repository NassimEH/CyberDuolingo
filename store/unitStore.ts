import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "@/lib/persistStorage";

import { UNITS } from "@/data/units";

interface UnitState {
  selectedUnitId: string;
  setSelectedUnitId: (unitId: string) => void;
}

const DEFAULT_UNIT = "net-fundamentals";

export const useUnitStore = create<UnitState>()(
  persist(
    (set) => ({
      selectedUnitId: DEFAULT_UNIT,
      setSelectedUnitId: (selectedUnitId) => set({ selectedUnitId }),
    }),
    {
      name: "unit-storage",
      storage: createJSONStorage(() => persistStorage),
    }
  )
);

export function getSelectedUnit(unitId: string | null | undefined) {
  const id = unitId || DEFAULT_UNIT;
  return UNITS.find((u) => u.id === id) ?? UNITS[0];
}

export function getAllModules() {
  return [...UNITS].sort((a, b) => a.order - b.order);
}
