const {application} = require("./server");
require("./logger/logger");
application.listen(process.env.PORT || 3000, () => {
  console.log(`listening On Port ${process.env.PORT || 3000}`);
});

throw new Error("Generated by Me ");
