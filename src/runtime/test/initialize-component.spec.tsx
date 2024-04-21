import { getHostRef } from '@platform';
import { Component } from '@rindo/core';
import { newSpecPage } from '@rindo/core/testing';

import { HOST_FLAGS } from '../../utils';

describe('initialize component', () => {
  @Component({
    tag: 'cmp-a',
  })
  class CmpA {}

  it('should mark the component as initialized', async () => {
    const page = await newSpecPage({
      components: [CmpA],
      html: `<cmp-a><cmp-a>`,
    });

    const hostFlags = getHostRef(page.root).$flags$;
    expect(hostFlags & HOST_FLAGS.hasInitializedComponent).toBe(HOST_FLAGS.hasInitializedComponent);
  });
});
