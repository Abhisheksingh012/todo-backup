const Count = require("../models/count");

const initCounter =async ()=>{
    try {
        const existingCountData = await Count.findOne({});
        if (existingCountData) {
          console.log('Count data already exists');
          return;
        }
        const initialCountData = new Count({ postCount: 0, putCount: 0 });
        await initialCountData.save();
        console.log('Initial count data inserted successfully');
      } catch (err) {
        console.error('Error initializing count data:', err);
      }
}
module.exports=initCounter;