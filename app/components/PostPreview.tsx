import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return ( 
    <div className="p-4 rounded-md shadow-m">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-customTitle hover:underline">{props.title}</h2>
        </Link>
        <p className="text-sm text-customText ">{props.date}</p>
        <p className="text-customSubtext">{props.subtitle}</p>
    </div>
    );
}

export default PostPreview;