const starwars_controller = {}
const fetch = require('node-fetch')
const renameKeys = require('rename-keys')

/*I Translate*/
var projectId = ''

const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate({projectId});

translate.engine = "google";
translate.key = "";
/*F Translate*/


const StarWars = require('../models/starwars')


starwars_controller.getdata = (req,res)=>{

	/*Se obtiene la persona y se lee el formato JSON*/
	fetch('https://swapi.py4e.com/api/people/', {
		 headers: { 'Content-Type': 'application/json' }
	})
	.then(res => res.json())
	.then(json => {

		async function quickStart(){
			//Cambiar de personaje
			var avatar = json.results[9]

			//I data
			var info = JSON.stringify(avatar)
			//F data

			/*I Solo valores*/
			var values = Object.values(avatar)
			/*F solo valoes*/


			/*I solo atributos*/
			var keys = Object.keys(avatar)
			/*F solo atributos*/


			/*I traducción*/
			const target = 'es'

			const [translation] = await translate.translate(keys, target);
  			//console.log(`Text: ${keys}`);
  			//console.log(`Translation: ${translation}`);
  			/*F traducción*/

  			var obj = {}

  			for(var i = 0; i<translation.length; i++){
  				obj[translation[i]] = values[i];
  			}

  			//console.log(obj)
  			
  			var starWars = new StarWars({
				tdata : JSON.stringify(obj)
			})
			console.log(starWars)


			/*I guardado*/
			starWars.save().then(
			    () =>{
			    	res.send('/')
			    }
			).catch(
			    (error) =>{
			    	res.status(400).json({
			        error: error
			    	})
			   	}
			)
			/*F guardado*/

		}
		quickStart();
	})


}


module.exports = starwars_controller;
