import { npmExec } from './exec';
import { PublishOptions, PublishResponse } from './models';

export const publish = async (path?: string, options?: PublishOptions) => {
  return npmExec<PublishResponse>(['publish', '--access', 'public', ...(options?.tag ? ['--tag', options.tag] : [])], {
    pwd: path,
    token: options?.token,
  });
};
