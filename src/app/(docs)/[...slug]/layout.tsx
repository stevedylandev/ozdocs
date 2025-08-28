import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

const manualTree = {
  name: 'Docs',
  children: [
    {
      type: 'separator' as const,
      name: 'Contracts',
    },
    {
      type: 'folder' as const,
      name: 'Contracts',
      index: {
        type: 'page' as const,
        name: 'v5.x',
        url: '/contracts/v5.x',
      },
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/contracts/v5.x',
        },
        {
          type: 'page' as const,
          name: 'Wizard',
          url: '/contracts/v5.x/wizard',
        },
        {
          type: 'page' as const,
          name: 'Extending Contracts',
          url: '/contracts/v5.x/extending-contracts',
        },
        {
          type: 'page' as const,
          name: 'Using with Upgrades',
          url: '/contracts/v5.x/upgradeable',
        },
        {
          type: 'page' as const,
          name: 'Backwards Compatibility',
          url: '/contracts/v5.x/backwards-compatibility',
        },
        {
          type: 'page' as const,
          name: 'Access Control',
          url: '/contracts/v5.x/access-control',
        },
        {
          type: 'folder' as const,
          name: 'Account Abstraction',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/contracts/v5.x/account-abstraction',
          },
          children: [
            {
              type: 'folder' as const,
              name: 'Accounts',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/contracts/v5.x/accounts',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'EOA Delegation',
                  url: '/contracts/v5.x/eoa-delegation',
                },
                {
                  type: 'page' as const,
                  name: 'Multisig',
                  url: '/contracts/v5.x/multisig',
                },
              ],
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Tokens',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/contracts/v5.x/tokens',
          },
          children: [
            {
              type: 'folder' as const,
              name: 'ERC-20',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/contracts/v5.x/erc20',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'Creating Supply',
                  url: '/contracts/v5.x/erc20-supply',
                },
              ],
            },
            {
              type: 'page' as const,
              name: 'ERC-721',
              url: '/contracts/v5.x/erc721',
            },
            {
              type: 'page' as const,
              name: 'ERC-1155',
              url: '/contracts/v5.x/erc1155',
            },
            {
              type: 'page' as const,
              name: 'ERC-4626',
              url: '/contracts/v5.x/erc4626',
            },
            {
              type: 'page' as const,
              name: 'ERC-6909',
              url: '/contracts/v5.x/erc6909',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Governance',
          url: '/contracts/v5.x/governance',
        },
        {
          type: 'page' as const,
          name: 'Utilities',
          url: '/contracts/v5.x/utilities',
        },
        {
          type: 'page' as const,
          name: 'FAQ',
          url: '/contracts/v5.x/faq',
        },
        {
          type: 'folder' as const,
          name: 'API Reference',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/contracts/v5.x/api',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Access',
              url: '/contracts/v5.x/api/access',
            },
            {
              type: 'page' as const,
              name: 'Account',
              url: '/contracts/v5.x/api/account',
            },
            {
              type: 'page' as const,
              name: 'Finance',
              url: '/contracts/v5.x/api/finance',
            },
            {
              type: 'page' as const,
              name: 'Governance',
              url: '/contracts/v5.x/api/governance',
            },
            {
              type: 'page' as const,
              name: 'Interfaces',
              url: '/contracts/v5.x/api/interfaces',
            },
            {
              type: 'page' as const,
              name: 'Meta Transactions',
              url: '/contracts/v5.x/api/metatx',
            },
            {
              type: 'page' as const,
              name: 'Proxy',
              url: '/contracts/v5.x/api/proxy',
            },
            {
              type: 'folder' as const,
              name: 'Token',
              children: [
                {
                  type: 'page' as const,
                  name: 'Common',
                  url: '/contracts/v5.x/api/token/common',
                },
                {
                  type: 'page' as const,
                  name: 'ERC20',
                  url: '/contracts/v5.x/api/token/ERC20',
                },
                {
                  type: 'page' as const,
                  name: 'ERC721',
                  url: '/contracts/v5.x/api/token/ERC721',
                },
                {
                  type: 'page' as const,
                  name: 'ERC1155',
                  url: '/contracts/v5.x/api/token/ERC1155',
                },
                {
                  type: 'page' as const,
                  name: 'ERC6909',
                  url: '/contracts/v5.x/api/token/ERC6909',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Utils',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/contracts/v5.x/api/utils',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'Cryptography',
                  url: '/contracts/v5.x/api/utils/cryptography',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Community Contracts',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/community-contracts/v1.x',
      },
      children: [
        {
          type: 'folder' as const,
          name: 'Account Abstraction',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/contracts/v5.x/account-abstraction',
          },
          children: [
            {
              type: 'folder' as const,
              name: 'Accounts',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/contracts/v5.x/accounts',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'Modules',
                  url: '/community-contracts/v1.x/account-modules',
                },
              ],
            },
            {
              type: 'page' as const,
              name: 'Paymasters',
              url: '/community-contracts/v1.x/paymasters',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Crosschain',
          url: '/community-contracts/v1.x/crosschain',
        },
        {
          type: 'page' as const,
          name: 'Utilities',
          url: '/community-contracts/v1.x/utilities',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Upgrade Plugins',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/upgrade-plugins',
      },
      children: [
        {
          type: 'folder' as const,
          name: 'Using with Hardhat',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/upgrade-plugins/hardhat-upgrades',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Network Files',
              url: '/upgrade-plugins/network-files',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Using with Foundry',
          url: '/upgrade-plugins/foundry/foundry-upgrades',
        },
        {
          type: 'page' as const,
          name: 'Writing Upgradeable Contracts',
          url: '/upgrade-plugins/writing-upgradeable',
        },
        {
          type: 'page' as const,
          name: 'Proxy Upgrade Pattern',
          url: '/upgrade-plugins/proxies',
        },
        {
          type: 'page' as const,
          name: 'Frequently Asked Questions',
          url: '/upgrade-plugins/faq',
        },
        {
          type: 'separator' as const,
          name: 'API Reference',
        },
        {
          type: 'page' as const,
          name: 'Hardhat Upgrades API',
          url: '/upgrade-plugins/api-hardhat-upgrades',
        },
        {
          type: 'page' as const,
          name: 'Foundry Upgrades API',
          url: '/upgrade-plugins/foundry/api/api-foundry-upgrades',
        },
        {
          type: 'page' as const,
          name: 'Upgrades Core & CLI',
          url: '/upgrade-plugins/api-core',
        },
      ],
    },
    {
      type: 'separator' as const,
      name: 'Tools',
    },
    {
      type: 'page' as const,
      name: 'Wizard',
      url: '/tools/wizard',
    },
    {
      type: 'folder' as const,
      name: 'Contracts UI Builder',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/tools/contracts-ui-builder',
      },
      children: [
        {
          type: 'page' as const,
          name: 'Loading Contracts',
          url: '/tools/contracts-ui-builder/loading-contracts',
        },
        {
          type: 'page' as const,
          name: 'Functions',
          url: '/tools/contracts-ui-builder/functions',
        },
        {
          type: 'page' as const,
          name: 'Customization',
          url: '/tools/contracts-ui-builder/customization',
        },
        {
          type: 'page' as const,
          name: 'Networks',
          url: '/tools/contracts-ui-builder/networks',
        },
        {
          type: 'page' as const,
          name: 'Building Adapters',
          url: '/tools/contracts-ui-builder/building-adapters',
        },
        {
          type: 'page' as const,
          name: 'Exporting and History',
          url: '/tools/contracts-ui-builder/exporting-and-history',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/contracts-ui-builder/changelog',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Defender',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/tools/defender',
      },
      children: [
        {
          type: 'page' as const,
          name: 'SDK',
          url: '/tools/defender/sdk',
        },
        {
          type: 'page' as const,
          name: 'Settings',
          url: '/tools/defender/settings',
        },
        {
          type: 'page' as const,
          name: 'Logs',
          url: '/tools/defender/logs',
        },
        {
          type: 'page' as const,
          name: 'Integrations',
          url: '/tools/defender/integrations',
        },
        {
          type: 'page' as const,
          name: 'DAC',
          url: '/tools/defender/dac',
        },
        {
          type: 'page' as const,
          name: 'Remix Plugin',
          url: '/tools/defender/remix-plugin',
        },
        {
          type: 'page' as const,
          name: 'Wizard Plugin',
          url: '/tools/defender/wizard-plugin',
        },
        {
          type: 'page' as const,
          name: 'FAQ',
          url: '/tools/defender/faq',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/defender/changelog',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'OpenZeppelin Monitor',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/tools/openzeppelin-monitor',
      },
      children: [
        {
          type: 'page' as const,
          name: 'Quickstart',
          url: '/tools/openzeppelin-monitor/v1.x/quickstart',
        },
        {
          type: 'page' as const,
          name: 'Architecture',
          url: '/tools/openzeppelin-monitor/v1.x/architecture',
        },
        {
          type: 'page' as const,
          name: 'Project Structure',
          url: '/tools/openzeppelin-monitor/v1.x/project-structure',
        },
        {
          type: 'page' as const,
          name: 'Scripts',
          url: '/tools/openzeppelin-monitor/v1.x/scripts',
        },
        {
          type: 'page' as const,
          name: 'Testing',
          url: '/tools/openzeppelin-monitor/v1.x/testing',
        },
        {
          type: 'page' as const,
          name: 'RPC',
          url: '/tools/openzeppelin-monitor/v1.x/rpc',
        },
        {
          type: 'page' as const,
          name: 'Error',
          url: '/tools/openzeppelin-monitor/v1.x/error',
        },
        {
          type: 'page' as const,
          name: 'Contribution',
          url: '/tools/openzeppelin-monitor/v1.x/contribution',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/openzeppelin-monitor/v1.x/changelog',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'OpenZeppelin Relayer',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/tools/openzeppelin-relayer',
      },
      children: [
        {
          type: 'page' as const,
          name: 'Quickstart',
          url: '/tools/openzeppelin-relayer/v1.x/quickstart',
        },
        {
          type: 'page' as const,
          name: 'Structure',
          url: '/tools/openzeppelin-relayer/v1.x/structure',
        },
        {
          type: 'folder' as const,
          name: 'Configuration',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/tools/openzeppelin-relayer/v1.x/configuration',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Signers',
              url: '/tools/openzeppelin-relayer/v1.x/configuration/signers',
            },
            {
              type: 'page' as const,
              name: 'Storage',
              url: '/tools/openzeppelin-relayer/v1.x/configuration/storage',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Network Configuration',
          url: '/tools/openzeppelin-relayer/v1.x/network_configuration',
        },
        {
          type: 'page' as const,
          name: 'Plugins',
          url: '/tools/openzeppelin-relayer/v1.x/plugins',
        },
        {
          type: 'page' as const,
          name: 'EVM',
          url: '/tools/openzeppelin-relayer/v1.x/evm',
        },
        {
          type: 'page' as const,
          name: 'Solana',
          url: '/tools/openzeppelin-relayer/v1.x/solana',
        },
        {
          type: 'page' as const,
          name: 'Stellar',
          url: '/tools/openzeppelin-relayer/v1.x/stellar',
        },
        {
          type: 'page' as const,
          name: 'Roadmap',
          url: '/tools/openzeppelin-relayer/v1.x/roadmap',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/openzeppelin-relayer/v1.x/changelog',
        },
      ],
    },
    {
      type: 'separator' as const,
      name: 'Ecosystems',
    },
    {
      type: 'folder' as const,
      name: 'Cairo Contracts',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/cairo-contracts',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Compact Contracts',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/compact-contracts',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Confidential Contracts',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/confidential-contracts',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Contracts Stylus',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/contracts-stylus',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Stellar Contracts',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/stellar-contracts',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Substrate Runtimes',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/substrate-runtimes',
      },
      children: [],
    },
    {
      type: 'folder' as const,
      name: 'Uniswap Hooks',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/uniswap-hooks',
      },
      children: [],
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={manualTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
