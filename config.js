/**
 * Configuracao do aplicativo Prisma.
 * O client key do TikTok e publico; o client secret fica apenas no backend.
 */
window.PRISMA_CONFIG = {
  // Endereco do backend (API) do aplicativo
  apiBase: 'https://3000-i4s81c9nxmukjsuo69an1-89b66062.us1.manus.computer',

  // Client key do app TikTok (Sandbox enquanto o app nao estiver aprovado)
  clientKey: 'awv97n8vujxalyd6',

  // Escopos solicitados na autorizacao (devem existir no app do portal)
  scopes: 'user.info.profile,user.info.stats,video.list,video.upload'
};