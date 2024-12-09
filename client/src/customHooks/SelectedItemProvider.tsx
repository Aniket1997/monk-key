import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface SelectedItemContextType {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

// Create context
const SelectedItemContext = createContext<SelectedItemContextType | undefined>(
  undefined,
);

// Context Provider component
interface SelectedItemProviderProps {
  children: ReactNode;
}

export const SelectedItemProvider: React.FC<SelectedItemProviderProps> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

// Custom hook for using context
export const useSelectedItem = (): SelectedItemContextType => {
  const context = useContext(SelectedItemContext);
  if (!context) {
    throw new Error(
      "useSelectedItem must be used within a SelectedItemProvider",
    );
  }
  return context;
};
