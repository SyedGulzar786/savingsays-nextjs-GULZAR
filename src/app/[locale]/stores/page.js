import StorePage from "./StorePage";
import {GetStores} from "@/src/actions/StoresAction";

export const dynamic = 'force-dynamic'

export default async function StorePageServer(props) {
    const params = await props.params;

    const searchParams = await props.searchParams;
    const page = searchParams?.page || 1;
    const alphabet = searchParams?.alphabet ?? "";

    const {data: stores} = await GetStores(page, alphabet);

    return (
        <StorePage initialStores={stores} alphabet={alphabet}/>
    )
};
