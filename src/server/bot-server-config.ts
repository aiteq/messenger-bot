export interface BotServerConfig {
	accessToken: string;
	verifyToken: string;
	appSecret: string;
	webhookPath?: string;
	extensionsPath?: string;
	port?: number | string;
	name?: string;
}