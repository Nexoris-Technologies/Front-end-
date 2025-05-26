export interface BlogResponse {
  data: BlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Other interfaces unchanged

export interface BlogPost {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  content: string;
  featuredImage: FeaturedImage;
  seoMeta: SeoMeta;
  faqs: FAQ[];
  schemaType?: "article" | "review";
}

export interface FeaturedImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ImageFormats {
  large?: ImageFormat;
  medium?: ImageFormat;
  small?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface SeoMeta {
  id: number;
  metaTitle: string;
  metaDescription: string;
  canonicalURL: string | null;
  noIndex: boolean | null;
  noFollow: boolean | null;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
