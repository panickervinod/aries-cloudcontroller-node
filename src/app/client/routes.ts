import relationshipsController from './relationships/relationships.controller';
import invitationsController from './invitations/invitations.controller';
import credDefController from './cred-defs/cred-def.controller';

export const clientRoutes = [
  relationshipsController.routes(),
  invitationsController.routes(),
  credDefController.routes()
];

export const clientMethods = [
  relationshipsController.allowedMethods(),
  invitationsController.allowedMethods(),
  credDefController.allowedMethods()
];
