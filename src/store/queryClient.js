import { QueryClient } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { persistor } from "../store/store";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const persister = createAsyncStoragePersister({
    storage: AsyncStorage,
});

export { queryClient, persister };
