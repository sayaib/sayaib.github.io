const snippetsLinkName = (str) => {
  return str
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join words with a space
};

const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    // Apply highlight class
    element.classList.add("highlighted");

    // Remove it after 1.5 seconds
    setTimeout(() => {
      element.classList.remove("highlighted");
    }, 1500);
  }
};

module.exports = { snippetsLinkName, scrollToId };
