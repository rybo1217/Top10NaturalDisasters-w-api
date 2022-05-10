# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)
* https://group21brownryan.herokuapp.com
* Top 10 US States with most Occurances of Natural Disasters
* Our projects takes a database of natural disasters and provides a front end visual display of the top 10 states with the most occurences with a map and also with a table.
* Target Browser is google chrome on Mac and Pc although it still functions on mobile
* Developer manual is below
*User Manual 
*https://github.com/rybo1217/Group21FinalNew
*How to install your application and all dependencies
*	1.	Fork repository from link provided
*	2.	Open repository in desired text editor
*How to run your application on a server
*	1.	Open the terminal
*	2.	Type npm install
*	3.	Type npm start
*How to run any tests you have written for your software
*1.Open postman 
*2.Type in the corresponding path to the test you are running 
*3.Make sure the route you are testing is selected 
*4.Click Send 
*
*The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
*The comments are on the same line as the “router. ” for each route explains what they do
*
*
*router.get('/disasters/:disaster_id', async (req, res) => {// This route gathers all the data from the disasters table( type of disasters)
       try {
         const disas = await db.disaster_type.findAll({
           where: {
             disaster_id: req.params.disaster_id
           }
         });
          res.json(disas);
       } catch (err) {
         console.error(err);
         res.error('Server error');
       }
     });





*router.get('/stateloc/:record_id', async (req, res) => {// This route gathers all the data from the stateloc table(locaiton of diasters)
       try {
         const dt = await db.record_state.findAll({
           where: {
             record_id: req.params.record_id
           }
         });
          res.json(dt);
       } catch (err) {
         console.error(err);
         res.send(err);
       }
     });
    
*     router.delete('/stateloc/:record_id', async (req, res) => {Thhis route deletes an element from the location table
       try {
         await db.record_state.destroy({
           where: {
             record_id: req.params.record_id
           }
         });
         res.send('Successfully Deleted');
       } catch (err) {
         console.error(err);
         res.error('Server error');
       }
     });

*     router.put('/stateloc/:record_id', async (req, res) => { this route adds to the location table
       try {
         await db.record_state.update(
           {
             record_id: req.body.record_id,
             state: req.body.state
           },
           {
             where: {
               record_id: req.body.record_id
             }
           }
         );
         console.log(req.body)
         res.send('Successfully Updated');
       } catch (err) {
         console.error(err);
       
         res.error('Server error');
       }
     });//Not taking the input but saying its update
    

   *  router.post('/stateloc/:record_id', async (req, res) => {this route updates to the locations table
       const halls = await db.record_state.findAll();
       const currentId = (await halls.length) + 1;
       try {
         const newState = await db.record_state.create({
           record_id: currentId,
           state: req.body.state,
           record_id: req.body.record_id
          
         });
         res.json(newState);
       } catch (err) {
         console.error(err);
         res.send('Already Exist');
       }
     });
