import { Octokit } from "@octokit/rest";
import executiveStaff from "../configuration/executive_staff.json";

const org_slug = process.env.REACT_APP_ORG_SLUG;
const github_auth = process.env.REACT_APP_GITHUB_AUTH;

const octokit = new Octokit({
  auth: github_auth,
});

export async function getMembers() {
  const response = await octokit.request(`GET /orgs/${org_slug}/members`, {
    org_slug: org_slug,
  });

  return response.data;
}

export async function getTeams() {
  const response = await octokit.request(`GET /orgs/${org_slug}/teams`, {
    org_slug: org_slug,
  });

  return response.data;
}

export async function getInformations() {
  const response = await octokit.request(`GET /orgs/${org_slug}`, {
    org_slug: org_slug,
  });

  return response.data;
}

export async function getRepositories() {
  const response = await octokit.request(`GET /orgs/${org_slug}/repos `, {
    org_slug: org_slug,
  });

  return response.data;
}

export async function getProjects() {
  const response = await octokit.request(`GET /orgs/${org_slug}/projects`, {
    org_slug: org_slug,
  });

  return response.data;
}

export async function getExecutiveStaff() {
  const map = new Map();

  const staff = Object.keys(executiveStaff);

  for (const key of staff) {
    const value = executiveStaff[key];

    const response = await octokit.request(`GET /users/${value}`);

    map.set(key, response.data);
  }

  return map;
}