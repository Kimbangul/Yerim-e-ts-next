'use client';
import { PropsWithChildren } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // onError: (error) => {
    //   console.log('onError', error);
    // },
    // onSuccess: (data) => {
    //   console.log('onSuccess', data);
    // },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const QueryProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  // const myInfo = useMyInfo();
  return <>{children}</>;
};

/** 클라이언트 환경에서 구동이 필요한 컴포넌트**/
const ReactClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryProvider>{children}</QueryProvider>
    </QueryClientProvider>
  );
};

export default ReactClientProvider;
