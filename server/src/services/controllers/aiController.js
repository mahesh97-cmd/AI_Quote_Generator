const generateQuote = require("../aiService");

const getMotiationalQuote = async (req, res) => {
  try {
    let quote = await generateQuote();
    quote = quote.trim(); 
    quote = quote.replace(/\*\*/g, ""); 
    quote = quote.replace(/^"(.*)"$/, "$1"); 
    quote = quote.replace(/\\"/g, '"');
    console.log(quote);
    res.status(200).json({ quote });
  } catch (error) {
    console.error(error);
  }
};

module.exports = getMotiationalQuote;
