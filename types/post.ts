export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  class_list: string[];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: any[];
  jetpack_shortlink: string;
  jetpack_sharing_enabled: boolean;
  jetpack_likes_enabled: boolean;
  'jetpack-related-posts': any[];
  _links: Links;
}

export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  advanced_seo_description: string;
  jetpack_seo_html_title: string;
  jetpack_seo_noindex: boolean;
  _coblocks_attr: string;
  _coblocks_dimensions: string;
  _coblocks_responsive_height: string;
  _coblocks_accordion_ie_support: string;
  jetpack_post_was_ever_published: boolean;
  reader_suggested_tags: string;
  _jetpack_newsletter_access: string;
  _jetpack_dont_email_post_to_subs: boolean;
  _jetpack_newsletter_tier_id: number;
  _jetpack_memberships_contains_paywalled_content: boolean;
  _jetpack_memberships_contains_paid_content: boolean;
  footnotes: string;
  jetpack_publicize_message: string;
  jetpack_publicize_feature_enabled: boolean;
  jetpack_social_post_already_shared: boolean;
  jetpack_social_options: JetpackSocialOptions;
}

export interface JetpackSocialOptions {
  image_generator_settings: ImageGeneratorSettings;
}

export interface ImageGeneratorSettings {
  template: string;
  enabled: boolean;
}

export interface Links {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  'version-history': VersionHistory[];
  'predecessor-version': PredecessorVersion[];
  'wp:attachment': WpAttachment[];
  'wp:term': WpTerm[];
  curies: Cury[];
}

export interface Self {
  href: string;
}

export interface Collection {
  href: string;
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Reply {
  embeddable: boolean;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface WpAttachment {
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}
