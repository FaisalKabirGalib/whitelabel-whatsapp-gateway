import { useEffect, useState } from 'react';
import { useBranding } from '../components/BrandingProvider';
import { useUpdateBrandingMutation } from '../hooks/queries';
import { useToast } from '../hooks/useToast';
import './Branding.css';

export function Branding() {
  const branding = useBranding();
  const update = useUpdateBrandingMutation();
  const toast = useToast();
  const [form, setForm] = useState(branding);
  useEffect(() => setForm(branding), [branding]);
  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    try { await update.mutateAsync(form); toast.success('Branding saved'); } catch (error) { toast.error('Could not save branding', error instanceof Error ? error.message : 'Unknown error'); }
  };
  const fields: Array<[keyof typeof form, string, string]> = [['productName', 'Product name', 'text'], ['logoUrl', 'Logo URL', 'url'], ['faviconUrl', 'Favicon URL', 'url'], ['primaryColor', 'Primary color', 'color'], ['accentColor', 'Accent color', 'color'], ['loginTitle', 'Login title', 'text'], ['loginMessage', 'Login message', 'text'], ['websiteUrl', 'Website URL', 'url'], ['supportUrl', 'Support URL', 'url'], ['docsUrl', 'Documentation URL', 'url'], ['swaggerTitle', 'API documentation title', 'text'], ['swaggerDescription', 'API documentation description', 'text']];
  return <div className="branding-page"><h1>Branding</h1><p>Changes apply to the dashboard immediately and persist across restarts.</p><form onSubmit={save} className="branding-form">{fields.map(([key, label, type]) => <label key={key}>{label}<input type={type} value={form[key] ?? ''} onChange={event => setForm({ ...form, [key]: event.target.value || null })} required={key === 'productName'} /></label>)}<button type="submit" className="primary-btn" disabled={update.isPending}>{update.isPending ? 'Saving...' : 'Save branding'}</button></form></div>;
}
