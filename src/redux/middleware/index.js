import apiMdl from './apiMdl';
import postsMdl from './postsMdl';
import usersMdl from './usersMdl';

const applicationMdl = [...apiMdl, ...postsMdl, ...usersMdl];

export default applicationMdl;