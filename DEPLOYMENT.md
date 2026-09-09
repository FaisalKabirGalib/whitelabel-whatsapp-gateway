# Deploy RelayWapp WhatsApp Gateway

```sh
docker run -d --name whatsapp-gateway -p 2785:2785 -v openwa-data:/app/data ghcr.io/faisalkabirgalib/whitelabel-whatsapp-gateway:latest
docker logs whatsapp-gateway
```

The first-run API key is stored in `/app/data/.api-key`. **A fresh install still displays the OpenWA product identity by default.** Open `http://localhost:2785`, sign in with the key, then configure and **save** **Branding** to change the visible identity to RelayWapp or your own product identity.

For Compose, use `ghcr.io/faisalkabirgalib/whitelabel-whatsapp-gateway:latest`, mount `./data:/app/data`, and expose `2785:2785`. The `openwa-data` volume name is retained for runtime compatibility.
