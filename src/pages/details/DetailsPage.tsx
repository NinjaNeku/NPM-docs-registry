import { useLoaderData } from "react-router-dom"
import { DetailsLoaderResult } from "./detailsLoader"

export default function DetailsPage(){
    const { details } = useLoaderData() as DetailsLoaderResult;

    return <div className="space-y-4">
        <h1 className="text-3xl font-bold my-4">
            {details.name}
        </h1>
        <div>
            <h3 className="text-lg font-bold">
                description
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.description}
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold">
                ReadMe file
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.readme ? details.readme : "No ReadMe file available"}
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold">
                License
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.license}
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold">
                Author
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                 {details.author?.name || "No definite author specified"}
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold">
                Maintainers
            </h3>
            <div className="p-3 bg-gray-200 rounded">
                {details.maintainers.map((maintainer) => maintainer.name).join(", ")}
            </div>
        </div>
    </div>
}