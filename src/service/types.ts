export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id?: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string; // Note: This URL might be templated, consider changing its type accordingly
  gists_url: string; // Note: This URL might be templated, consider changing its type accordingly
  starred_url: string; // Note: This URL might be templated, consider changing its type accordingly
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string; // Note: This URL might be templated, consider changing its type accordingly
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
};
