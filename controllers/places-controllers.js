const HttpError = require("../models/http-error");

const {v4: uuidv4} = require('uuid');

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Empire State Building',
		description: 'One of the most famous sky scrapers in the world!',
		location: {
			lat: 40.748817,
			lng: -73.985428
		},
		imageUrl: 'https://www.planetware.com/photos-large/USNY/empire-state-building.jpg',
		address: '20 W 34th St, New York, NY 10118, United States',
		creator: 'u1'
	},
	{
		id: 'p2',
		title: 'Van gogh Museum',
		description: 'Amsterda\'s museum',
		location: {
			lat: 40.748817,
			lng: -73.985428
		},
		imageUrl: 'https://www.planetware.com/photos-large/USNY/empire-state-building.jpg',
		address: 'Amsterdam',
		creator: 'u2'
	}
];


const getPlaceById = (req, res, next) => {
	const placeId = req.params.id;
	const place = DUMMY_PLACES.find(p => p.id === placeId);
	
	if (!place) {
		return next(new HttpError('Could not find a place for the provided id', 404))
	}
	res.json({place});
}

const getPlacesByUserId = (req, res, next) => {
	const userId = req.params.uid;
	const place = DUMMY_PLACES.find(p => p.creator === userId);
	if (!place) {
		throw new HttpError('Could not find a place for the provided id', 404)
	}
	
	res.json({place});
}

const createPlace = (req, res, next) => {
	const {title, description, coordinates, address, creator} = req.body;
	
	const createdPlace = {
		id: uuidv4(),
		title,
		description,
		coordinates,
		address,
		creator
	}
	DUMMY_PLACES.push(createdPlace);
	res.status(201).json({place: createdPlace})
}

const updatePlace = (req, res, next) => {
	const {title, description} = req.body;
	const placeId = req.params.id;
	
	const updatedPlace = {...DUMMY_PLACES.find(p => p.id === placeId)};
	const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
	updatedPlace.title = title;
	updatedPlace.description = description;
	
	DUMMY_PLACES[placeIndex] = updatedPlace;
	res.status(200).json({place: updatedPlace})
}

const deletePlace = (req, res, next) => {
	const placeId = req.params.id;
	const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
	
	
	if (placeIndex === -1) {
		throw new HttpError('Could not find a place for that id', 404);
	}
	
	DUMMY_PLACES.splice(placeIndex, 1);
	
	res.status(200).json({message: "The place has been deleted"})
}

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;