import { createContext, useContext, useState, type ReactNode } from "react";
import { niches, type NicheConfig } from "@/lib/nicheData";

interface NicheContextType {
  selectedNiche: NicheConfig | null;
  setNiche: (id: string) => void;
  clearNiche: () => void;
}

const NicheContext = createContext<NicheContextType>({
  selectedNiche: null,
  setNiche: () => {},
  clearNiche: () => {},
});

export const NicheProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNiche, setSelectedNiche] = useState<NicheConfig | null>(null);

  const setNiche = (id: string) => {
    const found = niches.find((n) => n.id === id);
    if (found) setSelectedNiche(found);
  };

  const clearNiche = () => setSelectedNiche(null);

  return (
    <NicheContext.Provider value={{ selectedNiche, setNiche, clearNiche }}>
      {children}
    </NicheContext.Provider>
  );
};

export const useNiche = () => useContext(NicheContext);
