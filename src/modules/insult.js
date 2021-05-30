const bodyParts = [
    "head", "arm", "back", "waist", "butt", "leg", "face", "chest", "stomach", "hip", "hand", "foot",
    "eye", "eyebrow", "nose", "mouth", "chin", "hair", "ear", "lips", "neck",
    "nail", "thumb", "finger", "wrist",
    "palm", "shoulder", "forearm", "upper arm", "elbow", "armpit",
    "knee", "thigh", "shin", "calf", "ankle", "heel", "toe",
    "forehead", "temple", "eyebrow", "eyelid", "eyelash", "pupil", "cheek",
    "teeth", "tooth", "tongue", "brain", "throat", "stomach", "heart", "abdomen", "breast", "pubis", "groin"
];

const adjectives = [
    "plump", "stocky", "overweight", "fat", "slim", "trim", "skinny"
];

const comparators = [
    "looks", "smells", "feels", "tastes", "sounds"
];

const animals = [
    "lizard", "cat", "cattle", "dog", "donkey", "goat", "guinea pig",
    "horse", "pig", "rabbit", "sheep", "buffalo",
    "chicken", "duck", "goose", "pigeon", "turkey",
    "aardvark", "aardwolf", "elephant", "leopard",
    "albatross", "alligator", "alpaca", "amphibian",
    "anaconda", "angelfish", "anglerfish", "ant", "anteater",
    "antelope", "antlion", "ape", "aphid", "fox", "wolf",
    "armadillo", "crab", "baboon", "badger", "eagle",
    "bandicoot", "barnacle", "barracuda", "basilisk",
    "bass", "bat", "whale", "bear", "beaver", "bedbug",
    "bee", "beetle", "bird", "bison", "panther", "spider",
    "boa", "boar", "bobcat", "jellyfish", "butterfly", 
    "buzzard", "camel", "canid", "caribou", "carp", "caterpillar",
    "catfish", "centipede", "chameleon", "cheetah", "chimpanzee",
    "chinchilla", "chipmunk", "clam", "clownfish", "cobra",
    "cockroach", "cod", "condor", "constrictor", "cougar", 
    "cow", "coyote", "cricket", "crocodile", "crow", "deer",
    "dolphin", "dung beetle", "eagle", "earthworm", "eel",
    "elk", "falcon", "ferret", "finch", "firefly", "fish",
    "flamingo", "flea", "fly", "frog", "gazelle", "gecko",
    "gerbil", "giraffe", "gopher", "gorilla", "grasshopper",
    "grouse", "hedgehog", "hermit crab", "heron", "herring",
    "hippopotamus", "hummingbird", "humpback whale", "hyena",
    "iguana", "impala", "jackal", "kangaroo", "koala", "koi",
    "komodo dragon", "krill", "ladybug", "lamprey", "leech",
    "lemming", "lemur", "leopard", "lion", "lizard", "llama",
    "lobster", "manatee", "meerkat", "mole", "mongoose",
    "monkey", "moose", "mosquito", "moth", "mouse", "mule",
    "narwhal", "newt", "nightingale", "octopus", "orangutan",
    "orca", "ostrich", "otter", "owl", "ox", "panda", "panther",
    "parakeet", "parrot", "peacock", "pelican", "penguin", "pheasant",
    "pig", "pigeon", "piranha", "platypus", "polar bear", "pony",
    "porcupine", "possum", "prawn", "praying mantis", "primate",
    "python", "quail", "raccoon", "rat", "rattlesnake", "raven",
    "reindeer", "rhinoceros", "rooster", "salamander", "salmon",
    "scallop", "scorpion", "shark", "shrimp", "skunk", "sloth",
    "slug", "snail", "snake", "spider", "squid", "squirrel",
    "swallow", "swan", "swordfish", "tiger", "toad", "tortoise",
    "trout", "tuna", "turkey", "viper", "vulture", "walrus", "weasel",
    "whale", "zebra"
];

const genitalia = [
    "testis", "ovary", "appendix testis", "fallopian tubes", "prostatic utricle",
    "uterus", "cervix", "vagina", "scrotum", "penile skin", "penis", "clitoris",
    "foreskin", "clitoral hood", "vulva"
];

const excretions = [
    "bile", "snot", "blood", "diarrhea", "ejaculate", "sperm", "semen", "saliva", "urine", "tear", "sweat", "vomit"
];

const suffix = [
    "bag", "wipe", "munch"
];

/**
 * Generates a random number between min and max value specified
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
 function rnd(min, max) {
    return (Math.floor(
        Math.random()
        * Math.pow(10, max.toString().length)
    ) % max) + min;
}

/**
 * Flips a coin to return true or false
 * @returns {boolean}
 */
function flipCoin() {
    return rnd(1, 2) == 1;
    //return rnd(1, 100) % 2 == 0;
}

/**
 * Gets a random word from the given array.
 * @param {string[]} opts 
 * @returns {string}
 */
function word(opts) {
    const i = rnd(0, opts.length);

    const val = opts[i];

    return `${val} `;
}


/**
 * Generates a random insult
 * @returns {string}
 */
function next() {
    let output = ["Your "];

    // take a person's most marked physical feature
    if (flipCoin()) {
        output.push(word(adjectives)); // (optional) add an adjective
    }
    output.push(word(bodyParts));


    // compare it with genitalia (male, female, or animal)
    output.push(word(comparators));
    output.push("like a ");
    if (flipCoin())
        output.push(word(animals)); // comparing to an animal
    output.push(word(genitalia));

    if (flipCoin()) {
        // (optional) reference to excretion from any of the glorious openings offered by the human body
        output[output.length - 1] = output[output.length - 1].trim(); // trim the space for the comma
        output.push(", you ");
        output.push(word(excretions));

        // end with the suffix - bag, wipe or munch
        output.push(word(suffix).trim());
    }

    // eg. Your head looks like a lizard butt flap, you snot wipe
    const insult = output.join('');

    return insult;
}

// expose the next function.
module.exports = next;