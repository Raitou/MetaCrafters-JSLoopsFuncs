/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

let NFT = function(name, age, schoolID){
    this.name = name;
    this.age = age;
    this.schoolID = schoolID;
}

let NFTBuilder = function () {
    return {
        setName: function (name){
            this.name = name;
            return this;
        },
        setAge: function (age){
            this.age = age;
            return this;
        },
        setSchoolID: function(schoolID){
            this.schoolID = schoolID;
            return this;
        },
        build: function (){
            return new NFT(this.name, this.age, this.schoolID);
        }
    }
}

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (NFT) {
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    NFTs.forEach(i => console.log(i));
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length)
}

// call your functions below this line

mintNFT(new NFTBuilder()
            .setName("Foo One")
            .setAge("23")
            .setSchoolID("201800001")
            .build());

mintNFT(new NFTBuilder()
            .setName("Foo Two")
            .setAge("24")
            .setSchoolID("201800002")
            .build());

mintNFT(new NFTBuilder()
            .setName("Foo Three")
            .setAge("26")
            .setSchoolID("201800003")
            .build());

listNFTs();
getTotalSupply();