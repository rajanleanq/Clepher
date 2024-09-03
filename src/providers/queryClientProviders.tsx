import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const QueryClientOptions = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export default function QueryProvider({ children }:{children:React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
