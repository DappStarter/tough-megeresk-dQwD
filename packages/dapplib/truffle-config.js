require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strategy razor outside purity grace opera slot general'; 
let testAccounts = [
"0x07b4a69d8e175d9740645a624522b6db315f55b5eeec2dc69c28bc2658438463",
"0xf1824528c11d11662fcf18465f99976a7401671e188c58cb52ca22d921a3ad1c",
"0xa785aa4a8819ea292d7ccfc7872ad44c7ff2b8108dc5dfc37827b75bce207c69",
"0xdbc126cad514acd1c069201e6578d2cb43f59103b40aaec85a29c08602a2b7c2",
"0x64e4d28cc698f170d428c3dc6e1850d0b386a7cf917484787cdfb7a95d001621",
"0x981774a471196d99c47366e37242398584ad6a497af66d1d7a9a7d6922f5b5ad",
"0xdf225802769d816fc4b61fdcbeb0ff02eac61999c4ed7208a3be86b28f5f2a4b",
"0x9bd8003ba50400a9137fe6dc9db41bbccfac11a6f7dfc921ef49a7aba32947e6",
"0x359fd3b376d9ea97fe24f8de30de0c3d5977482ef43cefe3ca83a1cb5b1e1d9c",
"0x65e88a38ea77efb1769cc8cc6f83c31777a2452482c6378f038caeafe45b7cf5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


