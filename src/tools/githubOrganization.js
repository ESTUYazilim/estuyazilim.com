import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth:
    "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",
});

export async function getChildTeams({ org, team_slug }) {
  const response = await octokit.request(
    "GET /orgs/ESTUYazilim/teams/front-end-team",
    {
      org: org,
      team_slug: team_slug,
    }
  );
  console.log(response.data);
  return response.data;
}
export async function getMembers({ org_slug }) {
  const response = await octokit.request("GET /orgs/{org_slug}/members", {
    org_slug: org_slug,
  });

  return response.data;
}
export async function getTeams({ org_slug }) {
  const response = await octokit.request("GET /orgs/{org_slug}/teams", {
    org_slug: org_slug,
  });

  return response.data;
}
export async function getInformations({ org_slug }) {
  const response = await octokit.request("GET /orgs/{org_slug}", {
    org_slug: org_slug,
  });

  return response.data;
}
export async function getRepositories({ org_slug }) {
  const response = await octokit.request("GET /orgs/{org_slug}/repos ", {
    org_slug: org_slug,
  });

  return response.data;
}
export async function getProjects({ org_slug }) {
  const response = await octokit.request("GET /orgs/{org_slug}/projects", {
    org_slug: org_slug,
  });
  console.log(response.data);
  return response.data;
}
