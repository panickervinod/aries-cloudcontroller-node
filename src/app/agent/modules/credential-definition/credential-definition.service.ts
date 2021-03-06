import * as request from 'superagent';

export interface ICredDefSendResponse {
  credential_definition_id: string;
}
const apiUrl = 'http://localhost:8051/';
const segment = 'credential-definitions';

export class CredentialDefinitionService {
  private _apiUrl: string;
  constructor(apiUrl: string) {
    this._apiUrl = apiUrl;
  }

  /*
    send a credential definition to the ledger. If it exists already it will
    return an existing credential definition
  */
  async sendCredentialDefinition(
    schemaId: string
  ): Promise<ICredDefSendResponse> {
    try {
      const res = await request
        .post(`${this._apiUrl}${segment}`)
        .send({ schema_id: schemaId });
      // if (!id) throw new Error('no credential id found');
      return res.body;
    } catch (err) {
      return err.message;
    }
  }

  /*
    get credential definition by id
  */
  async getCredentialDefinition(id: string) {
    try {
      const res = await request.get(`${this._apiUrl}${segment}/${id}`);
      return res.body;
    } catch (err) {
      return err.message;
    }
  }
}
