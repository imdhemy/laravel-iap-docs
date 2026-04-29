import {useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, '');

const buildDocsContentPath = ({version, docPath}) =>
  `/${trimSlashes(version.routeBasePath)}/${trimSlashes(docPath)}`;

const parseCurrentVersion = ({currentPathname, versions, latestVersion}) => {
  const normalizedPath = trimSlashes(currentPathname);
  const matchedVersion = versions.find(
    ({routeBasePath}) =>
      normalizedPath === trimSlashes(routeBasePath) ||
      normalizedPath.startsWith(`${trimSlashes(routeBasePath)}/`),
  );

  return (
    matchedVersion ??
    versions.find(({slug}) => slug === latestVersion) ??
    versions[0]
  );
};

const parseCurrentDocPath = ({currentPathname, currentVersion}) => {
  const normalizedPath = trimSlashes(currentPathname);
  const normalizedRouteBasePath = trimSlashes(currentVersion.routeBasePath);

  if (
    normalizedPath !== normalizedRouteBasePath &&
    !normalizedPath.startsWith(`${normalizedRouteBasePath}/`)
  ) {
    return null;
  }

  return trimSlashes(normalizedPath.slice(normalizedRouteBasePath.length)) || null;
};

const resolveVersionSwitchTarget = ({
  availableDocPathsByVersion,
  currentPathname,
  currentVersion,
  targetVersion,
}) => {
  const currentDocPath = parseCurrentDocPath({
    currentPathname,
    currentVersion,
  });
  const targetDocPaths = new Set(
    availableDocPathsByVersion[targetVersion.slug] ?? [],
  );
  const targetDocPath =
    currentDocPath && targetDocPaths.has(currentDocPath)
      ? currentDocPath
      : trimSlashes(targetVersion.fallbackDocId);

  return buildDocsContentPath({
    version: targetVersion,
    docPath: targetDocPath,
  });
};

export const useVersionSwitchTargets = () => {
  const {pathname} = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const {versions, latestVersion, docPathManifest} = siteConfig.customFields;
  const [manifest, setManifest] = useState(docPathManifest);
  const currentVersion = parseCurrentVersion({
    currentPathname: pathname,
    versions,
    latestVersion,
  });

  useEffect(() => {
    setManifest(docPathManifest);
  }, [docPathManifest]);

  return {
    currentVersion: currentVersion.label,
    items: versions.map((version) => ({
      href: resolveVersionSwitchTarget({
        availableDocPathsByVersion: manifest,
        currentPathname: pathname,
        currentVersion,
        targetVersion: version,
      }),
      label: version.label,
    })),
  };
};
