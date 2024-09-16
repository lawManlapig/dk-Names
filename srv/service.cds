namespace dk.srv;

using dk.db as schema from '../db/schema';

service NamesService {
    @odata.draft.enabled
    entity Names as projection on schema.Names;
};
