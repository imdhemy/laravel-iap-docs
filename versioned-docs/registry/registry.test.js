const test = require('node:test');
const assert = require('node:assert/strict');

const rawVersions = require('../versions');
const createRegistryConfig = require('./registry');

test('registry config derives versioned docs settings from raw declarations', () => {
  const registryConfig = createRegistryConfig();
  const {customFields, docsPlugins, search} = registryConfig;
  const {docPathManifest, latestVersion, versions} = customFields;

  assert.deepEqual(rawVersions, [
    {
      version: '1.x',
      introDocId: 'intro',
      fallbackDocId: 'intro',
      quickStartDocId: 'get-started/installation',
    },
  ]);

  assert.deepEqual(versions, [
    {
      slug: '1.x',
      label: '1.x',
      routeBasePath: 'docs/1.x',
      introDocId: 'intro',
      fallbackDocId: 'intro',
    },
  ]);

  assert.equal(docPathManifest['1.x'].includes('intro'), true);
  assert.equal(
    docPathManifest['1.x'].includes('get-started/installation'),
    true,
  );

  assert.deepEqual(search.searchContextByPaths, [
    {label: '1.x', path: 'docs/1.x'},
  ]);
  assert.deepEqual(search.docsRouteBasePath, ['docs/1.x']);

  assert.equal(docsPlugins.length, 1);
  assert.equal(docsPlugins[0][1].routeBasePath, 'docs/1.x');
  assert.equal(docsPlugins[0][1].id, undefined);
  assert.equal(docsPlugins[0][1].sidebarPath, undefined);

  assert.equal(latestVersion, '1.x');
  assert.equal(rawVersions.at(-1)?.version, latestVersion);
  assert.equal(versions.at(-1)?.slug, latestVersion);

  assert.equal(customFields.docsIntroPath, '/docs/1.x/intro');
  assert.equal(customFields.docsQuickStartPath, '/docs/1.x/get-started/installation');
});
