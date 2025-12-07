# Deployment

A [GitHub Action](https://github.com/satisfactorymodding/smr-frontend/blob/staging/.github/workflows/push-base.yml)
automatically creates packages from commits on any branch and uploads them to
[GitHub Packages](https://github.com/satisfactorymodding/smr-frontend/pkgs/container/smr-frontend).

Packages are labeled with a package tag such as `main-12655609160` using the github actions global run number.

## Staging

The `staging` branch is automatically deployed to <https://ficsit.dev>,
which connects to a separate staging backend and database.

## Production

Deployments to the live site at <https://ficsit.app> are done manually by Vilsol.
After a pull request is merged to `main`,
wait for the CI to finish creating and uploading the package,
then ping him so it can be deployed.

To find out what version is currently live, ask Vilsol to check it (at least until [#244](https://github.com/satisfactorymodding/smr-frontend/issues/244) is done).

From there, you can check <https://github.com/satisfactorymodding/smr-frontend/pkgs/container/smr-frontend/versions> to find its commit hash in the manifest labels and use GitHub web to quickly compare them.
For example, [`main-12655609160`](https://github.com/satisfactorymodding/smr-frontend/pkgs/container/smr-frontend/332561478?tag=main-12655609160) has org.opencontainers.image.revision `230252e8f6e746dfd3f64a6f7a3a2bce0664f522` which can be compared via
<https://github.com/satisfactorymodding/smr-frontend/compare/230252e8f6e746dfd3f64a6f7a3a2bce0664f522...staging>.

## Vercel

For reviewing convenience, Vercel is set up to automatically deploy test versions of PRs.
Its bot links previews in the PR conversation.
We do not use Vercel for production deployments.

<https://smr-frontend-git-staging-satisfactorymodding.vercel.app/>

## Github Pages

Github Pages also automatically deploys branches for reviewing convenience.
Although the site may partially function from there, it is not the intended way to access it.
The Vercel previews are probably more functional anyways.

Add the branch as a suffix to the end of the URL.
For example, [https://github.com/satisfactorymodding/smr-frontend/deployments/github-pages/`staging`](https://github.com/satisfactorymodding/smr-frontend/deployments/github-pages/staging)
