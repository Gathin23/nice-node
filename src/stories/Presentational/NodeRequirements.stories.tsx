import { Meta } from '@storybook/react';

import NodeRequirements from '../../renderer/Presentational/NodeRequirements/NodeRequirements';

export default {
  title: 'Presentational/NodeRequirements',
  component: NodeRequirements,
} as Meta<typeof NodeRequirements>;

export const Primary = {
  args: {
    nodeRequirements: {
      documentationUrl: 'https://www.nicenode.xyz/#requirements',
      description:
        'Your system is checked with the recommended requirements for the selected clients. You are able to launch a node with lower specifications but expect some hickups now and then.',
      cpu: {
        cores: 4,
        minSpeedGHz: 2.4,
      },
      memory: {
        minSizeGBs: 8000,
      },
      storage: {
        minSizeGBs: 1000,
        minWriteSpeedMBps: 400,
        ssdRequired: true,
      },
      internet: {
        minDownloadSpeedMbps: 25,
        minUploadSpeedMbps: 3,
      },
      docker: {
        required: true,
        minVersion: '20.10',
      },
    },
    systemData: {
      blockDevices: [],
      fsSize: [],
      version: '5.11.15',
      system: {
        manufacturer: 'Apple Inc.',
        model: 'MacBookPro18,1',
        version: '',
        serial: 'ABCDEFGH',
        uuid: '1234567-a1b2c-34gz-345g-453gsfd3',
        sku: '',
        virtual: false,
      },
      bios: {
        vendor: 'Apple Inc.',
        version: '7459.141.1',
        releaseDate: '',
        revision: '',
      },
      baseboard: {
        manufacturer: 'Apple Inc.',
        model: 'MacBookPro18,1',
        version: '',
        serial: 'ABCDEFGH',
        assetTag: '',
        memMax: 17179869184,
        memSlots: 0,
      },
      chassis: {
        manufacturer: 'Apple Inc.',
        model: 'MacBookPro18,1',
        type: '',
        version: '',
        serial: 'ABCDEFGH',
        assetTag: '',
        sku: '',
      },
      os: {
        platform: 'darwin',
        distro: 'macOS',
        release: '12.6',
        codename: 'macOS Monterey',
        kernel: '21.6.0',
        arch: 'arm64',
        hostname: 'Nice-MacBook-Pro.local',
        fqdn: 'Nice-MacBook-Pro.local',
        codepage: 'UTF-8',
        logofile: 'darwin',
        serial: 'A-NICE-SERIAL',
        build: '21G115',
        servicepack: '',
        uefi: true,
      },
      uuid: {
        os: '1234567-a1b2c-34gz-345g-453gsfd3',
        hardware: 'ABCDEFGH',
        macs: [
          'bc:d0:74:52:3f:db',
          'da:7b:71:78:0a:9e',
          'da:7b:71:78:0a:9f',
          'da:7b:71:78:0a:a0',
          'ae:e3:61:73:45:97',
        ],
      },
      versions: {
        kernel: '21.6.0',
        openssl: '1.1.1',
        systemOpenssl: '2.8.3',
        systemOpensslLib: 'LibreSSL',
        node: '16.9.1',
        v8: '9.6.180.23-electron.0',
        npm: '8.18.0',
        yarn: '',
        pm2: '5.2.0',
        gulp: '',
        grunt: '',
        git: '2.37.0',
        tsc: '4.6.4',
        mysql: '',
        redis: '',
        mongodb: '',
        nginx: '',
        php: '',
        docker: '20.10.17',
        postfix: '3.2.2',
        postgresql: '',
        perl: '5.30.3',
        python: '',
        python3: '3.9.6',
        pip: '',
        pip3: '21.2.4',
        java: '',
        gcc: '14.0.0',
        virtualbox: '',
        dotnet: '',
      },
      cpu: {
        manufacturer: 'Apple',
        brand: 'M1 Pro',
        vendor: 'Apple',
        family: '458787763',
        model: '',
        stepping: '4',
        revision: '',
        voltage: '',
        speed: 2.4,
        speedMin: 2.4,
        speedMax: 2.4,
        governor: '',
        cores: 10,
        physicalCores: 10,
        processors: 1,
        socket: 'SOC',
        flags: '',
        virtualization: false,
        cache: { l1d: 131072, l1i: 65536, l2: 4194304, l3: 0 },
        efficiencyCores: 2,
        performanceCores: 8,
      },
      graphics: {
        controllers: [
          {
            vendor: 'Apple',
            model: 'Apple M1 Pro',
            bus: 'Built-In',
            vramDynamic: true,
            vram: null,
            deviceId: '',
            vendorId: '0x05ac',
            external: false,
            cores: 16,
            metalVersion: 'apple7',
          },
        ],
        displays: [
          {
            deviceName: 'WasntHereApple',
            vendor: 'Apple',
            vendorId: '610',
            model: 'Color LCD',
            productionYear: 0,
            serial: 'fd626d62',
            displayId: '1',
            main: true,
            builtin: true,
            connection: 'Internal',
            sizeX: null,
            sizeY: null,
            pixelDepth: null,
            resolutionX: 3456,
            resolutionY: 2234,
            currentResX: 1728,
            currentResY: 1117,
            positionX: 0,
            positionY: 0,
            currentRefreshRate: 120,
          },
          {
            deviceName: 'WasntHereAsus',
            vendor: 'Asus',
            vendorId: '6b3',
            model: 'ASUS MB166C',
            productionYear: 2022,
            serial: '12222',
            displayId: '2',
            main: false,
            builtin: false,
            connection: null,
            sizeX: null,
            sizeY: null,
            pixelDepth: null,
            resolutionX: 1920,
            resolutionY: 1080,
            currentResX: 1920,
            currentResY: 1080,
            positionX: 0,
            positionY: 0,
            currentRefreshRate: 60,
          },
        ],
      },
      net: [
        {
          iface: 'en5',
          ifaceName: 'en5',
          ip4: '',
          ip4subnet: '',
          ip6: '',
          ip6subnet: '',
          mac: 'da:7b:71:78:0a:7f',
          internal: false,
          virtual: false,
          operstate: 'up',
          type: 'wired',
          duplex: 'full',
          mtu: 1500,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'llw0',
          ifaceName: 'llw0',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::fce4:6dff:fe79:1997',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: 'ae:e3:61:73:45:97',
          internal: false,
          virtual: false,
          operstate: 'up',
          type: 'wireless',
          duplex: 'full',
          mtu: 1500,
          speed: 229,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'utun0',
          ifaceName: 'utun0',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::ff3a:6529:83b1:d969',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 1380,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'utun1',
          ifaceName: 'utun1',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::83e7:635d:8039:ed9f',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 2000,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'en5',
          default: false,
          ifaceName: 'utun2',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::ce81:b1c:bd2c:69e',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 1000,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
        },
        {
          iface: 'utun3',
          ifaceName: 'utun3',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::4781:682a:d65a:704a',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 1380,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'utun4',
          ifaceName: 'utun4',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::185c:ef7a:abe4:6f61',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 1380,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: false,
        },
        {
          iface: 'utun6',
          ifaceName: 'utun6',
          ip4: '',
          ip4subnet: '',
          ip6: 'fe80::7db8:b351:9e07:44fb',
          ip6subnet: 'ffff:ffff:ffff:ffff::',
          mac: '',
          internal: false,
          virtual: false,
          operstate: 'down',
          type: 'wired',
          duplex: 'full',
          mtu: 1380,
          speed: 0,
          dhcp: false,
          dnsSuffix: '',
          ieee8021xAuth: '',
          ieee8021xState: '',
          carrierChanges: 0,
          default: true,
        },
      ],
      memLayout: [
        {
          size: 17179869184,
          bank: '0',
          type: 'LPDDR5',
          ecc: false,
          clockSpeed: 0,
          formFactor: '',
          manufacturer: 'Apple',
          partNum: '',
          serialNum: '',
          voltageConfigured: null,
          voltageMin: null,
          voltageMax: null,
        },
      ],
      diskLayout: [
        {
          device: 'disk0',
          type: 'NVMe',
          name: 'APPLE SSD AP0512R',
          vendor: 'Apple',
          size: 500277792768,
          bytesPerSector: 0,
          totalCylinders: 0,
          totalHeads: 0,
          totalSectors: 0,
          totalTracks: 0,
          tracksPerCylinder: 0,
          sectorsPerTrack: 0,
          firmwareRevision: '387.140.',
          serialNum: '0ba0168944911e27',
          interfaceType: 'PCIe',
          smartStatus: 'Ok',
          temperature: null,
        },
      ],
    },
  },
};

export const NoRequirements = {
  args: {},
};
