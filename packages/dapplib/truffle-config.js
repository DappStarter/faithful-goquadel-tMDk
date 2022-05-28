require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain unknown imitate prison flip sleep'; 
let testAccounts = [
"0xa5effb823de6fb6520d2b77be4f9182372a7568e0abaa7bcc0ab88324ffad0e0",
"0x81d512a10fcd75157cf35079265f78e9dfba62a18de3d10fa9eea08a56e62bac",
"0x4e8f7dfde24324d82564a659b023aaa79e579fc97c4c0bb4967bfd6e2c707ed5",
"0x610f2917fdc5249d9c8f004b2f60ce41f2743a2e47ee5ecd0a2dd658a562e709",
"0xcd246c622f5cb1487d1de3c881417d6169b81e490fed7a96deaf308ba5abc002",
"0xa3ef229d0b88da903953c60745f9ad4c61381530a292ecb89a53c36931adf7f0",
"0xba2865bd758dbc12dd7ea44cd7453688d4cbf8391e25c4f39e75ced3f9e35cb0",
"0x0e3f14beeac6634e76ab08358af9ecc73ebd90a96440076e17b995eacec655a9",
"0x4d1e2d8037ffffd7263113bf0df265165d86cd7ef8b68ddb39152ae64c755fcb",
"0xcda994a88164b814394077f76e1839215dce8832dd3230df357a88c4bfe3bb80"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

