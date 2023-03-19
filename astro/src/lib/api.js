import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCategoriesWithPosts() {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCarousel() {
  const query = `*[_type == "post"]{
    title,
    slug,
    body,
    mainImage{
      asset->{
        _id,
        url
      },
    },
    hexCode,
  }`;


  
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllPortfolio() {
  const query = `*[_type == "portfolio"]{
    title,
    slug,
    description[],
    body,
    mainImage{
      asset->{
        _id,
        url
      },
    },
    supportingImages[]{
      asset->{
        _id,
        url
      },
    },
    hexCode,
  }`;


  
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAbout() {
  const query = `*[_type == "about"]{
    title,
    slug,
    description[],
    body,
    mainImage{
      asset->{
        _id,
        url
      },
    },
    supportingImages[]{
      asset->{
        _id,
        url
      },
    },
    hexCode,
  }`;

  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getContact() {
  const query = `*[_type == "contact"]{
    name,
    area,
    phone,
    email,
    established,
    slug,
    description[],
    body,
    
    hexCode,
  }`;

  const data = await useSanityClient().fetch(query);
  return data;
}