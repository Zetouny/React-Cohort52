import { createContext, useState } from "react";

export const AppStatusContext = createContext([]);

export default function AppStatusProvider({ children }) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AppStatusContext value={{ loading, setLoading, error, setError }}>
      {children}
    </AppStatusContext>
  );
}
