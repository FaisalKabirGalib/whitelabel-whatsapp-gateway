# Deployment

```sh
docker run -d --name whatsapp-gateway -p 2785:2785 -v openwa-data:/app/data ghcr.io/faisalkabirgalib/whitelabel-whatsapp-gateway:latest
docker logs whatsapp-gateway
```

The first-run API key is stored in `/app/data/.api-key`. Open `http://localhost:2785`, sign in with it, then use **Branding** to configure the client identity.

For Compose, use the same image, mount `./data:/app/data`, and expose `2785:2785`.
