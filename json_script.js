			var arrayLength = arrayOfData.length;
			//console.log(arrayLength);
			var parsedArray = arrayOfData.slice(0,9).concat(arrayOfData.slice(arrayLength-9, arrayLength));
			//console.log(parsedArray);


			var arrayByIncome = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (parseInt(a.income) > parseInt(b.income)) ? -1 : ((parseInt(a.income) < parseInt(b.income)) ? 1 : 0);});
			var arrayByDiabetes = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.diabetes == "None" || isNaN(b.diabetes)) ? -1 : ((parseFloat(a.diabetes) > parseFloat(b.diabetes)) ? 1 : ((parseFloat(a.diabetes) < parseFloat(b.diabetes)) ? -1 : 0));});
			var arrayByStds = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.std == "None" || isNaN(b.std)) ? -1 : ((parseFloat(a.std) > parseFloat(b.std)) ? 1 : ((parseFloat(a.std) < parseFloat(b.std)) ? -1 : 0));});
			var arrayBySmoking = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.smoking == "None" || isNaN(b.smoking)) ? -1 : ((parseFloat(a.smoking) > parseFloat(b.smoking)) ? 1 : ((parseFloat(a.smoking) < parseFloat(b.smoking)) ? -1 : 0));});
			var arrayByDrinking = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.drinking == "None" || isNaN(b.drinking)) ? -1 : ((parseFloat(a.drinking) > parseFloat(b.drinking)) ? 1 : ((parseFloat(a.drinking) < parseFloat(b.drinking)) ? -1 : 0));});
			//console.log(arrayByDrinking);
			var arrayByCarDeaths = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.car_crash_deaths == "None" || isNaN(b.car_crash_deaths)) ? -1 : ((parseFloat(a.car_crash_deaths) > parseFloat(b.car_crash_deaths)) ? 1 : ((parseFloat(a.car_crash_deaths) < parseFloat(b.car_crash_deaths)) ? -1 : 0));});
			var arrayByHomicides = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.homicide == "None" || isNaN(b.homicide)) ? -1 : ((parseFloat(a.homicide) > parseFloat(b.homicide)) ? 1 : ((parseFloat(a.homicide) < parseFloat(b.homicide)) ? -1 : 0));});
			var arrayByHealthCost = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.health_care_cost == "None" || isNaN(b.health_care_cost)) ? -1 : ((parseFloat(a.health_care_cost) > parseFloat(b.health_care_cost)) ? 1 : ((parseFloat(a.health_care_cost) < parseFloat(b.health_care_cost)) ? -1 : 0));});
			var arrayByHIV = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.hiv == "None" || isNaN(b.hiv)) ? -1 : ((parseFloat(a.hiv) > parseFloat(b.hiv)) ? 1 : ((parseFloat(a.hiv) < parseFloat(b.hiv)) ? -1 : 0));});
			var arrayByCrime = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.crime == "None" || isNaN(b.crime)) ? -1 : ((parseFloat(a.crime) > parseFloat(b.crime)) ? 1 : ((parseFloat(a.crime) < parseFloat(b.crime)) ? -1 : 0));});
			var arrayByAlcoholDeaths = jQuery.extend(true, [], parsedArray).sort(function(a,b) {return (b.alcohol_driving_deaths == "None" || isNaN(b.alcohol_driving_deaths)) ? -1 : ((parseFloat(a.alcohol_driving_deaths) > parseFloat(b.alcohol_driving_deaths)) ? 1 : ((parseFloat(a.alcohol_driving_deaths) < parseFloat(b.alcohol_driving_deaths)) ? -1 : 0));});

			//console.log(arrayByStds);
			var nodes = [];
			var links = [];

			arrayByIncome.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Income", "vals":county.income, "geo":county.geo, "label" : true});
				var target = arrayByDiabetes.findIndex(function (x) { return x.geo == county.geo; })+18;
				links.push({"source": i, "target": target, "value": 1});
			});
			var diabetesNodes = [];
			arrayByDiabetes.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Diabetes", "vals":county.diabetes, "geo":county.geo, "label" : false});
				var target = arrayByStds.findIndex(function (x) { return x.geo == county.geo; })+(18*2);
				links.push({"source": i+18, "target": target, "value": 1});
			});

			arrayByStds.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "STDs", "vals":county.std, "geo":county.geo, "label" : false});
				var target = arrayBySmoking.findIndex(function (x) { return x.geo == county.geo; })+(18*3);
				links.push({"source": i+(18*2), "target": target, "value": 1});
			});

			arrayBySmoking.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Smoking", "vals":county.smoking, "geo":county.geo, "label" : false});
				var target = arrayByDrinking.findIndex(function (x) { return x.geo == county.geo; })+(18*4);
				links.push({"source": i+(18*3), "target": target, "value": 1});
			});

			arrayByDrinking.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Drinking", "vals":county.drinking, "geo":county.geo, "label" : false});
				var target = arrayByCarDeaths.findIndex(function (x) { return x.geo == county.geo; })+(18*5);
				links.push({"source": i+(18*4), "target": target, "value": 1});
			});

			arrayByCarDeaths.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Car Deaths", "vals":county.car_crash_deaths, "geo":county.geo, "label" : false});
				var target = arrayByHomicides.findIndex(function (x) { return x.geo == county.geo; })+(18*6);
				links.push({"source": i+(18*5), "target": target, "value": 1});
			});

			arrayByHomicides.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Homicides", "vals":county.homicide, "geo":county.geo, "label" : false});
				var target = arrayByHealthCost.findIndex(function (x) { return x.geo == county.geo; })+(18*7);
				links.push({"source": i+(18*6), "target": target, "value": 1});
			});

			arrayByHealthCost.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Health Cost", "vals":county.health_care_cost, "geo":county.geo, "label" : false});
				var target = arrayByHIV.findIndex(function (x) { return x.geo == county.geo; })+(18*8);
				links.push({"source": i+(18*7), "target": target, "value": 1});
			});

			arrayByHIV.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "HIV", "vals":county.hiv, "geo":county.geo, "label" : false});
				var target = arrayByCrime.findIndex(function (x) { return x.geo == county.geo; })+(18*9);
				links.push({"source": i+(18*8), "target": target, "value": 1});
			});

			arrayByCrime.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Crime", "vals":county.crime, "geo":county.geo, "label" : false});
				var target = arrayByAlcoholDeaths.findIndex(function (x) { return x.geo == county.geo; })+(18*10);
				links.push({"source": i+(18*9), "target": target, "value": 1});
			});

			arrayByAlcoholDeaths.forEach(function (county, i) {
				nodes.push({"name" : county.name, "property": "Alcohol Deaths", "vals":county.alcohol_driving_deaths, "geo":county.geo, "label" : false});
			});


			var my_json = JSON.stringify({"nodes":nodes, "links":links});