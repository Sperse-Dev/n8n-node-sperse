import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class SperseApi implements ICredentialType {
	name = 'sperseApi';

	displayName = 'Sperse API';

	documentationUrl = 'https://example.com/docs/auth';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'options',
			default: 'https://app.sperse.com',
			description: 'Select the Base URL for Sperse API',
			options: [
				{
					name: 'Sperse Live (app.sperse.com)',
					value: 'https://app.sperse.com',
				},
				{
					name: 'Sperse Beta (beta.sperse.com)',
					value: 'https://beta.sperse.com',
				},
				{
					name: 'Sperse Beta (testadmin.sperse.com)',
					value: 'https://testadmin.sperse.com',
				},
			],
		},
		{
			displayName: 'Secret API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: `
				Follow these instructions to get your Sperse API Key:

				1. Visit the following website: https://app.sperse.com/, or the beta website: https://beta.sperse.com, or the test website: https://testadmin.sperse.com
				2. Once on the website, locate and click on the admin to obtain your sperse API Key.
			`,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'api-key': '={{$credentials.apiKey}}',
			},
		},
	};
}
