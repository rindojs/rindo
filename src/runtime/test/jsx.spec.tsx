import { Component, Fragment, h, Host, Prop, State } from '@rindo/core';
import { newSpecPage } from '@rindo/core/testing';

import { FunctionalComponent } from '../../declarations';

describe('jsx', () => {
  it('Fragment', async () => {
    @Component({ tag: 'cmp-a' })
    class CmpA {
      render() {
        return (
          <>
            <div>A</div>
            <div>B</div>
          </>
        );
      }
    }

    const { root } = await newSpecPage({
      components: [CmpA],
      html: `<cmp-a></cmp-a>`,
    });

    expect(root).toEqualHtml(`
      <cmp-a>
        <div>
          A
        </div>
        <div>
          B
        </div>
      </cmp-a>
    `);
  });

  it('render template', async () => {
    @Component({ tag: 'cmp-a' })
    class CmpA {
      @Prop() complexProp: any;
      render() {
        return <div>The answer is: {this.complexProp.value}</div>;
      }
    }

    const OBJECT = { value: 42 };
    const MyFunctionalCmp = () => <cmp-a complexProp={OBJECT}></cmp-a>;

    const { root } = await newSpecPage({
      components: [CmpA],
      template: () => <MyFunctionalCmp />,
    });

    expect(root).toEqualHtml(`
      <cmp-a>
        <div>
          The answer is: 42
        </div>
      </cmp-a>
    `);
  });

  it('functional cmp with default props', async () => {
    interface FunctionalCmpProps {
      first?: string;
      last?: string;
    }
    const FunctionalCmp: FunctionalComponent<FunctionalCmpProps> = ({ first = 'Kim', last = 'Doe' }) => (
      <div>
        Hi, my name is {first} {last}.
      </div>
    );

    @Component({ tag: 'cmp-a' })
    class CmpA {
      render() {
        return <FunctionalCmp />;
      }
    }

    const { root } = await newSpecPage({
      components: [CmpA],
      html: '<cmp-a></cmp-a>',
    });

    expect(root).toEqualHtml(`
      <cmp-a>
        <div>
          Hi, my name is Kim Doe.
        </div>
      </cmp-a>
    `);
  });

  describe('event', () => {
    @Component({ tag: 'cmp-a' })
    class CmpA {
      @State() lastEvent: any;
      render() {
        return (
          <Host
            onClick={() => (this.lastEvent = 'onClick')}
            on-Click={() => (this.lastEvent = 'on-Click')}
            on-scroll={() => (this.lastEvent = 'on-scroll')}
            onFmlChange={() => (this.lastEvent = 'onFmlChange')}
            on-FmlChange={() => (this.lastEvent = 'on-FmlChange')}
            on-ALLCAPS={() => (this.lastEvent = 'on-ALLCAPS')}
          >
            {this.lastEvent}
          </Host>
        );
      }
    }

    it('click', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('click'));
      await waitForChanges();
      expect(root.textContent).toBe('onClick');
    });

    it('Click', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('Click'));
      await waitForChanges();
      expect(root.textContent).toBe('on-Click');
    });

    it('scroll', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('scroll'));
      await waitForChanges();
      expect(root.textContent).toBe('on-scroll');
    });
    it('fmlChange', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('fmlChange'));
      await waitForChanges();
      expect(root.textContent).toBe('onFmlChange');
    });
    it('FmlChange', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('FmlChange'));
      await waitForChanges();
      expect(root.textContent).toBe('on-FmlChange');
    });
    it('ALLCAPS', async () => {
      const { root, waitForChanges } = await newSpecPage({
        components: [CmpA],
        html: `<cmp-a></cmp-a>`,
      });
      root.dispatchEvent(new CustomEvent('ALLCAPS'));
      await waitForChanges();
      expect(root.textContent).toBe('on-ALLCAPS');
    });
  });
});
