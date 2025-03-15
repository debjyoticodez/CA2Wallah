var OpenAI = require('openai');
var fs = require('fs');
//var dotenv = require('dotenv').config();
const api_key = process.env.API_KEY;
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: api_key,
  defaultHeaders: {

  },
});

const model = ["google/gemini-2.0-flash-lite-preview-02-05:free","meta-llama/llama-3.3-70b-instruct:free"];
  

exports.main=async function main(param) {
  const completion = await openai.chat.completions.create({
    //model: 'google/gemini-2.0-flash-lite-preview-02-05:free',
    model: model[1],
    
    messages: [
      {
        role: 'user',
        content: param[0],
      },
    ],
  });

  console.log(completion.choices[0].message);
  /*fs.appendFile(param[1], completion.choices[0].message['content'], function (err) {
    if (err) throw err;
    console.log('Saved!');
  });*/
  //console.log(completion.choices);
  return (completion.choices[0].message['content']);
}
