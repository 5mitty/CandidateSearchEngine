// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly avatar_url: string | null;
    readonly events_url: string | null;
    readonly followers_url: string | null;
    readonly following_url: string | null;
    readonly gists_url: string | null;
    readonly gravatar_id: string | null;
    readonly html_url: string | null;
    readonly id: number | null;
    readonly login: string | null ;
    readonly node_id: string | null;
    readonly organizations_url: string | null;
    readonly received_events_url: string | null;
    readonly repos_url: string | null;
    readonly site_admin: boolean | null;
    readonly starred_url: string | null;
    readonly subscriptions_url: string | null;
    readonly type: string | null;
    readonly url: string | null;
    readonly user_view_type: string | null;
    readonly name: string | null;
    readonly email: string | null;
    readonly location: string | null;
    readonly company: string | null;
    readonly bio: string | null;
    readonly blog: string | null;
    readonly created_at: string | null;
    readonly followers: string | null;
}