import { Network, Alchemy, NftFilters } from "alchemy-sdk";

const config = {
	apiKey: "mainnet-api-key",
	network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const main = async () => {
	let nfts = await alchemy.nft.getNftsForOwner(
		"nft-owner-wallet-address",
		{ excludeFilters: [NftFilters.SPAM] }
	);
    nfts = nfts["ownedNfts"];

    for(let i=0; i < nfts.length; i++){
        console.log(` * ${nfts[i].title}`)
    }
};

main();

