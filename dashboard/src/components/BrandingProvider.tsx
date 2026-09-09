import { createContext, useContext, useEffect } from 'react';
import type { Branding } from '../services/api';
import { useBrandingQuery } from '../hooks/queries';

const defaultBranding: Branding = { productName: 'OpenWA', logoUrl: null, faviconUrl: null, primaryColor: '#25D366', accentColor: '#128C7E', loginTitle: null, loginMessage: null, websiteUrl: null, supportUrl: null, docsUrl: null, swaggerTitle: null, swaggerDescription: null };
const BrandingContext = createContext(defaultBranding);

export function BrandingProvider({ children }: { children: React.ReactNode }) {
  const { data } = useBrandingQuery();
  const branding = data ?? defaultBranding;
  useEffect(() => {
    document.documentElement.dataset.productName = branding.productName;
    document.documentElement.style.setProperty('--primary', branding.primaryColor);
    document.documentElement.style.setProperty('--primary-hover', branding.accentColor);
    const [page] = document.title.split(' | ');
    document.title = page === 'OpenWA' ? branding.productName : `${page} | ${branding.productName}`;
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (icon && branding.faviconUrl) icon.href = branding.faviconUrl;
  }, [branding]);
  return <BrandingContext.Provider value={branding}>{children}</BrandingContext.Provider>;
}

export function useBranding() { return useContext(BrandingContext); }
