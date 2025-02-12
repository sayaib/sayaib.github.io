const snippetsLinkName = (str) => {
  return str
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join words with a space
};

module.exports = { snippetsLinkName };
