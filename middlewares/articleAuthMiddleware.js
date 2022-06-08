const services = require('../services/articleServices');

//Check if the there is any article with this ID
exports.checkID = async (req, res, next) => {
    try {
      const value = req.params.id;
      console.log(`Article id ${value}`);
      const noOfArticle = await services.validateID(value);
      console.log(noOfArticle); // === replace all console logs with winston logging methods
      if (noOfArticle < 1) {
        return res.status(404).json({
          status: 'fail',
          message: 'Invalidd Id',
        });
      }
    } catch {
      res.status(401).json({
        error: 'ID not found',
      });
    }
    next();
  };
  
  //Check if request body contains the mandatory fields
  exports.checkBody = (req, res, next) => {
    console.log(req.body);
    if (!req.body.title) {
      return res.status(400).json({
        status: 'fail',
        message: 'title missing',
      });
    }
    next();
  };
  