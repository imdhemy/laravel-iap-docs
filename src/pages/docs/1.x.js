import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function VersionRedirectPage() {
  const {siteConfig} = useDocusaurusContext();
  const {docsIntroPath} = siteConfig.customFields;

  useEffect(() => {
    window.location.replace(docsIntroPath);
  }, [docsIntroPath]);

  return null;
}
