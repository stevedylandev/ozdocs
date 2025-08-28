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
          type: 'page' as const,
          name: 'Changelog',
          url: '/contracts/v5.x/changelog',
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
      children: [
        {
          type: 'page' as const,
          name: 'Quickstart',
          url: '/tools/contracts-ui-builder',
        },
        {
          type: 'page' as const,
          name: 'Networks',
          url: '/tools/contracts-ui-builder/networks',
        },
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
          name: 'Exporting and History',
          url: '/tools/contracts-ui-builder/exporting-and-history',
        },
        {
          type: 'page' as const,
          name: 'Building Adapters',
          url: '/tools/contracts-ui-builder/building-adapters',
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
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/tools/defender',
        },
        {
          type: 'folder' as const,
          name: 'Modules',
          children: [
            {
              type: 'page' as const,
              name: 'Code Inspector',
              url: '/tools/defender/module/code',
            },
            {
              type: 'page' as const,
              name: 'Audit',
              url: '/tools/defender/module/audit',
            },
            {
              type: 'page' as const,
              name: 'Deploy',
              url: '/tools/defender/module/deploy',
            },
            {
              type: 'page' as const,
              name: 'Relayers',
              url: '/tools/defender/module/relayers',
            },
            {
              type: 'page' as const,
              name: 'Monitor',
              url: '/tools/defender/module/monitor',
            },
            {
              type: 'page' as const,
              name: 'Actions',
              url: '/tools/defender/module/actions',
            },
            {
              type: 'page' as const,
              name: 'Transaction Proposals',
              url: '/tools/defender/module/transaction-proposals',
            },
            {
              type: 'page' as const,
              name: 'Address Book',
              url: '/tools/defender/module/address-book',
            },
            {
              type: 'page' as const,
              name: 'Access Control',
              url: '/tools/defender/module/access-control',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Settings',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/tools/defender/settings',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Logs',
              url: '/tools/defender/logs',
            },
            {
              type: 'page' as const,
              name: 'Notifications',
              url: '/tools/defender/settings/notifications',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Tutorials',
          children: [
            {
              type: 'page' as const,
              name: 'Deploy',
              url: '/tools/defender/tutorial/deploy',
            },
            {
              type: 'page' as const,
              name: 'Relayer',
              url: '/tools/defender/tutorial/relayer',
            },
            {
              type: 'page' as const,
              name: 'Monitor',
              url: '/tools/defender/tutorial/monitor',
            },
            {
              type: 'page' as const,
              name: 'Actions',
              url: '/tools/defender/tutorial/actions',
            },
            {
              type: 'page' as const,
              name: 'Access Control',
              url: '/tools/defender/tutorial/access-control',
            },
            {
              type: 'page' as const,
              name: 'Workflows',
              url: '/tools/defender/tutorial/workflows',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Guides',
          children: [
            {
              type: 'page' as const,
              name: 'Deploy a smart contract on a forked network',
              url: '/tools/defender/guide/forked-network',
            },
            {
              type: 'page' as const,
              name: 'Adding a complete private network',
              url: '/tools/defender/guide/private-network',
            },
            {
              type: 'page' as const,
              name: 'Relaying gasless meta-transactions',
              url: '/tools/defender/guide/meta-tx',
            },
            {
              type: 'page' as const,
              name: 'Automatic monitoring for factory clones',
              url: '/tools/defender/guide/factory-monitor',
            },
            {
              type: 'page' as const,
              name: 'Managing roles of a TimelockController',
              url: '/tools/defender/guide/timelock-roles',
            },
            {
              type: 'page' as const,
              name: 'Managing usage notifications',
              url: '/tools/defender/guide/usage-notification',
            },
            {
              type: 'page' as const,
              name: 'Setup Fireblocks integrations within Defender',
              url: '/tools/defender/guide/fireblock-defender-integration',
            },
            {
              type: 'page' as const,
              name: 'Upgrading actions dependencies',
              url: '/tools/defender/guide/upgrade-actions-dependencies',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Defender as Code',
          url: '/tools/defender/dac',
        },
        {
          type: 'page' as const,
          name: 'Remix Plugin',
          url: '/tools/defender/remix-plugin',
        },
        {
          type: 'page' as const,
          name: 'Contracts Wizard Plugin',
          url: '/tools/defender/wizard-plugin',
        },
        {
          type: 'page' as const,
          name: 'SDK and API',
          url: '/tools/defender/sdk',
        },
        {
          type: 'page' as const,
          name: 'Integrations',
          url: '/tools/defender/integrations',
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
      children: [
        {
          type: 'folder' as const,
          name: 'User Documentation',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/tools/openzeppelin-monitor/v1.x',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Quickstart',
              url: '/tools/openzeppelin-monitor/v1.x/quickstart',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Developer Documentation',
          children: [
            {
              type: 'page' as const,
              name: 'Architecture Guide',
              url: '/tools/openzeppelin-monitor/v1.x/architecture',
            },
            {
              type: 'page' as const,
              name: 'Project Structure',
              url: '/tools/openzeppelin-monitor/v1.x/project-structure',
            },
            {
              type: 'page' as const,
              name: 'RPC Client',
              url: '/tools/openzeppelin-monitor/v1.x/rpc',
            },
            {
              type: 'page' as const,
              name: 'Custom scripts',
              url: '/tools/openzeppelin-monitor/v1.x/scripts',
            },
            {
              type: 'page' as const,
              name: 'Error Handling',
              url: '/tools/openzeppelin-monitor/v1.x/error',
            },
            {
              type: 'page' as const,
              name: 'Testing',
              url: '/tools/openzeppelin-monitor/v1.x/testing',
            },
            {
              type: 'page' as const,
              name: 'Contribution guidelines',
              url: '/tools/openzeppelin-monitor/v1.x/contribution',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/openzeppelin-monitor/v1.x/changelog',
        },
        {
          type: 'page' as const,
          name: 'Technical Rust Documentation',
          url: 'https://release-v1-0-0--openzeppelin-monitor.netlify.app/openzeppelin_monitor/',
          external: true,
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'OpenZeppelin Relayer',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/tools/openzeppelin-relayer/v1.x',
        },
        {
          type: 'page' as const,
          name: 'Quickstart',
          url: '/tools/openzeppelin-relayer/v1.x/quickstart',
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
              name: 'Network Configuration',
              url: '/tools/openzeppelin-relayer/v1.x/network_configuration',
            },
            {
              type: 'page' as const,
              name: 'Storage Configuration',
              url: '/tools/openzeppelin-relayer/v1.x/configuration/storage',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'EVM Integration',
          url: '/tools/openzeppelin-relayer/v1.x/evm',
        },
        {
          type: 'page' as const,
          name: 'Solana Integration',
          url: '/tools/openzeppelin-relayer/v1.x/solana',
        },
        {
          type: 'page' as const,
          name: 'Stellar Integration',
          url: '/tools/openzeppelin-relayer/v1.x/stellar',
        },
        {
          type: 'page' as const,
          name: 'API Reference',
          url: 'https://release-v1-1-0--openzeppelin-relayer.netlify.app/api_docs.html',
          external: true,
        },
        {
          type: 'page' as const,
          name: 'Project Structure',
          url: '/tools/openzeppelin-relayer/v1.x/structure',
        },
        {
          type: 'page' as const,
          name: 'Project Roadmap',
          url: '/tools/openzeppelin-relayer/v1.x/roadmap',
        },
        {
          type: 'page' as const,
          name: 'Plugins',
          url: '/tools/openzeppelin-relayer/v1.x/plugins',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/tools/openzeppelin-relayer/v1.x/changelog',
        },
        {
          type: 'page' as const,
          name: 'Technical Rust Documentation',
          url: 'https://release-v1-1-0--openzeppelin-relayer.netlify.app/openzeppelin_relayer/',
          external: true,
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
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/cairo-contracts/v3.x',
        },
        {
          type: 'page' as const,
          name: 'Wizard',
          url: '/cairo-contracts/v3.x/wizard',
        },
        {
          type: 'folder' as const,
          name: 'Learn',
          children: [
            {
              type: 'page' as const,
              name: 'Components',
              url: '/cairo-contracts/v3.x/components',
            },
            {
              type: 'page' as const,
              name: 'Presets',
              url: '/cairo-contracts/v3.x/presets',
            },
            {
              type: 'page' as const,
              name: 'Interfaces and Dispatchers',
              url: '/cairo-contracts/v3.x/guides/interfaces-and-dispatchers',
            },
            {
              type: 'page' as const,
              name: 'Counterfactual Deployments',
              url: '/cairo-contracts/v3.x/guides/deployment',
            },
            {
              type: 'page' as const,
              name: 'SNIP12 and Typed Messages',
              url: '/cairo-contracts/v3.x/guides/snip12',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Modules',
          children: [
            {
              type: 'page' as const,
              name: 'Interfaces',
              url: '/cairo-contracts/v3.x/interfaces',
            },
            {
              type: 'folder' as const,
              name: 'Access',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/access',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/access',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Accounts',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/accounts',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/account',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Finance',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/finance',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/finance',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Governance',
              children: [
                {
                  type: 'page' as const,
                  name: 'Governor',
                  url: '/cairo-contracts/v3.x/governance/governor',
                },
                {
                  type: 'page' as const,
                  name: 'Multisig',
                  url: '/cairo-contracts/v3.x/governance/multisig',
                },
                {
                  type: 'page' as const,
                  name: 'Timelock Controller',
                  url: '/cairo-contracts/v3.x/governance/timelock',
                },
                {
                  type: 'page' as const,
                  name: 'Votes',
                  url: '/cairo-contracts/v3.x/governance/votes',
                },
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/governance',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Introspection',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/introspection',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'Migrating ERC165 to SRC5',
                  url: '/cairo-contracts/v3.x/guides/src5-migration',
                },
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/introspection',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Macros',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/macros',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'with_components',
                  url: '/cairo-contracts/v3.x/macros/with_components',
                },
                {
                  type: 'page' as const,
                  name: 'type_hash',
                  url: '/cairo-contracts/v3.x/macros/type_hash',
                },
              ],
            },
            {
              type: 'page' as const,
              name: 'Merkle Tree',
              url: '/cairo-contracts/v3.x/api/merkle-tree',
            },
            {
              type: 'folder' as const,
              name: 'Security',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/security',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/security',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Tokens',
              children: [
                {
                  type: 'folder' as const,
                  name: 'ERC20',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/cairo-contracts/v3.x/erc20',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'Creating Supply',
                      url: '/cairo-contracts/v3.x/guides/erc20-supply',
                    },
                    {
                      type: 'page' as const,
                      name: 'ERC20Permit',
                      url: '/cairo-contracts/v3.x/guides/erc20-permit',
                    },
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/cairo-contracts/v3.x/api/erc20',
                    },
                  ],
                },
                {
                  type: 'folder' as const,
                  name: 'ERC721',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/cairo-contracts/v3.x/erc721',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/cairo-contracts/v3.x/api/erc721',
                    },
                  ],
                },
                {
                  type: 'folder' as const,
                  name: 'ERC1155',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/cairo-contracts/v3.x/erc1155',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/cairo-contracts/v3.x/api/erc1155',
                    },
                  ],
                },
                {
                  type: 'folder' as const,
                  name: 'ERC4626',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/cairo-contracts/v3.x/erc4626',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/cairo-contracts/v3.x/api/erc20#ERC4626Component',
                    },
                  ],
                },
                {
                  type: 'page' as const,
                  name: 'Common',
                  url: '/cairo-contracts/v3.x/api/token_common',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Universal Deployer Contract',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/udc',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'UDC Appchain Deployment',
                  url: '/cairo-contracts/v3.x/guides/deploy-udc',
                },
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/udc',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Upgrades',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/cairo-contracts/v3.x/upgrades',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/cairo-contracts/v3.x/api/upgrades',
                },
              ],
            },
            {
              type: 'page' as const,
              name: 'Utilities',
              url: '/cairo-contracts/v3.x/api/utilities',
            },
            {
              type: 'page' as const,
              name: 'Test Utilities',
              url: '/cairo-contracts/v3.x/api/testing',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Backwards Compatibility',
          url: '/cairo-contracts/v3.x/backwards-compatibility',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Midnight Contracts',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/compact-contracts/v0.x',
        },
        {
          type: 'folder' as const,
          name: 'Learn',
          children: [
            {
              type: 'page' as const,
              name: 'ZK Circuits 101',
              url: '/compact-contracts/v0.x/zkCircuits101',
            },
            {
              type: 'page' as const,
              name: 'Extensibility',
              url: '/compact-contracts/v0.x/extensibility',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Modules',
          children: [
            {
              type: 'folder' as const,
              name: 'Access',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/compact-contracts/v0.x/access',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/compact-contracts/v0.x/api/access',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Security',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/compact-contracts/v0.x/security',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/compact-contracts/v0.x/api/security',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'Tokens',
              children: [
                {
                  type: 'folder' as const,
                  name: 'FungibleToken',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/compact-contracts/v0.x/fungibleToken',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/compact-contracts/v0.x/api/fungibleToken',
                    },
                  ],
                },
                {
                  type: 'folder' as const,
                  name: 'NonFungibleToken',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/compact-contracts/v0.x/nonFungibleToken',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/compact-contracts/v0.x/api/nonFungibleToken',
                    },
                  ],
                },
                {
                  type: 'folder' as const,
                  name: 'MultiToken',
                  index: {
                    type: 'page' as const,
                    name: 'Overview',
                    url: '/compact-contracts/v0.x/multitoken',
                  },
                  children: [
                    {
                      type: 'page' as const,
                      name: 'API Reference',
                      url: '/compact-contracts/v0.x/api/multitoken',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/stellar-contracts/v0.x/changelog',
        },
      ],
    },
            {
              type: 'folder' as const,
              name: 'Utils',
              index: {
                type: 'page' as const,
                name: 'Overview',
                url: '/compact-contracts/v0.x/utils',
              },
              children: [
                {
                  type: 'page' as const,
                  name: 'API Reference',
                  url: '/compact-contracts/v0.x/api/utils',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Confidential Contracts',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/confidential-contracts/v0.x',
        },
            {
              type: 'page' as const,
              name: 'Token',
              url: '/confidential-contracts/v0.x/token',
            },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/confidential-contracts/v0.x/changelog',
        },
        {
          type: 'folder' as const,
          name: 'API Reference',
          children: [
            {
              type: 'page' as const,
              name: 'Overview',
              url: '/confidential-contracts/v0.x/api',
            },

            {
              type: 'page' as const,
              name: 'Finance',
              url: '/confidential-contracts/v0.x/api/finance',
            },
            {
              type: 'page' as const,
              name: 'Governance',
              url: '/confidential-contracts/v0.x/api/governance',
            },
            {
              type: 'page' as const,
              name: 'Interfaces',
              url: '/confidential-contracts/v0.x/api/interfaces',
            },
            {
              type: 'page' as const,
              name: 'Token',
              url: '/confidential-contracts/v0.x/api/token',
            },
            {
              type: 'page' as const,
              name: 'Utils',
              url: '/confidential-contracts/v0.x/api/utils',
            },
          ],
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Contracts Stylus',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/contracts-stylus/v0.x',
        },
        {
          type: 'page' as const,
          name: 'Access Control',
          url: '/contracts-stylus/v0.x/access-control',
        },
        {
          type: 'page' as const,
          name: 'Cryptography',
          url: '/contracts-stylus/v0.x/crypto',
        },
        {
          type: 'page' as const,
          name: 'Finance',
          url: '/contracts-stylus/v0.x/finance',
        },
        {
          type: 'folder' as const,
          name: 'Tokens',
          children: [
            {
              type: 'page' as const,
              name: 'Overview',
              url: '/contracts-stylus/v0.x/tokens',
            },
            {
              type: 'folder' as const,
              name: 'ERC-20',
              children: [
                {
                  type: 'page' as const,
                  name: 'Overview',
                  url: '/contracts-stylus/v0.x/erc20',
                },
                {
                  type: 'page' as const,
                  name: 'Extensions',
                  url: '/contracts-stylus/v0.x/erc20#erc20-token-extensions',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'ERC-721',
              children: [
                {
                  type: 'page' as const,
                  name: 'Overview',
                  url: '/contracts-stylus/v0.x/erc721',
                },
                {
                  type: 'page' as const,
                  name: 'Extensions',
                  url: '/contracts-stylus/v0.x/erc721#erc721-token-extensions',
                },
              ],
            },
            {
              type: 'folder' as const,
              name: 'ERC-1155',
              children: [
                {
                  type: 'page' as const,
                  name: 'Overview',
                  url: '/contracts-stylus/v0.x/erc1155',
                },
                {
                  type: 'page' as const,
                  name: 'Extensions',
                  url: '/contracts-stylus/v0.x/erc1155#erc1155-token-extensions',
                },
              ],
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Proxy Patterns',
          children: [
            {
              type: 'page' as const,
              name: 'Overview',
              url: '/contracts-stylus/v0.x/proxy',
            },
            {
              type: 'page' as const,
              name: 'ERC-1967 Proxy',
              url: '/contracts-stylus/v0.x/erc1967',
            },
            {
              type: 'page' as const,
              name: 'Beacon Proxy',
              url: '/contracts-stylus/v0.x/beacon-proxy',
            },
            {
              type: 'page' as const,
              name: 'UUPS Proxy',
              url: '/contracts-stylus/v0.x/uups-proxy',
            },
          ],
        },
        {
          type: 'page' as const,
          name: 'Utilities',
          url: '/contracts-stylus/v0.x/utilities',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/contracts-stylus/v0.x/changelog',
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Stellar Contracts',
      children: [
        {
          type: 'page' as const,
          name: 'Overview',
          url: '/stellar-contracts/v0.x/'
        },
        {
          type: 'page' as const,
          name: 'Get Started',
          url: '/stellar-contracts/v0.x/get-started',
        },
        {
          type: 'folder' as const,
          name: 'Tokens',
          children: [
            {
              type: 'page' as const,
              name: 'Fungible Tokens',
              url: '/stellar-contracts/v0.x/tokens/fungible/fungible',
            },
            {
              type: 'page' as const,
              name: 'Non-Fungible Tokens',
              url: '/stellar-contracts/v0.x/tokens/non-fungible/non-fungible',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Access',
          children: [
            {
              type: 'page' as const,
              name: 'Access Control',
              url: '/stellar-contracts/v0.x/access/access-control',
            },
            {
              type: 'page' as const,
              name: 'Ownable',
              url: '/stellar-contracts/v0.x/access/ownable',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Utilities',
          children: [
            {
              type: 'page' as const,
              name: 'Pausable',
              url: '/stellar-contracts/v0.x/utils/pausable',
            },
            {
              type: 'page' as const,
              name: 'Upgradeable',
              url: '/stellar-contracts/v0.x/utils/upgradeable',
            },
            {
              type: 'page' as const,
              name: 'Cryptography',
              url: '/stellar-contracts/v0.x/utils/crypto',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Helpers',
          children: [
            {
              type: 'page' as const,
              name: 'Default Implementation Macro',
              url: '/stellar-contracts/v0.x/helpers/default-impl-macro',
            },
          ],
        },
      ],
    },
    {
      type: 'folder' as const,
      name: 'Substrate Runtimes',
      children: [
        {
                type: 'page' as const,
                name: 'Overview',
                url: '/substrate-runtimes',
              },
        {
          type: 'folder' as const,
          name: 'General Guides',
          children: [
            {
              type: 'page' as const,
              name: 'Quick Start',
              url: '/substrate-runtimes/v3.x/guides/quick_start',
            },
            {
              type: 'page' as const,
              name: 'Weights & Fees',
              url: '/substrate-runtimes/v3.x/guides/weights_fees',
            },
            {
              type: 'page' as const,
              name: 'Async Backing',
              url: '/substrate-runtimes/v3.x/guides/async_backing',
            },
            {
              type: 'page' as const,
              name: 'Sending XCM between Parachains',
              url: '/substrate-runtimes/v3.x/guides/hrmp_channels',
            },
            {
              type: 'page' as const,
              name: 'OpenZeppelin Pallet Abstractions',
              url: '/substrate-runtimes/v3.x/guides/pallet_abstractions',
            },
            {
              type: 'page' as const,
              name: 'Pay DOT as a Fee',
              url: '/substrate-runtimes/v3.x/guides/pay_dot_as_a_fee',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'EVM Template Guides',
          children: [
            {
              type: 'page' as const,
              name: 'Contract Migration',
              url: '/substrate-runtimes/v3.x/guides/contract_migration',
            },
            {
              type: 'page' as const,
              name: 'Predeployed Contracts',
              url: '/substrate-runtimes/v3.x/guides/predeployed_contracts',
            },
            {
              type: 'page' as const,
              name: 'Testing with Zombienet',
              url: '/substrate-runtimes/v3.x/guides/testing_with_zombienet',
            },
            {
              type: 'page' as const,
              name: 'RPC Differences',
              url: '/substrate-runtimes/v3.x/guides/rpc_differences',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Runtimes',
          children: [
            {
              type: 'page' as const,
              name: 'Generic Runtime',
              url: '/substrate-runtimes/v3.x/runtimes/generic',
            },
            {
              type: 'page' as const,
              name: 'EVM Runtime',
              url: '/substrate-runtimes/v3.x/runtimes/evm',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Runtime Descriptions',
          children: [
            {
              type: 'page' as const,
              name: 'XCM Executor',
              url: '/substrate-runtimes/v3.x/runtime/xcm_executor',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Pallet Specifications',
          children: [
            {
              type: 'page' as const,
              name: 'cumulus_pallet_aura_ext',
              url: '/substrate-runtimes/v3.x/pallets/aura_ext',
            },
            {
              type: 'page' as const,
              name: 'cumulus_pallet_parachain_system',
              url: '/substrate-runtimes/v3.x/pallets/parachain-system',
            },
            {
              type: 'page' as const,
              name: 'cumulus_pallet_xcmp_queue',
              url: '/substrate-runtimes/v3.x/pallets/xcmp-queue',
            },
            {
              type: 'page' as const,
              name: 'pallet_assets',
              url: '/substrate-runtimes/v3.x/pallets/assets',
            },
            {
              type: 'page' as const,
              name: 'pallet_balances',
              url: '/substrate-runtimes/v3.x/pallets/balances',
            },
            {
              type: 'page' as const,
              name: 'pallet_collator_selection',
              url: '/substrate-runtimes/v3.x/pallets/collator-selection',
            },
            {
              type: 'page' as const,
              name: 'pallet_message_queue',
              url: '/substrate-runtimes/v3.x/pallets/message-queue',
            },
            {
              type: 'page' as const,
              name: 'pallet_multisig',
              url: '/substrate-runtimes/v3.x/pallets/multisig',
            },
            {
              type: 'page' as const,
              name: 'pallet_proxy',
              url: '/substrate-runtimes/v3.x/pallets/proxy',
            },
            {
              type: 'page' as const,
              name: 'pallet_transaction_payment',
              url: '/substrate-runtimes/v3.x/pallets/transaction_payment',
            },
            {
              type: 'page' as const,
              name: 'pallet_treasury',
              url: '/substrate-runtimes/v3.x/pallets/treasury',
            },
            {
              type: 'page' as const,
              name: 'pallet_xcm',
              url: '/substrate-runtimes/v3.x/pallets/xcm',
            },
          ],
        },
        {
          type: 'folder' as const,
          name: 'Misc',
          children: [
            {
              type: 'page' as const,
              name: 'Multisig Accounts',
              url: '/substrate-runtimes/v3.x/misc/multisig-accounts',
            },
          ],
        },
         {
           type: 'folder' as const,
           name: 'Appendix',
           children: [
             {
               type: 'page' as const,
               name: 'Glossary',
               url: '/substrate-runtimes/v3.x/glossary',
             },
           ],
         },
         {
           type: 'page' as const,
           name: 'Changelog',
           url: '/substrate-runtimes/v3.x/changelog',
         },
       ],
     },
    {
      type: 'folder' as const,
      name: 'Uniswap Hooks',
      index: {
        type: 'page' as const,
        name: 'Overview',
        url: '/uniswap-hooks',
      },
      children: [
        {
          type: 'page' as const,
          name: 'Base',
          url: '/uniswap-hooks/v1.x/base',
        },
        {
          type: 'page' as const,
          name: 'Fee',
          url: '/uniswap-hooks/v1.x/fee',
        },
        {
          type: 'page' as const,
          name: 'Utilities',
          url: '/uniswap-hooks/v1.x/utilities',
        },
        {
          type: 'page' as const,
          name: 'Changelog',
          url: '/uniswap-hooks/v1.x/changelog',
        },
        {
          type: 'folder' as const,
          name: 'API',
          index: {
            type: 'page' as const,
            name: 'Overview',
            url: '/uniswap-hooks/v1.x/api',
          },
          children: [
            {
              type: 'page' as const,
              name: 'Base',
              url: '/uniswap-hooks/v1.x/api/base',
            },
            {
              type: 'page' as const,
              name: 'Fee',
              url: '/uniswap-hooks/v1.x/api/fee',
            },
            {
              type: 'page' as const,
              name: 'General',
              url: '/uniswap-hooks/v1.x/api/general',
            },
            {
              type: 'page' as const,
              name: 'Interfaces',
              url: '/uniswap-hooks/v1.x/api/interfaces',
            },
            {
              type: 'page' as const,
              name: 'Utils',
              url: '/uniswap-hooks/v1.x/api/utils',
            },
          ],
        },
      ],
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
