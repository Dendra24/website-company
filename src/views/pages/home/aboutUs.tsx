import contentfulClient from "@/contentful/contentFulClien";
import { TypeBlogSkeleton } from "@/contentful/types/blog.types";

const getBlogContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeBlogSkeleton>();
        } catch (err) {
        console.log(err);
    }
};

export default async function AboustUs () {
    const blogs = await getBlogContentful();
    return (
        <div>
            {blogs && 
            blogs.items?.map((blog, idx) => (
                <div key={idx}>
                    <img 
                     src={`https:${(blog.fields.images as IAsset).fields.file.url}`}
                    />
                 <p className="text-lg">{blog.fields.title}</p>
                </div>
            ))}
        </div>
    )
 }
    



 