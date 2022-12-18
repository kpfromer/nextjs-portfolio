import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@utils/gtag';

export function useGoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}
