import { QueryClient, QueryClientProvider, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
const fiveMinutesinMs = 1000 * 60 * 5;
const QueryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: fiveMinutesinMs,
      gcTime: fiveMinutesinMs,
      refetchOnWindowFocus: false,
      retry: false,
      placeholderData: keepPreviousData,
    },
  },
};

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient(QueryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
