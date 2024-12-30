import { defineCollection,z } from "astro:content";

const productSchema={
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    price: z.coerce.number(),
    category: z.string()
}
const product=defineCollection({
    type:'content',
    schema: z.object(productSchema)
})
export const collections={product};