import { mockCompilerSystem } from '@rindo/core/testing';

import { createSystem } from '../../compiler/sys/rindo-sys';
import { defaultConfig, readConfig, updateConfig, writeConfig } from '../family-config';
import { UUID_REGEX } from '../telemetry/helpers';

const UUID1 = '5588e0f0-02b5-4afa-8194-5d8f78683b36';
const UUID2 = 'e5609819-5c24-4fa2-8817-e05ca10b8cae';

describe('readConfig', () => {
  const sys = mockCompilerSystem();

  beforeEach(async () => {
    await sys.removeFile(defaultConfig(sys));
  });

  it('should create a file if it does not exist', async () => {
    const result = await sys.stat(defaultConfig(sys));

    // expect the file to have been deleted by the test setup
    expect(result.isFile).toBe(false);

    const config = await readConfig(sys);

    expect(Object.keys(config).join()).toBe('tokens.telemetry,telemetry.rindo');
  });

  it("should fix the telemetry token if it's a string, but an invalid UUID", async () => {
    await writeConfig(sys, { 'telemetry.rindo': true, 'tokens.telemetry': 'aaaa' });

    const result = await sys.stat(defaultConfig(sys));

    expect(result.isFile).toBe(true);

    const config = await readConfig(sys);

    expect(Object.keys(config).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(config['telemetry.rindo']).toBe(true);
    expect(config['tokens.telemetry']).toMatch(UUID_REGEX);
  });

  it('handles a non-string telemetry token', async () => {
    // our typings state that `tokens.telemetry` is of type `string | undefined`, but technically this value could be
    // anything. use `undefined` to make the typings happy (this should cover all non-string telemetry tokens). the
    // important thing here is that the value is _not_ a string for this test!
    await writeConfig(sys, { 'telemetry.rindo': true, 'tokens.telemetry': undefined });

    const config = await readConfig(sys);

    expect(Object.keys(config).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(config['telemetry.rindo']).toBe(true);
    expect(config['tokens.telemetry']).toMatch(UUID_REGEX);
  });

  it('handles a non-existent telemetry token', async () => {
    await writeConfig(sys, { 'telemetry.rindo': true });

    const config = await readConfig(sys);

    expect(Object.keys(config).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(config['telemetry.rindo']).toBe(true);
    expect(config['tokens.telemetry']).toMatch(UUID_REGEX);
  });

  it('should read a file if it exists', async () => {
    await writeConfig(sys, { 'telemetry.rindo': true, 'tokens.telemetry': UUID1 });

    const result = await sys.stat(defaultConfig(sys));

    expect(result.isFile).toBe(true);

    const config = await readConfig(sys);

    expect(Object.keys(config).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(config['telemetry.rindo']).toBe(true);
    expect(config['tokens.telemetry']).toBe(UUID1);
  });
});

describe('updateConfig', () => {
  const sys = createSystem();

  it('should edit a file', async () => {
    await writeConfig(sys, { 'telemetry.rindo': true, 'tokens.telemetry': UUID1 });

    const result = await sys.stat(defaultConfig(sys));

    expect(result.isFile).toBe(true);

    const configPre = await readConfig(sys);

    expect(typeof configPre).toBe('object');
    expect(Object.keys(configPre).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(configPre['telemetry.rindo']).toBe(true);
    expect(configPre['tokens.telemetry']).toBe(UUID1);

    await updateConfig(sys, { 'telemetry.rindo': false, 'tokens.telemetry': UUID2 });

    const configPost = await readConfig(sys);

    expect(typeof configPost).toBe('object');
    // Should keep the previous order
    expect(Object.keys(configPost).join()).toBe('telemetry.rindo,tokens.telemetry');
    expect(configPost['telemetry.rindo']).toBe(false);
    expect(configPost['tokens.telemetry']).toBe(UUID2);
  });
});
