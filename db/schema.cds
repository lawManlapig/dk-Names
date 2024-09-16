namespace dk.db;

using {cuid} from '@sap/cds/common';

entity Names : cuid {
    firstname : String;
    lastname  : String;
};
