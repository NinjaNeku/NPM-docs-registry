import { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

interface loaderArgs {
    params: Params
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({ params }: loaderArgs):Promise<DetailsLoaderResult> {
    const { name } = params;
    
    if(!name){
        throw new Error('Missing package name');
    }
    
    const details = await getPackage(name);

    return {
        details                                                                         
    }
}