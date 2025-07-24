export const sharedHostingPlans = [
  {
    id: 'samp',
    name: 'SA-MP Hosting',
    description: 'Perfect for SA-MP game servers with high performance and reliability',
    features: [
      'Up to 500 players',
      'DDoS Protection',
      '99.9% Uptime Guarantee',
      'MySQL Database',
      'FTP Access',
      '24/7 Support',
      'Auto Backup',
      'Control Panel'
    ],
    plans: [
      {
        name: 'Starter',
        price: 15000,
        period: 'month',
        players: '50 Players',
        storage: '5GB SSD',
        bandwidth: '100GB',
        popular: false
      },
      {
        name: 'Professional',
        price: 35000,
        period: 'month',
        players: '200 Players',
        storage: '15GB SSD',
        bandwidth: '500GB',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 75000,
        period: 'month',
        players: '500 Players',
        storage: '50GB SSD',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  },
  {
    id: 'openmp',
    name: 'OpenMP Hosting',
    description: 'Next-generation multiplayer hosting with OpenMP compatibility',
    features: [
      'OpenMP Compatible',
      'High Performance CPU',
      'DDoS Protection',
      '99.9% Uptime',
      'MySQL Database',
      'FTP Access',
      '24/7 Support',
      'Auto Backup'
    ],
    plans: [
      {
        name: 'Basic',
        price: 20000,
        period: 'month',
        players: '100 Players',
        storage: '10GB SSD',
        bandwidth: '200GB',
        popular: false
      },
      {
        name: 'Advanced',
        price: 45000,
        period: 'month',
        players: '300 Players',
        storage: '25GB SSD',
        bandwidth: '750GB',
        popular: true
      },
      {
        name: 'Premium',
        price: 85000,
        period: 'month',
        players: '600 Players',
        storage: '75GB SSD',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  },
  {
    id: 'nodejs',
    name: 'Node.js Hosting',
    description: 'Optimized hosting for Node.js applications with modern features',
    features: [
      'Node.js 18+ Support',
      'NPM Package Manager',
      'SSL Certificate',
      'MongoDB Support',
      'Git Deployment',
      'PM2 Process Manager',
      '24/7 Monitoring',
      'Auto Scaling'
    ],
    plans: [
      {
        name: 'Developer',
        price: 25000,
        period: 'month',
        players: '1 App',
        storage: '5GB SSD',
        bandwidth: '100GB',
        popular: false
      },
      {
        name: 'Business',
        price: 55000,
        period: 'month',
        players: '5 Apps',
        storage: '20GB SSD',
        bandwidth: '500GB',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 120000,
        period: 'month',
        players: 'Unlimited Apps',
        storage: '100GB SSD',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  },
  {
    id: 'python',
    name: 'Python Hosting',
    description: 'Powerful Python hosting with Django, Flask, and FastAPI support',
    features: [
      'Python 3.11+ Support',
      'Django & Flask Ready',
      'PostgreSQL Database',
      'Redis Cache',
      'SSL Certificate',
      'Git Deployment',
      'Virtual Environment',
      'WSGI Support'
    ],
    plans: [
      {
        name: 'Starter',
        price: 30000,
        period: 'month',
        players: '1 App',
        storage: '10GB SSD',
        bandwidth: '200GB',
        popular: false
      },
      {
        name: 'Professional',
        price: 65000,
        period: 'month',
        players: '3 Apps',
        storage: '30GB SSD',
        bandwidth: '750GB',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 140000,
        period: 'month',
        players: 'Unlimited Apps',
        storage: '150GB SSD',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  }
];

export const dedicatedHostingPlans = [
  {
    id: 'epyc-7302',
    name: 'AMD EPYC 7302',
    description: 'High-performance dedicated server with AMD EPYC processor',
    specs: {
      cpu: 'AMD EPYC 7302 16-Core',
      cores: '16 Cores / 32 Threads',
      frequency: '3.0 GHz Base, 3.3 GHz Boost',
      ram: 'Up to 128GB DDR4',
      storage: 'NVMe SSD',
      network: '1Gbps Port'
    },
    features: [
      'Full Root Access',
      'DDoS Protection',
      'Hardware RAID',
      'IPMI Access',
      '99.9% Uptime SLA',
      '24/7 Support',
      'Free Setup',
      'Monthly Backup'
    ],
    plans: [
      {
        name: 'EPYC Basic',
        price: 1500000,
        period: 'month',
        ram: '32GB DDR4',
        storage: '500GB NVMe',
        bandwidth: '10TB',
        popular: false
      },
      {
        name: 'EPYC Pro',
        price: 2200000,
        period: 'month',
        ram: '64GB DDR4',
        storage: '1TB NVMe',
        bandwidth: '20TB',
        popular: true
      },
      {
        name: 'EPYC Max',
        price: 3500000,
        period: 'month',
        ram: '128GB DDR4',
        storage: '2TB NVMe',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  },
  {
    id: 'ryzen-7950x3d',
    name: 'AMD Ryzen 7950X3D',
    description: 'Gaming-optimized dedicated server with 3D V-Cache technology',
    specs: {
      cpu: 'AMD Ryzen 9 7950X3D',
      cores: '16 Cores / 32 Threads',
      frequency: '4.2 GHz Base, 5.7 GHz Boost',
      ram: 'Up to 128GB DDR5',
      storage: 'Gen4 NVMe SSD',
      network: '1Gbps Port'
    },
    features: [
      '3D V-Cache Technology',
      'Gaming Optimized',
      'Full Root Access',
      'DDoS Protection',
      'Hardware RAID',
      'IPMI Access',
      '99.9% Uptime SLA',
      '24/7 Support'
    ],
    plans: [
      {
        name: 'Gaming Basic',
        price: 1800000,
        period: 'month',
        ram: '32GB DDR5',
        storage: '1TB Gen4 NVMe',
        bandwidth: '15TB',
        popular: false
      },
      {
        name: 'Gaming Pro',
        price: 2800000,
        period: 'month',
        ram: '64GB DDR5',
        storage: '2TB Gen4 NVMe',
        bandwidth: '25TB',
        popular: true
      },
      {
        name: 'Gaming Max',
        price: 4200000,
        period: 'month',
        ram: '128GB DDR5',
        storage: '4TB Gen4 NVMe',
        bandwidth: 'Unlimited',
        popular: false
      }
    ]
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

