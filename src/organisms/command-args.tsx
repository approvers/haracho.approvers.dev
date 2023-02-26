import React, { ReactNode } from 'react';

import { VersionBadge } from '../molecules/version-badge';

export interface CommandArg {
  name: string;
  about: ReactNode;
  versionAvailableFrom?: string;
  defaultValue?: string;
}

export interface CommandArgsProps {
  versionAvailableFrom: string;
  commandName: string;
  args?: readonly CommandArg[];
}

const CommandArg = ({
  name,
  about,
  versionAvailableFrom,
  defaultValue
}: CommandArg) => (
  <>
    <code>{name}</code>
    {': '}
    {about}
    <ul>
      {versionAvailableFrom && (
        <li>
          <VersionBadge>{versionAvailableFrom}</VersionBadge> から利用可能
        </li>
      )}
      {defaultValue && (
        <li>
          デフォルト値: <code>{defaultValue}</code>
        </li>
      )}
    </ul>
  </>
);

export const buildCommandFormat = (
  commandName: string,
  args?: readonly CommandArg[]
): string => {
  let formatted = '!' + commandName;
  if (args) {
    for (const arg of args) {
      formatted += ' ';
      if (arg.defaultValue === undefined) {
        formatted += `<${arg.name}>`;
      } else {
        formatted += `[${arg.name}=${arg.defaultValue}]`;
      }
    }
  }
  return formatted;
};

export const CommandArgs = ({
  versionAvailableFrom,
  commandName,
  args
}: CommandArgsProps) => (
  <>
    <VersionBadge>{versionAvailableFrom}</VersionBadge> から利用可能
    <h2>
      <code>{buildCommandFormat(commandName, args)}</code>
    </h2>
    {args && (
      <ul>
        {args.map((arg) => (
          <li key={arg.name}>
            <CommandArg {...arg} />
          </li>
        ))}
      </ul>
    )}
  </>
);
